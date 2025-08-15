// src/lib/buildTasksFromPlan.js
import { CORE } from '../data/aiPlanCore'

export function buildTasksFromPlan(evolution_paths) {
  const tasks = []

  // Core non-negotiables (5 tasks)
  CORE.nonNegotiables.forEach((label, i) => {
    tasks.push({ 
      trackId: 'core', 
      key: `core.nn.${i+1}`, 
      label, 
      week: 1,
      type: 'non_negotiable'
    })
  })

  // Core week checkpoints (5 tasks)
  CORE.weeks.forEach(w => {
    tasks.push({ 
      trackId: 'core', 
      key: `core.wk.${w.week}`, 
      label: `Core checkpoint: Week ${w.week}`, 
      week: w.week,
      type: 'checkpoint'
    })
  })

  // Track steps: 3 tracks × 4 steps = 12 tasks
  const tracks = evolution_paths?.tracks || []
  tracks.forEach(track => {
    ['W1','W2','W3','W4'].forEach((wk, idx) => {
      const stepLabel = track.week_plan?.[idx] || `${wk}: Step`
      tasks.push({ 
        trackId: track.id, 
        key: `${track.id}.${wk}`, 
        label: stepLabel, 
        week: idx + 1,
        type: 'track_step',
        trackTitle: track.title
      })
    })
  })

  return tasks // Should be 22 total: 5 + 5 + 12
}