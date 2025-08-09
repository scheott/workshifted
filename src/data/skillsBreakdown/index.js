// File: src/data/skillsBreakdown/index.js
import { electricianSkillsBreakdown } from "./electrician.js";
import { plumberSkillsBreakdown } from "./plumber.js";
import { hvacTechnicianSkillsBreakdown } from "./hvac_technician.js";
import { constructionPmSkillsBreakdown } from "./construction_pm.js";
import { solarInstallerSkillsBreakdown } from "./solar_installer.js";
import { carpenterSkillsBreakdown } from "./carpenter.js";
import { welderSkillsBreakdown } from "./welder.js";
import { autoMechanicSkillsBreakdown } from "./auto_mechanic.js";
import { homeInspectorSkillsBreakdown } from "./home_inspector.js";
import { landscaperSkillsBreakdown } from "./landscaper.js";
import { applianceRepairSkillsBreakdown } from "./appliance_repair.js";
import { elevatorTechnicianSkillsBreakdown } from "./elevator_technician.js";
import { locksmithSkillsBreakdown } from "./locksmith.js";
import { pestControlSkillsBreakdown } from "./pest_control.js";
import { telecomInstallerSkillsBreakdown } from "./telecom_installer.js";

// Named exports
export {
  electricianSkillsBreakdown,
  plumberSkillsBreakdown,
  hvacTechnicianSkillsBreakdown,
  constructionPmSkillsBreakdown,
  solarInstallerSkillsBreakdown,
  carpenterSkillsBreakdown,
  welderSkillsBreakdown,
  autoMechanicSkillsBreakdown,
  homeInspectorSkillsBreakdown,
  landscaperSkillsBreakdown,
  applianceRepairSkillsBreakdown,
  elevatorTechnicianSkillsBreakdown,
  locksmithSkillsBreakdown,
  pestControlSkillsBreakdown,
  telecomInstallerSkillsBreakdown
};

// Map by career key for easy lookup
export const skillsByCareer = {
  electrician: electricianSkillsBreakdown,
  plumber: plumberSkillsBreakdown,
  hvac_technician: hvacTechnicianSkillsBreakdown,
  construction_pm: constructionPmSkillsBreakdown,
  solar_installer: solarInstallerSkillsBreakdown,
  carpenter: carpenterSkillsBreakdown,
  welder: welderSkillsBreakdown,
  auto_mechanic: autoMechanicSkillsBreakdown,
  home_inspector: homeInspectorSkillsBreakdown,
  landscaper: landscaperSkillsBreakdown,
  appliance_repair: applianceRepairSkillsBreakdown,
  elevator_technician: elevatorTechnicianSkillsBreakdown,
  locksmith: locksmithSkillsBreakdown,
  pest_control: pestControlSkillsBreakdown,
  telecom_installer: telecomInstallerSkillsBreakdown
};

export default skillsByCareer;
