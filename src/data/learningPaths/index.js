// File: src/data/learningPaths/index.js
import { electricianLearningPath } from "./electrician.js";
import { plumberLearningPath } from "./plumber.js";
import { hvacTechnicianLearningPath } from "./hvac_technician.js";
import { constructionPmLearningPath } from "./construction_pm.js";
import { solarInstallerLearningPath } from "./solar_installer.js";
import { carpenterLearningPath } from "./carpenter.js";
import { welderLearningPath } from "./welder.js";
import { autoMechanicLearningPath } from "./auto_mechanic.js";
import { homeInspectorLearningPath } from "./home_inspector.js";
import { landscaperLearningPath } from "./landscaper.js";
import { applianceRepairLearningPath } from "./appliance_repair.js";
import { elevatorTechnicianLearningPath } from "./elevator_technician.js";
import { locksmithLearningPath } from "./locksmith.js";
import { pestControlLearningPath } from "./pest_control.js";
import { telecomInstallerLearningPath } from "./telecom_installer.js";

// Named exports (if you want to import one at a time)
export {
  electricianLearningPath,
  plumberLearningPath,
  hvacTechnicianLearningPath,
  constructionPmLearningPath,
  solarInstallerLearningPath,
  carpenterLearningPath,
  welderLearningPath,
  autoMechanicLearningPath,
  homeInspectorLearningPath,
  landscaperLearningPath,
  applianceRepairLearningPath,
  elevatorTechnicianLearningPath,
  locksmithLearningPath,
  pestControlLearningPath,
  telecomInstallerLearningPath
};

// Map by career key (easy lookup)
export const learningPathsByCareer = {
  electrician: electricianLearningPath,
  plumber: plumberLearningPath,
  hvac_technician: hvacTechnicianLearningPath,
  construction_pm: constructionPmLearningPath,
  solar_installer: solarInstallerLearningPath,
  carpenter: carpenterLearningPath,
  welder: welderLearningPath,
  auto_mechanic: autoMechanicLearningPath,
  home_inspector: homeInspectorLearningPath,
  landscaper: landscaperLearningPath,
  appliance_repair: applianceRepairLearningPath,
  elevator_technician: elevatorTechnicianLearningPath,
  locksmith: locksmithLearningPath,
  pest_control: pestControlLearningPath,
  telecom_installer: telecomInstallerLearningPath
};

export default learningPathsByCareer;
