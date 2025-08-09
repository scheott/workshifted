// File: src/data/realityChecks/index.js
import { electricianRealityCheck } from "./electrician.js";
import { plumberRealityCheck } from "./plumber.js";
import { hvacTechnicianRealityCheck } from "./hvac_technician.js";
import { constructionPmRealityCheck } from "./construction_pm.js";
import { solarInstallerRealityCheck } from "./solar_installer.js";
import { carpenterRealityCheck } from "./carpenter.js";
import { welderRealityCheck } from "./welder.js";
import { autoMechanicRealityCheck } from "./auto_mechanic.js";
import { homeInspectorRealityCheck } from "./home_inspector.js";
import { landscaperRealityCheck } from "./landscaper.js";
import { applianceRepairRealityCheck } from "./appliance_repair.js";
import { elevatorTechnicianRealityCheck } from "./elevator_technician.js";
import { locksmithRealityCheck } from "./locksmith.js";
import { pestControlRealityCheck } from "./pest_control.js";
import { telecomInstallerRealityCheck } from "./telecom_installer.js";

// Named exports
export {
  electricianRealityCheck,
  plumberRealityCheck,
  hvacTechnicianRealityCheck,
  constructionPmRealityCheck,
  solarInstallerRealityCheck,
  carpenterRealityCheck,
  welderRealityCheck,
  autoMechanicRealityCheck,
  homeInspectorRealityCheck,
  landscaperRealityCheck,
  applianceRepairRealityCheck,
  elevatorTechnicianRealityCheck,
  locksmithRealityCheck,
  pestControlRealityCheck,
  telecomInstallerRealityCheck
};

// Map by career key
export const realityChecksByCareer = {
  electrician: electricianRealityCheck,
  plumber: plumberRealityCheck,
  hvac_technician: hvacTechnicianRealityCheck,
  construction_pm: constructionPmRealityCheck,
  solar_installer: solarInstallerRealityCheck,
  carpenter: carpenterRealityCheck,
  welder: welderRealityCheck,
  auto_mechanic: autoMechanicRealityCheck,
  home_inspector: homeInspectorRealityCheck,
  landscaper: landscaperRealityCheck,
  appliance_repair: applianceRepairRealityCheck,
  elevator_technician: elevatorTechnicianRealityCheck,
  locksmith: locksmithRealityCheck,
  pest_control: pestControlRealityCheck,
  telecom_installer: telecomInstallerRealityCheck
};

export default realityChecksByCareer;
