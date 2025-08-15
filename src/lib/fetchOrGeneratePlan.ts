// src/lib/fetchOrGeneratePlan.ts
import { supabase } from './supabase'
import { AI_SKILLS_DATABASE } from '../data/aiSkillsDatabase'
import { AITOOLS_DB, getToolsByRole } from '../data/premiumContent/aiToolsDatabase'

export async function fetchOrGeneratePlan(assessmentId: string, userId: string, answers: any) {
  const role = answers?.current_role || answers?.profile_role_family || 'other'
  const skills_for_role = AI_SKILLS_DATABASE[role] || AI_SKILLS_DATABASE.other
  const tools_for_role = getToolsByRole(role).slice(0,5).map(t => t.key)

  // call your edge function
  const { data, error } = await supabase.functions.invoke('generate-plan', {
    body: { assessmentId, userId, skills_for_role, tools_for_role }
  })
  if (error) throw error
  return data // { evolution_paths, free_blurb }
}