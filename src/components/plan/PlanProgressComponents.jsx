// src/components/plan/PlanProgressComponents.jsx
import React, { useState, useEffect } from 'react';
import { CheckCircle, Target, Copy } from 'lucide-react';

const DOD_TEXT = {
  "Baseline captured": "Baseline captured — logged manual vs AI time (T_manual vs T_AI) in task notes.",
  "Prompt card v1 saved": "Prompt Card v1 created — one-page doc with your best prompt, inputs, style rules, and QA checklist; link saved in task notes.",
  "Checks added": "Checks added — accuracy/privacy guardrails added to the prompt.",
  "Style/validation applied": "Style/validation applied — tone rules and review checklist added.",
  "Before/after measured": "Before/after measured — time reduction and quality score recorded.",
  "Target set": "Target set — agreed % time saved and cadence for re-check.",
  "Pilot feedback logged": "Pilot feedback logged — captured reviewer comments + fixes.",
  "SOP + Loom linked": "SOP + Loom linked — documented steps and attached a short demo."
};

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

// Enhanced Track Card with new enriched plan features
export const TrackCard = ({ track, steps, progressMap, noteMap, onToggle, onSaveNote, completedSteps, plan }) => {
  const allStepsComplete = steps.every(step => progressMap[step.key]);
  
  return (
    <div className="rounded-2xl border bg-white p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">{track.title}</h3>
            <span className="text-sm text-gray-500 font-medium">
              {completedSteps}/{steps.length} completed
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-1">{track.goal}</p>
        </div>
        {allStepsComplete && (
          <div className="flex items-center text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full ml-4">
            <CheckCircle className="w-4 h-4 mr-1" />
            <span className="text-sm font-medium">Complete</span>
          </div>
        )}
      </div>

      {/* KPI Chips */}
      {track.kpis?.length ? (
        <div className="mt-1 flex flex-wrap gap-1 mb-3">
          {track.kpis.map(k => (
            <span key={k} className="text-xs px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              {k}
            </span>
          ))}
        </div>
      ) : null}

      {/* Why This Fits */}
      {track.whyThisFits?.length ? (
        <ul className="mt-2 text-sm text-gray-700 list-disc pl-5 mb-3">
          {track.whyThisFits.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      ) : null}

      {/* Toolkit */}
      {track.toolkit?.length ? (
        <div className="mt-2 flex flex-wrap gap-1 mb-3">
          {track.toolkit.map(tk => (
            <span key={tk} className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
              {tk}
            </span>
          ))}
        </div>
      ) : null}

      {/* Quick Prompts */}
      {track.prompts?.length ? (
        <div className="mt-3 mb-4">
          <div className="text-xs font-medium text-gray-600 mb-1">Quick prompts</div>
          <div className="flex flex-col gap-2">
            {track.prompts.map((p, i) => (
              <button
                key={i}
                onClick={async (e) => {
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
      ) : null}
      
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
      
      {/* Progress indicator */}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>{completedSteps}/{steps.length} completed</span>
          <div className="w-24 h-2 bg-gray-200 rounded-full">
            <div 
              className="h-full bg-emerald-500 rounded-full transition-all duration-300"
              style={{ width: `${(completedSteps / steps.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Task Item with save/edit buttons for notes
export const TaskItem = ({ step, index, completed, onToggle, noteMap, onSaveNote, track }) => {
  const [noteValue, setNoteValue] = useState(noteMap[step.key] || '');
  const [isEditing, setIsEditing] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  
  // Extract week number for metadata lookup
  const wk = (step.key.match(/\.W([1-4])$/)||[])[1];
  const meta = track?.task_meta?.[`W${wk}`];

  // Update local note state when noteMap changes
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

  const handleEditClick = () => {
    setIsEditing(true);
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
        
        {/* Task metadata */}
        <div className="mt-1 text-xs text-gray-600">
          {meta?.estimate ? `~${meta.estimate} min` : ''}
        </div>
        
        {/* Definition of Done */}
        {meta?.dod?.length ? (
          <ul className="mt-1 text-xs text-gray-700 list-disc pl-5">
            {meta.dod.map((d, i) => <li key={i}>{d}</li>)}
          </ul>
        )  : null}
        {meta?.dod?.length ? (
           <ul className="mt-1 text-xs text-gray-700 list-disc pl-5">
            {meta.dod.map((d, i) => {
                if (typeof d === 'string') return <li key={i}>{DOD_TEXT[d] || d}</li>;
                // supports richer objects: { label, details }
                return (
                    <li key={i}>
                    <span className="font-medium">{d.label}</span>
                    {d.details ? <span> — {d.details}</span> : null}
                    </li>
                );
                })}
            </ul>
        ) : null}
                    
        {/* Personal Notes with Save/Edit buttons */}
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
                onClick={handleEditClick}
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

// Enhanced Core Tasks Section - Removed Weekly Checkpoints
export const CoreSection = ({ coreTasks, progressMap, noteMap, onToggle, onSaveNote, plan }) => {
  const nonNegotiables = coreTasks.filter(t => t.type === 'non_negotiable');
  
  return (
    <div className="rounded-2xl border bg-white p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
          <Target className="w-5 h-5 text-red-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Core Requirements</h3>
          <p className="text-sm text-gray-600">Essential foundations for any AI implementation</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-2">Non-Negotiables</h4>
          <div className="space-y-2">
            {nonNegotiables.map((task, index) => (
              <TaskItem
                key={task.key}
                step={task}
                index={index + 1}
                completed={!!progressMap[task.key]}
                onToggle={(completed) => onToggle(task, completed)}
                noteMap={noteMap}
                onSaveNote={onSaveNote}
                track={{ task_meta: {} }} // Core tasks don't have track metadata
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};