// Add these imports to the top of your PremiumPlan.jsx
import { fetchOrGeneratePlan } from '../lib/fetchOrGeneratePlan';
import { buildTasksFromPlan } from '../lib/buildTasksFromPlan';
import { ProgressHeader, TrackCard, CoreSection } from '../components/plan/PlanProgressComponents';

// Add these state variables to your PremiumPlan component
const [tasks, setTasks] = useState([]);
const [taskProgress, setTaskProgress] = useState({});
const [overallPercent, setOverallPercent] = useState(0);
const [phasePercents, setPhasePercents] = useState([0, 0, 0]);

// Add this function to generate/fetch the plan
const generatePlan = async () => {
  try {
    setLoadingStep('Generating your personalized plan...');
    
    // Generate the plan using your edge function
    const { evolution_paths } = await fetchOrGeneratePlan(
      latestAssessment.id, 
      user.id, 
      latestAssessment.answers
    );
    
    // Build tasks from the plan
    const planTasks = buildTasksFromPlan(evolution_paths);
    setTasks(planTasks);
    
    // Load existing progress
    await loadTaskProgress();
    
    // Save the plan back to assessment
    await supabase
      .from('ai_risk_assessments')
      .update({ evolution_paths })
      .eq('id', latestAssessment.id);
      
    setPersonalizedPlan(evolution_paths);
    
  } catch (error) {
    console.error('Error generating plan:', error);
  }
};

// Add this function to load task progress
const loadTaskProgress = async () => {
  try {
    const { data: progressData } = await supabase
      .from('ai_plan_task_progress')
      .select('*')
      .eq('user_id', user.id)
      .eq('assessment_id', latestAssessment.id);
    
    const progressMap = {};
    progressData?.forEach(row => {
      progressMap[row.task_key] = row.completed;
    });
    
    setTaskProgress(progressMap);
    calculateProgress(progressMap);
  } catch (error) {
    console.error('Error loading progress:', error);
  }
};

// Add this function to handle task toggles
const handleTaskToggle = async (task, completed) => {
  try {
    // Update local state immediately
    const newProgress = { ...taskProgress, [task.key]: completed };
    setTaskProgress(newProgress);
    calculateProgress(newProgress);
    
    // Save to database
    await supabase
      .from('ai_plan_task_progress')
      .upsert({
        user_id: user.id,
        assessment_id: latestAssessment.id,
        track_id: task.trackId,
        task_key: task.key,
        completed,
        completed_at: completed ? new Date().toISOString() : null
      }, { 
        onConflict: 'user_id,assessment_id,task_key' 
      });
      
  } catch (error) {
    console.error('Error updating task:', error);
  }
};

// Add this function to calculate progress percentages
const calculateProgress = (progressMap) => {
  const completedCount = Object.values(progressMap).filter(Boolean).length;
  const totalTasks = tasks.length;
  
  const overall = totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0;
  setOverallPercent(overall);
  
  // Calculate phase percentages (simplified)
  const phases = [0, 0, 0]; // Fast Start, Momentum, Positioning
  // You can implement more sophisticated phase calculation here
  setPhasePercents(phases);
};

// Add this useEffect to generate plan when assessment loads
useEffect(() => {
  if (latestAssessment && !personalizedPlan) {
    if (latestAssessment.evolution_paths) {
      // Plan already exists
      const planTasks = buildTasksFromPlan(latestAssessment.evolution_paths);
      setTasks(planTasks);
      setPersonalizedPlan(latestAssessment.evolution_paths);
      loadTaskProgress();
    } else {
      // Generate new plan
      generatePlan();
    }
  }
}, [latestAssessment]);

// Replace your existing plan rendering with this:
const renderPlanContent = () => {
  if (!personalizedPlan || tasks.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Generating your personalized plan...</p>
      </div>
    );
  }

  const coreTasks = tasks.filter(t => t.trackId === 'core');
  const trackData = ['writing_comms', 'data_reporting', 'workflow_automation'].map(trackId => {
    const track = personalizedPlan.tracks?.find(t => t.id === trackId);
    const trackTasks = tasks.filter(t => t.trackId === trackId);
    const completedSteps = trackTasks.filter(t => taskProgress[t.key]).length;
    
    return { track, tasks: trackTasks, completedSteps };
  }).filter(item => item.track);

  return (
    <div className="space-y-8">
      <ProgressHeader 
        overall={overallPercent}
        phases={phasePercents}
        persona={personalizedPlan.persona || 'AI Strategy Lead'}
        weeklyHours={personalizedPlan.weekly_investment_hours || 3}
      />
      
      <CoreSection 
        coreTasks={coreTasks}
        progressMap={taskProgress}
        onToggle={handleTaskToggle}
      />
      
      {trackData.map(({ track, tasks: trackTasks, completedSteps }) => (
        <TrackCard
          key={track.id}
          track={track}
          steps={trackTasks}
          progressMap={taskProgress}
          onToggle={handleTaskToggle}
          completedSteps={completedSteps}
        />
      ))}
    </div>
  );
};