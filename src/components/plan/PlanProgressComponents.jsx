// src/components/plan/PlanProgressComponents.jsx
import React, { useState, useEffect } from 'react';
import { CheckCircle, Target, Copy, ChevronDown, ChevronUp } from 'lucide-react';

// Sticky Progress Header with personalized messaging
export const ProgressHeader = ({ overall, phases, persona, weeklyHours, userProfile, userRole }) => {
  const firstName = userProfile?.first_name || 'Professional';
  const roleDisplayName = userRole || persona || 'Professional';
  
  return (
    <div className="sticky top-4 z-10 rounded-2xl p-6 bg-gradient-to-r from-blue-600 to-emerald-500 text-white mb-8 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-sm opacity-90">90-Day AI Plan</div>
          <div className="text-3xl font-semibold mt-1">{overall}% complete</div>
          <div className="text-sm opacity-90 mt-1">
            {firstName}'s {roleDisplayName} Enhancement • {(weeklyHours ?? 3)}h/week
          </div>
        </div>
        <Target className="w-12 h-12 opacity-80" />
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: 'Fast Start', phase: 'W1-W4', percent: phases.fastStart || 0 },
          { label: 'Momentum', phase: 'W5-W8', percent: phases.momentum || 0 },
          { label: 'Positioning', phase: 'W9-W12', percent: phases.positioning || 0 }
        ].map((phase, i) => (
          <div key={phase.label} className="bg-white/15 rounded-xl p-3">
            <div className="text-xs opacity-90">{phase.label}</div>
            <div className="text-xs opacity-75 mb-2">{phase.phase}</div>
            <div className="w-full h-2 bg-white/20 rounded-full">
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
  );
};

