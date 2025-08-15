import React, { useState, useEffect } from 'react';
import { CheckCircle, Target, ChevronDown, ChevronUp, Clock, AlertCircle, Info } from 'lucide-react';

// Improved Sticky Progress Header - thinner and more elegant
export const ProgressHeader = ({ overall, phases, persona, weeklyHours, userProfile, userRole }) => {
  const firstName = userProfile?.first_name || 'Professional';
  const roleDisplayName = userRole || persona || 'Professional';
  
  return (
    <div className="sticky top-4 z-10 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-500 text-white mb-8 shadow-lg">
      {/* Main header - more compact */}
      <div className="flex items-center justify-between p-4 pb-2">
        <div>
          <div className="text-xs opacity-90">90-Day AI Plan</div>
          <div className="text-2xl font-semibold mt-0.5">{overall}% complete</div>
          <div className="text-xs opacity-90 mt-0.5">
            {firstName}'s {roleDisplayName} Enhancement • {(weeklyHours ?? 3)}h/week
          </div>
        </div>
        <Target className="w-10 h-10 opacity-80" />
      </div>
      
      {/* Phase progress bars - much thinner and cleaner */}
      <div className="px-4 pb-4">
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Fast Start', phase: 'W1-W4', percent: phases.fastStart || 0 },
            { label: 'Momentum', phase: 'W5-W8', percent: phases.momentum || 0 },
            { label: 'Positioning', phase: 'W9-W12', percent: phases.positioning || 0 }
          ].map((phase, i) => (
            <div key={phase.label} className="bg-white/10 rounded-lg p-2.5">
              <div className="text-xs font-medium opacity-95">{phase.label}</div>
              <div className="text-xs opacity-75 mb-1.5">{phase.phase}</div>
              {/* Thinner progress bar */}
              <div className="w-full h-1.5 bg-white/20 rounded-full">
                <div 
                  className="h-full bg-white rounded-full transition-all duration-500" 
                  style={{ width: `${phase.percent}%` }}
                />
              </div>
              <div className="text-xs mt-1 font-medium">{phase.percent}%</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Tooltip component for "why important" info
const InfoTooltip = ({ content, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={`relative inline-block ${className}`}>
      <button
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="text-blue-500 hover:text-blue-700 transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        <Info className="w-3 h-3" />
      </button>
      
      {isVisible && (
        <div className="absolute z-50 w-64 p-2 text-xs bg-gray-900 text-white rounded shadow-lg -top-2 left-5 transform">
          <div className="relative">
            {content}
            {/* Arrow pointing to icon */}
            <div className="absolute top-2 -left-2 w-0 h-0 border-t-2 border-b-2 border-r-4 border-transparent border-r-gray-900"></div>
          </div>
        </div>
      )}
    </div>
  );
};

// Task Note Section Component
const TaskNoteSection = ({ task, noteMap, onSaveNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [noteText, setNoteText] = useState(noteMap?.[task.key] || '');

  useEffect(() => {
    setNoteText(noteMap?.[task.key] || '');
  }, [noteMap, task.key]);

  const handleSave = () => {
    onSaveNote(task, noteText);
    setIsEditing(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <h5 className="text-xs font-medium text-gray-700">📝 Personal Notes:</h5>
        {!isEditing && (
          <button 
            onClick={() => setIsEditing(true)}
            className="text-xs text-blue-600 hover:text-blue-800"
          >
            {noteMap?.[task.key] ? 'Edit' : 'Add note'}
          </button>
        )}
      </div>
      
      {isEditing ? (
        <div className="space-y-2">
          <textarea 
            value={noteText}
            onChange={(e) => setNoteText(e.target.value || '')}
            className="w-full p-2 text-xs border border-gray-300 rounded resize-none"
            rows={3}
            placeholder="Add your notes, links, or progress updates..."
          />
          <div className="flex gap-2">
            <button 
              onClick={handleSave}
              className="px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700"
            >
              Save
            </button>
            <button 
              onClick={() => {
                setIsEditing(false);
                setNoteText(noteMap?.[task.key] || '');
              }}
              className="px-3 py-1 border border-gray-300 text-xs rounded hover:bg-gray-50"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="text-xs text-gray-600 bg-gray-50 p-2 rounded min-h-[40px]">
          {noteMap?.[task.key] || 'No notes yet. Click "Add note" to get started.'}
        </div>
      )}
    </div>
  );
};

// Enhanced Core Section with collapsible tasks and full enriched content
export const CoreSection = ({ coreTasks, progressMap, noteMap, onToggle, onSaveNote, plan }) => {
  const [expandedTasks, setExpandedTasks] = useState({});
  const [isCoreExpanded, setIsCoreExpanded] = useState(true);
  
  const nonNegotiables = coreTasks.filter(t => t.type === 'non_negotiable');
  
  const toggleTaskExpanded = (taskKey) => {
    setExpandedTasks(prev => ({
      ...prev,
      [taskKey]: !prev[taskKey]
    }));
  };

  // Enhanced core task details with complete information and "why important" context
  const coreTaskDetails = {
    "Define 2–3 KPIs and baseline them": {
      description: "Establish measurable success criteria before starting any AI implementation. These metrics will help you prove ROI and track your progress.",
      whyImportant: "Without baseline metrics, you can't prove ROI to your boss or know if your AI implementation is actually working. This is what separates successful AI adoption from expensive experiments.",
      examples: ["Time saved per week (hours)", "Error reduction percentage", "Tasks automated count", "Quality score improvement", "Response time reduction"],
      timeEstimate: "15-30 min",
      difficulty: "Easy",
      tips: [
        "Start with time-based metrics (easiest to measure and most convincing to management)",
        "Use a simple spreadsheet to track before/after - don't overcomplicate it",
        "Pick metrics your boss already cares about to ensure buy-in",
        "Baseline for at least 1 week before making changes",
        "Include both efficiency and quality metrics"
      ],
      dod: [
        "Baseline captured — logged manual vs AI time (T_manual vs T_AI) in task notes.",
        "Prompt Card v1 created — one-page doc with your best prompt, inputs, style rules, and QA checklist; link saved in task notes."
      ]
    },
    "Create a Prompt Library (versioned, examples, do/don't)": {
      description: "Build a reusable collection of tested prompts with clear guidelines. This becomes your team's AI playbook for consistent, high-quality results.",
      whyImportant: "A good prompt library is worth 20+ hours per week in time savings. It prevents your team from reinventing the wheel and ensures consistent quality across all AI outputs.",
      examples: ["Email response templates", "Report summary prompts", "Data analysis requests", "Meeting notes formatting", "Status update generation"],
      timeEstimate: "45-60 min", 
      difficulty: "Medium",
      tips: [
        "Start with 3-5 prompts you use frequently - quality over quantity",
        "Include both good and bad examples so others learn what NOT to do",
        "Version your prompts when you improve them (v1.0, v1.1, etc.)",
        "Add context about when to use each prompt",
        "Include expected output format and quality checks"
      ],
      dod: [
        "Checks added — accuracy/privacy guardrails added to the prompt.",
        "Style/validation applied — tone rules and review checklist added."
      ]
    },
    "Set data privacy rules (PII, access, storage, approvals)": {
      description: "Establish clear guidelines for what data can be used with AI tools. This protects your company and ensures compliance with privacy regulations.",
      whyImportant: "One data leak using AI tools could cost you your job and expose your company to legal liability. Clear privacy rules protect both you and your organization from costly mistakes.",
      examples: ["Customer names (forbidden)", "Financial data (needs approval)", "Internal metrics (usually OK)", "Public information (safe to use)", "Employee data (restricted)"],
      timeEstimate: "20-40 min",
      difficulty: "Medium",
      tips: [
        "When in doubt, don't include personal information",
        "Check with your legal/compliance team for company-specific rules",
        "Document exceptions and approval processes clearly",
        "Create a simple checklist for what's OK vs. what needs approval",
        "Train your team on these rules before they start using AI tools"
      ],
      dod: [
        "Before/after measured — time reduction and quality score recorded.",
        "Target set — agreed % time saved and cadence for re-check."
      ]
    },
    "Document SOPs and a rollback/fallback path": {
      description: "Create step-by-step procedures and backup plans for when AI fails. This ensures business continuity and builds confidence in your AI implementation.",
      whyImportant: "AI tools fail 5-10% of the time. Without proper fallback procedures, one AI outage could disrupt your entire workflow and damage stakeholder confidence in your initiative.",
      examples: ["Manual process backup", "Quality check procedures", "Escalation contact list", "Alternative tool options", "Emergency protocols"],
      timeEstimate: "30-45 min",
      difficulty: "Easy",
      tips: [
        "Always have a manual backup ready - AI isn't 100% reliable",
        "Test your rollback plan before going live with AI tools",
        "Include contact information for help and escalation",
        "Document common failure modes and how to handle them",
        "Keep procedures simple and accessible to your team"
      ],
      dod: [
        "Pilot feedback logged — captured reviewer comments + fixes.",
        "SOP + Loom linked — documented steps and attached a short demo."
      ]
    },
    "Record short Loom demos for each workflow": {
      description: "Create quick video walkthroughs for training and documentation. These demos make it easy for others to replicate your AI workflows.",
      whyImportant: "Video demos reduce training time by 70% and prevent the 'it works on my machine' problem. They're essential for scaling your AI success beyond just yourself.",
      examples: ["Tool setup walkthrough", "Prompt usage demonstration", "Quality check routine", "Troubleshooting common issues", "Best practices showcase"],
      timeEstimate: "15-20 min per demo",
      difficulty: "Easy",
      tips: [
        "Keep videos under 5 minutes each - attention spans are short",
        "Show real examples with actual data, not perfect scenarios",
        "Include common mistakes and how to fix them",
        "Record in a quiet environment with clear audio",
        "Add captions or a brief written summary for accessibility"
      ],
      dod: [
        "Pilot feedback logged — captured reviewer comments + fixes.",
        "SOP + Loom linked — documented steps and attached a short demo."
      ]
    }
  };

  const completedCount = nonNegotiables.filter(task => progressMap[task.key]).length;
  const progressPercent = nonNegotiables.length ? 
    Math.round((completedCount / nonNegotiables.length) * 100) : 0;

  return (
    <div className="space-y-6">
      {/* Core Requirements Header - Collapsible */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div 
          className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 cursor-pointer"
          onClick={() => setIsCoreExpanded(!isCoreExpanded)}
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                <h3 className="text-lg font-bold">Core Requirements</h3>
                <span className="px-2 py-0.5 bg-white/20 rounded text-xs font-medium">
                  Must Complete
                </span>
              </div>
              <p className="text-orange-100 text-sm mt-1">
                Essential foundations for safe, effective AI implementation
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-sm opacity-90">{completedCount}/{nonNegotiables.length} complete</div>
                <div className="text-lg font-bold">{progressPercent}%</div>
              </div>
              {isCoreExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </div>
          </div>
          
          {/* Thin progress bar */}
          <div className="w-full h-1 bg-white/20 rounded-full mt-3">
            <div 
              className="h-full bg-white rounded-full transition-all duration-500" 
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Collapsible Core Tasks */}
        {isCoreExpanded && (
          <div className="p-6 space-y-4">
            {nonNegotiables.map((task, index) => {
              const completed = progressMap[task.key];
              const details = coreTaskDetails[task.label];
              const isExpanded = expandedTasks[task.key];

              return (
                <div key={task.key} className="border border-gray-200 rounded-lg overflow-hidden">
                  {/* Task Header - Clickable */}
                  <div 
                    className={`p-4 cursor-pointer transition-colors ${
                      completed ? 'bg-green-50' : 'bg-white hover:bg-gray-50'
                    }`}
                    onClick={() => toggleTaskExpanded(task.key)}
                  >
                    <div className="flex items-start gap-3">
                      {/* Checkbox */}
                      <div className="pt-1">
                        <input
                          type="checkbox"
                          checked={completed}
                          onChange={(e) => {
                            e.stopPropagation();
                            onToggle(task, e.target.checked);
                          }}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                      </div>

                      {/* Task Content */}
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-500 font-medium">CORE {index + 1}</span>
                            {details && (
                              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                                details.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                                details.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                                'bg-red-100 text-red-700'
                              }`}>
                                {details.difficulty}
                              </span>
                            )}
                            {details && (
                              <span className="text-xs text-gray-500 flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {details.timeEstimate}
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-500">
                              {isExpanded ? 'Collapse' : 'Expand'}
                            </span>
                            {isExpanded ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                          </div>
                        </div>
                        
                        <h4 className={`font-semibold text-gray-900 mb-1 ${completed ? 'line-through text-gray-500' : ''}`}>
                          {task.label}
                        </h4>
                        
                        {details && (
                          <p className="text-sm text-gray-600">
                            {details.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Task Details */}
                  {isExpanded && details && (
                    <div className="border-t border-gray-100 bg-gray-50">
                      <div className="p-4 space-y-4">
                        {/* Examples */}
                        <div>
                          <h5 className="text-sm font-medium text-gray-700 mb-2">📋 Examples:</h5>
                          <div className="flex flex-wrap gap-1.5">
                            {details.examples.map((example, i) => (
                              <span key={i} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded border border-blue-200">
                                {example}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Pro Tips */}
                        <div>
                          <h5 className="text-sm font-medium text-gray-700 mb-2">💡 Pro Tips:</h5>
                          <ul className="text-sm text-gray-600 space-y-1.5">
                            {details.tips.map((tip, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-blue-500 mt-1.5 text-xs">•</span>
                                <span>{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Definition of Done */}
                        <div>
                          <h5 className="text-sm font-medium text-gray-700 mb-2">✅ Definition of Done:</h5>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {details.dod.map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-green-500 mt-1.5 text-xs">✓</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Personal Notes */}
                        <div className="pt-3 border-t border-gray-200">
                          <TaskNoteSection 
                            task={task}
                            noteMap={noteMap}
                            onSaveNote={onSaveNote}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Completion Message */}
            {completedCount === nonNegotiables.length && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-green-900">Core Requirements Complete!</h4>
                    <p className="text-green-700 text-sm">
                      Great work! You've established the foundation for safe, effective AI implementation.
                      Now you can focus on your specialized tracks with confidence.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// Collapsible Track Card Component - for the main tracks (writing, data, workflow)
export const CollapsibleTrackCard = ({ track, steps, progressMap, noteMap, onToggle, onSaveNote, completedSteps, plan }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const allStepsComplete = steps.every(step => progressMap[step.key]);
  
  // Get track-specific tooltip content
  const getTrackTooltip = (trackId, trackTitle) => {
    const tooltips = {
      writing_comms: "🎯 Impact: Transforms repetitive communication tasks into streamlined workflows. Focus on high-value relationships while AI handles routine responses and updates.",
      data_reporting: "📊 Impact: Turn manual data analysis into automated insights. Spend time on strategic decisions instead of building charts and writing summaries.",
      workflow_automation: "⚡ Impact: Eliminate bottlenecks and reduce human error in repetitive processes. Create scalable systems that work even when you're not available."
    };
    return tooltips[trackId] || `💼 Impact: Streamline ${trackTitle.toLowerCase()} processes with AI assistance and human oversight.`;
  };
  
  return (
    <div className="rounded-2xl border bg-white overflow-hidden hover:shadow-md transition-shadow">
      {/* Collapsible Header - Always Visible */}
      <div 
        className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  {track.title}
                  <InfoTooltip 
                    content={getTrackTooltip(track.id, track.title)}
                    className="ml-1"
                  />
                </h3>
                {allStepsComplete && (
                  <div className="flex items-center text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    <span className="text-sm font-medium">Complete</span>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-500 font-medium">
                  {completedSteps}/{steps.length} completed
                </span>
                <div className="w-16 h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                    style={{ width: `${(completedSteps / steps.length) * 100}%` }}
                  />
                </div>
                {isExpanded ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </div>
            </div>
            <p className="text-sm text-gray-600">{track.goal}</p>
            
            {/* Compact KPIs when collapsed */}
            {!isExpanded && track.kpis?.length && (
              <div className="mt-2 flex flex-wrap gap-1">
                {track.kpis.map(k => (
                  <span key={k} className="text-xs px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {k}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Expandable Content */}
      {isExpanded && (
        <div className="border-t border-gray-200">
          <div className="p-6 space-y-4">
            {/* KPI Chips */}
            {track.kpis?.length && (
              <div className="flex flex-wrap gap-1">
                {track.kpis.map(k => (
                  <span key={k} className="text-xs px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {k}
                  </span>
                ))}
              </div>
            )}

            {/* Why This Fits */}
            {track.whyThisFits?.length && (
              <div>
                <div className="text-xs font-medium text-gray-600 mb-2">Why this fits your role:</div>
                <ul className="text-sm text-gray-700 list-disc pl-5">
                  {track.whyThisFits.map((reason, i) => <li key={i}>{reason}</li>)}
                </ul>
              </div>
            )}

            {/* Toolkit */}
            {track.toolkit?.length && (
              <div>
                <div className="text-xs font-medium text-gray-600 mb-2">Recommended tools:</div>
                <div className="flex flex-wrap gap-1">
                  {track.toolkit.map(tool => (
                    <span key={tool} className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Prompts */}
            {track.prompts?.length && (
              <div>
                <div className="text-xs font-medium text-gray-600 mb-2">Quick prompts (click to copy):</div>
                <div className="flex flex-col gap-2">
                  {track.prompts.map((prompt, i) => (
                    <button
                      key={i}
                      onClick={async (e) => {
                        e.stopPropagation();
                        try { 
                          await navigator.clipboard.writeText(prompt); 
                        } catch {}
                        const btn = e.currentTarget;
                        const labelEl = btn.querySelector('span');
                        if (!labelEl) return;
                        const original = labelEl.textContent;
                        labelEl.textContent = 'Copied!';
                        setTimeout(() => (labelEl.textContent = original), 1000);
                      }}
                      className="text-left text-xs p-2 border rounded hover:bg-gray-50 transition-colors flex items-start gap-2"
                    >
                      <span className="text-blue-500 mt-0.5">📋</span>
                      <span>{prompt}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Task Steps */}
            <div className="space-y-3">
              <div className="text-xs font-medium text-gray-600 mb-2">Weekly steps:</div>
              {steps.map((step, index) => {
                const completed = !!progressMap[step.key];
                return (
                  <TaskItem
                    key={step.key}
                    step={step}
                    index={index + 1}
                    completed={completed}
                    onToggle={(completed) => onToggle(step, completed)}
                    noteMap={noteMap}
                    onSaveNote={onSaveNote}
                    track={track}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Task Item component for both regular and collapsible cards
export const TaskItem = ({ step, index, completed, onToggle, noteMap, onSaveNote, track }) => {
  const [noteValue, setNoteValue] = useState(noteMap?.[step.key] || '');
  const [isEditing, setIsEditing] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  
  const wk = (step.key.match(/\.W([1-4])$/)||[])[1];
  const meta = track?.task_meta?.[`W${wk}`];

  useEffect(() => {
    setNoteValue(noteMap?.[step.key] || '');
    setHasUnsavedChanges(false);
  }, [noteMap, step.key]);

  const handleNoteChange = (e) => {
    const newValue = e.target.value || '';
    setNoteValue(newValue);
    setHasUnsavedChanges(newValue !== (noteMap?.[step.key] || ''));
  };

  const handleSaveNote = () => {
    onSaveNote(step, noteValue);
    setIsEditing(false);
    setHasUnsavedChanges(false);
  };

  const handleCancelEdit = () => {
    setNoteValue(noteMap?.[step.key] || '');
    setIsEditing(false);
    setHasUnsavedChanges(false);
  };

  return (
    <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 group border border-transparent hover:border-gray-200 transition-all">
      <div className="flex-shrink-0 mt-0.5">
        <input
          type="checkbox"
          checked={completed || false}
          onChange={(e) => onToggle(e.target.checked)}
          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          aria-checked={completed || false}
        />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full font-medium">
            Week {index}
          </span>
          {meta && (
            <>
              <span className="text-xs text-gray-500">
                {meta.estimate}min
              </span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                meta.priority === 'High' ? 'bg-red-100 text-red-700' :
                meta.priority === 'Normal' ? 'bg-yellow-100 text-yellow-700' :
                'bg-green-100 text-green-700'
              }`}>
                {meta.priority}
              </span>
            </>
          )}
        </div>
        
        <h4 className={`font-medium text-gray-900 mb-1 ${completed ? 'line-through text-gray-500' : ''}`}>
          <div className="flex items-center gap-1">
            <span>{step.label}</span>
            {meta?.dod && (
              <InfoTooltip 
                content={`⏱️ Time: ${meta.estimate} min | 🎯 Impact: Completing this step ensures ${step.label.toLowerCase()} meets quality standards and drives measurable results.`}
                className="ml-1"
              />
            )}
          </div>
        </h4>
        
        {/* Definition of Done */}
        {meta?.dod && (
          <div className="mb-2">
            <div className="text-xs font-medium text-gray-600 mb-1">Definition of Done:</div>
            <ul className="text-xs text-gray-600 space-y-0.5">
              {meta.dod.map((item, i) => (
                <li key={i} className="flex items-start gap-1">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Personal Notes */}
        <div className="mt-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-medium text-gray-600">Notes:</span>
            {!isEditing && (
              <button 
                onClick={() => setIsEditing(true)}
                className="text-xs text-blue-600 hover:text-blue-800"
              >
                {noteMap?.[step.key] ? 'Edit' : 'Add note'}
              </button>
            )}
          </div>
          
          {isEditing ? (
            <div className="space-y-2">
              <textarea 
                value={noteValue}
                onChange={handleNoteChange}
                className="w-full p-2 text-xs border border-gray-300 rounded resize-none"
                rows={2}
                placeholder="Add your progress notes..."
              />
              <div className="flex gap-2">
                <button 
                  onClick={handleSaveNote}
                  className="px-2 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700"
                >
                  Save
                </button>
                <button 
                  onClick={handleCancelEdit}
                  className="px-2 py-1 border border-gray-300 text-xs rounded hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="text-xs text-gray-600 bg-gray-50 p-2 rounded min-h-[30px]">
              {noteMap?.[step.key] || 'No notes yet.'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Demo component to show the improvements
const DemoProgressComponents = () => {
  const [taskProgress, setTaskProgress] = useState({});
  const [noteMap, setNoteMap] = useState({});

  const samplePhases = {
    fastStart: 75,
    momentum: 45,
    positioning: 20
  };

  const sampleCoreTasks = [
    { key: 'core.nn.1', label: 'Define 2–3 KPIs and baseline them', type: 'non_negotiable', week: 1 },
    { key: 'core.nn.2', label: 'Create a Prompt Library (versioned, examples, do/don\'t)', type: 'non_negotiable', week: 1 },
    { key: 'core.nn.3', label: 'Set data privacy rules (PII, access, storage, approvals)', type: 'non_negotiable', week: 1 },
    { key: 'core.nn.4', label: 'Document SOPs and a rollback/fallback path', type: 'non_negotiable', week: 1 },
    { key: 'core.nn.5', label: 'Record short Loom demos for each workflow', type: 'non_negotiable', week: 1 }
  ];

  const sampleUserProfile = {
    first_name: 'Alex',
    current_role: 'Product Manager'
  };

  const handleTaskToggle = (task, completed) => {
    setTaskProgress(prev => ({
      ...prev,
      [task.key]: completed
    }));
  };

  const handleSaveNote = (task, note) => {
    setNoteMap(prev => ({
      ...prev,
      [task.key]: note
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <ProgressHeader 
          overall={60}
          phases={samplePhases}
          persona="AI Strategy Lead"
          weeklyHours={3}
          userProfile={sampleUserProfile}
          userRole="Product Manager"
        />
        
        <CoreSection 
          coreTasks={sampleCoreTasks}
          progressMap={taskProgress}
          noteMap={noteMap}
          onToggle={handleTaskToggle}
          onSaveNote={handleSaveNote}
          plan={{}}
        />
      </div>
    </div>
  );
};

export default DemoProgressComponents;