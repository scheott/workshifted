// src/components/plan/PlanProgressComponents.jsx
import React from 'react';
import { CheckCircle, Clock, Target } from 'lucide-react';

// Progress Header with overall % and phase breakdown
export const ProgressHeader = ({ overall, phases, persona, weeklyHours }) => (
  <div className="rounded-2xl p-6 bg-gradient-to-r from-blue-600 to-emerald-500 text-white mb-8">
    <div className="flex items-center justify-between mb-4">
      <div>
        <div className="text-sm opacity-90">90-Day AI Plan</div>
        <div className="text-3xl font-semibold mt-1">{overall}% complete</div>
        <div className="text-sm opacity-90 mt-1">{persona} • {weeklyHours}h/week</div>
      </div>
      <Target className="w-12 h-12 opacity-80" />
    </div>
    
    <div className="grid grid-cols-3 gap-4">
      {[
        { label: 'Fast Start', phase: 'W1-W4', percent: phases[0] || 0 },
        { label: 'Momentum', phase: 'W5-W8', percent: phases[1] || 0 },
        { label: 'Positioning', phase: 'W9-W12', percent: phases[2] || 0 }
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

// Track Card for each of the 3 tracks (Writing, Data, Workflow)
export const TrackCard = ({ track, steps, progressMap, onToggle, completedSteps }) => {
  const allStepsComplete = steps.every(step => progressMap[step.key]);
  
  return (
    <div className="rounded-2xl border bg-white p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{track.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{track.goal}</p>
        </div>
        {allStepsComplete && (
          <div className="flex items-center text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
            <CheckCircle className="w-4 h-4 mr-1" />
            <span className="text-sm font-medium">Complete</span>
          </div>
        )}
      </div>
      
      <div className="space-y-3">
        {steps.map((step, index) => {
          const isCompleted = !!progressMap[step.key];
          return (
            <TaskItem
              key={step.key}
              step={step}
              index={index + 1}
              isCompleted={isCompleted}
              onToggle={(completed) => onToggle(step, completed)}
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

// Individual Task Item with checkbox
export const TaskItem = ({ step, index, isCompleted, onToggle }) => (
  <label className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer group">
    <div className="flex-shrink-0 mt-0.5">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={(e) => onToggle(e.target.checked)}
        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
      />
    </div>
    <div className="flex-1">
      <div className="flex items-center gap-2">
        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full font-medium">
          {step.key.includes('.W') ? step.key.split('.').pop() : `Step ${index}`}
        </span>
        {step.type === 'non_negotiable' && (
          <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full font-medium">
            Required
          </span>
        )}
      </div>
      <p className={`mt-1 text-sm ${isCompleted ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
        {step.label}
      </p>
    </div>
  </label>
);

// Core Tasks Section
export const CoreSection = ({ coreTasks, progressMap, onToggle }) => {
  const nonNegotiables = coreTasks.filter(t => t.type === 'non_negotiable');
  const checkpoints = coreTasks.filter(t => t.type === 'checkpoint');
  
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
                isCompleted={!!progressMap[task.key]}
                onToggle={(completed) => onToggle(task, completed)}
              />
            ))}
          </div>
        </div>
        
        <div className="pt-4 border-t border-gray-100">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Weekly Checkpoints</h4>
          <div className="space-y-2">
            {checkpoints.map((task, index) => (
              <TaskItem
                key={task.key}
                step={task}
                index={index + 1}
                isCompleted={!!progressMap[task.key]}
                onToggle={(completed) => onToggle(task, completed)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};