// Enhanced Core Tasks Section with richer content and guidance
export const CoreSection = ({ coreTasks, progressMap, noteMap, onToggle, onSaveNote, plan }) => {
  const nonNegotiables = coreTasks.filter(t => t.type === 'non_negotiable');
  
  // Enhanced core task descriptions with practical guidance
  const coreTaskDetails = {
    "Define 2–3 KPIs and baseline them": {
      description: "Establish measurable success criteria before starting any AI implementation",
      examples: ["Time saved per week", "Error reduction %", "Tasks automated", "Quality score"],
      timeEstimate: "15-30 min",
      difficulty: "Easy",
      tips: [
        "Start with time-based metrics (easiest to measure)",
        "Use a simple spreadsheet to track before/after",
        "Pick metrics your boss already cares about"
      ]
    },
    "Create a Prompt Library (versioned, examples, do/don't)": {
      description: "Build a reusable collection of tested prompts with clear guidelines",
      examples: ["Email templates", "Report summaries", "Data analysis prompts", "Meeting notes"],
      timeEstimate: "45-60 min", 
      difficulty: "Medium",
      tips: [
        "Start with 3-5 prompts you use frequently",
        "Include both good and bad examples",
        "Version your prompts when you improve them"
      ]
    },
    "Set data privacy rules (PII, access, storage, approvals)": {
      description: "Establish clear guidelines for what data can be used with AI tools",
      examples: ["Customer names (forbidden)", "Financial data (needs approval)", "Internal metrics (OK)", "Public info (safe)"],
      timeEstimate: "20-40 min",
      difficulty: "Medium",
      tips: [
        "When in doubt, don't include personal info",
        "Check with your legal/compliance team",
        "Document exceptions and approval processes"
      ]
    },
    "Document SOPs and a rollback/fallback path": {
      description: "Create step-by-step procedures and backup plans when AI fails",
      examples: ["Manual process backup", "Quality check steps", "Escalation procedures", "Tool alternatives"],
      timeEstimate: "30-45 min",
      difficulty: "Easy",
      tips: [
        "Always have a manual backup ready",
        "Test your rollback plan before going live",
        "Include contact info for help"
      ]
    },
    "Record short Loom demos for each workflow": {
      description: "Create quick video walkthroughs for training and documentation",
      examples: ["Tool setup process", "Prompt usage demo", "Quality check routine", "Troubleshooting guide"],
      timeEstimate: "15-20 min per demo",
      difficulty: "Easy",
      tips: [
        "Keep videos under 5 minutes each",
        "Show real examples, not perfect cases",
        "Include common mistakes and fixes"
      ]
    }
  };

  const completedCount = nonNegotiables.filter(task => progressMap[task.key]).length;
  const progressPercent = nonNegotiables.length ? Math.round((completedCount / nonNegotiables.length) * 100) : 0;

  return (
    <div className="rounded-2xl border bg-white overflow-hidden">
      {/* Enhanced Header */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 border-b border-red-100">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
            <Target className="w-6 h-6 text-red-600" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-gray-900">Core Requirements</h3>
              <div className="flex items-center gap-2">
                <div className="w-16 h-2 bg-red-200 rounded-full">
                  <div 
                    className="h-full bg-red-500 rounded-full transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-red-700">{completedCount}/{nonNegotiables.length}</span>
              </div>
            </div>
            <p className="text-gray-700 mb-3">
              Essential foundations that make or break AI implementations. Get these right first.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1 text-gray-600">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>Total time: ~2 hours</span>
              </div>
              <div className="flex items-center gap-1 text-gray-600">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span>Do these before starting any track</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Task List */}
      <div className="p-6">
        <div className="space-y-4">
          {nonNegotiables.map((task, index) => {
            const details = coreTaskDetails[task.label];
            const completed = !!progressMap[task.key];
            
            return (
              <div key={task.key} className="border border-gray-200 rounded-lg overflow-hidden hover:border-red-300 transition-colors">
                {/* Task Header */}
                <div className="p-4 bg-gray-50">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <input
                        type="checkbox"
                        checked={completed}
                        onChange={(e) => onToggle(task, e.target.checked)}
                        className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full font-medium">
                          Step {index + 1}
                        </span>
                        <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-medium">
                          Required
                        </span>
                        {details && (
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
                            {details.timeEstimate}
                          </span>
                        )}
                        {details && (
                          <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                            details.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                            details.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {details.difficulty}
                          </span>
                        )}
                      </div>
                      <h4 className={`font-semibold text-gray-900 mb-1 ${completed ? 'line-through text-gray-500' : ''}`}>
                        {task.label}
                      </h4>
                      {details && (
                        <p className="text-sm text-gray-600 mb-3">
                          {details.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Task Details */}
                {details && (
                  <div className="p-4 border-t border-gray-100 bg-white">
                    {/* Examples */}
                    <div className="mb-4">
                      <h5 className="text-xs font-medium text-gray-700 mb-2">Examples:</h5>
                      <div className="flex flex-wrap gap-1">
                        {details.examples.map((example, i) => (
                          <span key={i} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded border border-blue-200">
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Pro Tips */}
                    <div className="mb-4">
                      <h5 className="text-xs font-medium text-gray-700 mb-2">💡 Pro Tips:</h5>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {details.tips.map((tip, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-blue-500 mt-1">•</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Personal Notes */}
                    <div className="pt-3 border-t border-gray-100">
                      <TaskNoteSection 
                        task={task}
                        noteMap={noteMap}
                        onSaveNote={onSaveNote}
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Completion Message */}
        {completedCount === nonNegotiables.length && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-medium text-green-900">Core Requirements Complete! 🎉</h4>
                <p className="text-sm text-green-700">
                  You've built a solid foundation. Now you're ready to tackle your specialized tracks with confidence.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Collapsible Track Card Component
export const CollapsibleTrackCard = ({ track, steps, progressMap, noteMap, onToggle, onSaveNote, completedSteps, plan }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const allStepsComplete = steps.every(step => progressMap[step.key]);
  
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
                <h3 className="text-lg font-semibold text-gray-900">{track.title}</h3>
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
              <ul className="text-sm text-gray-700 list-disc pl-5">
                {track.whyThisFits.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            )}

            {/* Toolkit */}
            {track.toolkit?.length && (
              <div className="flex flex-wrap gap-1">
                {track.toolkit.map(tk => (
                  <span key={tk} className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                    {tk}
                  </span>
                ))}
              </div>
            )}

            {/* Quick Prompts */}
            {track.prompts?.length && (
              <div>
                <div className="text-xs font-medium text-gray-600 mb-2">Quick prompts</div>
                <div className="flex flex-col gap-2">
                  {track.prompts.map((p, i) => (
                    <button
                      key={i}
                      onClick={async (e) => {
                        e.stopPropagation();
                        try { 
                          await navigator.clipboard.writeText(p); 
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
                      <Copy className="w-3 h-3 mt-0.5 flex-shrink-0 text-gray-400" />
                      <span>{p}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Task Steps */}
            <div className="space-y-3">
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
  const [noteValue, setNoteValue] = useState(noteMap[step.key] || '');
  const [isEditing, setIsEditing] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  
  const wk = (step.key.match(/\.W([1-4])$/)||[])[1];
  const meta = track?.task_meta?.[`W${wk}`];

  useEffect(() => {
    setNoteValue(noteMap[step.key] || '');
    setHasUnsavedChanges(false);
  }, [noteMap, step.key]);

  const handleNoteChange = (e) => {
    setNoteValue(e.target.value);
    setHasUnsavedChanges(e.target.value !== (noteMap[step.key] || ''));
  };

  const handleSaveNote = () => {
    onSaveNote(step, noteValue);
    setIsEditing(false);
    setHasUnsavedChanges(false);
  };

  const handleCancelEdit = () => {
    setNoteValue(noteMap[step.key] || '');
    setIsEditing(false);
    setHasUnsavedChanges(false);
  };

  return (
    <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 group border border-transparent hover:border-gray-200 transition-all">
      <div className="flex-shrink-0 mt-0.5">
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => onToggle(e.target.checked)}
          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          aria-checked={completed}
        />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full font-medium">
            {step.key.includes('.W') ? step.key.split('.').pop() : `Step ${index}`}
          </span>
          {step.type === 'non_negotiable' && (
            <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full font-medium">
              Required
            </span>
          )}
          {meta?.priority && (
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
              {meta.priority} priority
            </span>
          )}
        </div>
        
        <p className={`text-sm font-medium ${completed ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
          {step.label.replace(/^W\d:\s*/i, '')}
        </p>
        
        <div className="mt-1 text-xs text-gray-600">
          {meta?.estimate ? `~${meta.estimate} min` : ''}
        </div>
        
        {meta?.dod?.length ? (
          <ul className="mt-1 text-xs text-gray-700 list-disc pl-5">
            {meta.dod.map((d, i) => {
              if (typeof d === 'string') {
                return <li key={i}>{d}</li>;
              }
              return (
                <li key={i}>
                  <span className="font-medium">{d.label}</span>
                  {d.details ? <span> — {d.details}</span> : null}
                </li>
              );
            })}
          </ul>
        ) : null}
                    
        <div className="mt-2">
          {isEditing ? (
            <div className="space-y-2">
              <textarea
                placeholder="Add a personal note or blocker…"
                className="w-full border rounded p-2 text-sm resize-none"
                rows={2}
                value={noteValue}
                onChange={handleNoteChange}
                onClick={(e) => e.stopPropagation()}
                autoFocus
              />
              <div className="flex gap-2">
                <button
                  onClick={handleSaveNote}
                  disabled={!hasUnsavedChanges}
                  className="px-3 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  Save
                </button>
                <button
                  onClick={handleCancelEdit}
                  className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              {noteValue ? (
                <div className="p-2 bg-gray-50 rounded text-sm border">
                  {noteValue}
                </div>
              ) : (
                <div className="p-2 text-gray-400 text-sm italic">
                  No notes added yet
                </div>
              )}
              <button
                onClick={() => setIsEditing(true)}
                className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
              >
                {noteValue ? 'Edit Note' : 'Add Note'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Note editing component for core requirements
const TaskNoteSection = ({ task, noteMap, onSaveNote }) => {
  const [noteValue, setNoteValue] = useState(noteMap[task.key] || '');
  const [isEditing, setIsEditing] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  useEffect(() => {
    setNoteValue(noteMap[task.key] || '');
    setHasUnsavedChanges(false);
  }, [noteMap, task.key]);

  const handleNoteChange = (e) => {
    setNoteValue(e.target.value);
    setHasUnsavedChanges(e.target.value !== (noteMap[task.key] || ''));
  };

  const handleSaveNote = () => {
    onSaveNote(task, noteValue);
    setIsEditing(false);
    setHasUnsavedChanges(false);
  };

  const handleCancelEdit = () => {
    setNoteValue(noteMap[task.key] || '');
    setIsEditing(false);
    setHasUnsavedChanges(false);
  };

  return (
    <div>
      <h5 className="text-xs font-medium text-gray-700 mb-2">📝 Your Notes:</h5>
      {isEditing ? (
        <div className="space-y-2">
          <textarea
            placeholder="Add your notes, blockers, or progress updates..."
            className="w-full border border-gray-300 rounded p-2 text-sm resize-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
            rows={3}
            value={noteValue}
            onChange={handleNoteChange}
            autoFocus
          />
          <div className="flex gap-2">
            <button
              onClick={handleSaveNote}
              disabled={!hasUnsavedChanges}
              className="px-3 py-1.5 text-xs bg-red-600 text-white rounded hover:bg-red-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Save Note
            </button>
            <button
              onClick={handleCancelEdit}
              className="px-3 py-1.5 text-xs bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-2">
          {noteValue ? (
            <div className="p-3 bg-amber-50 border border-amber-200 rounded text-sm">
              <div className="whitespace-pre-wrap">{noteValue}</div>
            </div>
          ) : (
            <div className="p-3 text-gray-400 text-sm italic border border-dashed border-gray-300 rounded">
              No notes added yet - click to add progress updates or blockers
            </div>
          )}
          <button
            onClick={() => setIsEditing(true)}
            className="px-3 py-1.5 text-xs bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
          >
            {noteValue ? 'Edit Note' : 'Add Note'}
          </button>
        </div>
      )}
    </div>
  );
};