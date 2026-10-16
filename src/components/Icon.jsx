import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { faDownload } from "@fortawesome/free-solid-svg-icons/faDownload";
import { faChartColumn } from "@fortawesome/free-solid-svg-icons/faChartColumn";
import { faMicrochip } from "@fortawesome/free-solid-svg-icons/faMicrochip";
import { faDatabase } from "@fortawesome/free-solid-svg-icons/faDatabase";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons/faCodeBranch";
import { faHeartPulse } from "@fortawesome/free-solid-svg-icons/faHeartPulse";
import { faNetworkWired } from "@fortawesome/free-solid-svg-icons/faNetworkWired";
import { faPlane } from "@fortawesome/free-solid-svg-icons/faPlane";
import { faServer } from "@fortawesome/free-solid-svg-icons/faServer";
import { faDiagramProject } from "@fortawesome/free-solid-svg-icons/faDiagramProject";
import { faWrench } from "@fortawesome/free-solid-svg-icons/faWrench";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons/faShieldHalved";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons/faPeopleGroup";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";
import { faRobot } from "@fortawesome/free-solid-svg-icons/faRobot";
import { faBoxArchive } from "@fortawesome/free-solid-svg-icons/faBoxArchive";
import { faFileCircleCheck } from "@fortawesome/free-solid-svg-icons/faFileCircleCheck";
import { faFileLines } from "@fortawesome/free-solid-svg-icons/faFileLines";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons/faFolderOpen";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons/faLayerGroup";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons/faPenToSquare";
import { faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlassPlus";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons/faTriangleExclamation";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons/faCalendarDays";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons/faClipboardCheck";
import { faFileExcel } from "@fortawesome/free-solid-svg-icons/faFileExcel";
import { faEnvelopeCircleCheck } from "@fortawesome/free-solid-svg-icons/faEnvelopeCircleCheck";
import { faDesktop } from "@fortawesome/free-solid-svg-icons/faDesktop";
import { faRoute } from "@fortawesome/free-solid-svg-icons/faRoute";
import { faWaveSquare } from "@fortawesome/free-solid-svg-icons/faWaveSquare";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons/faCircleCheck";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons/faClipboardList";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons/faCommentDots";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons/faCirclePlay";
import { faLock } from "@fortawesome/free-solid-svg-icons/faLock";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";

// One weight for interface icons; official brand marks for social links.
const icons = {
  menu: faBars,
  close: faXmark,
  download: faDownload,
  analytics: faChartColumn,
  platform: faMicrochip,
  database: faDatabase,
  branch: faCodeBranch,
  healthcare: faHeartPulse,
  network: faNetworkWired,
  travel: faPlane,
  server: faServer,
  workflow: faDiagramProject,
  tools: faWrench,
  security: faShieldHalved,
  leadership: faPeopleGroup,
  arrowRight: faArrowRight,
  externalLink: faArrowUpRightFromSquare,
  automation: faRobot,
  archive: faBoxArchive,
  fileCheck: faFileCircleCheck,
  document: faFileLines,
  folder: faFolderOpen,
  layers: faLayerGroup,
  drafting: faPenToSquare,
  zoomIn: faMagnifyingGlassPlus,
  warning: faTriangleExclamation,
  calendar: faCalendarDays,
  clipboardCheck: faClipboardCheck,
  spreadsheet: faFileExcel,
  mailCheck: faEnvelopeCircleCheck,
  desktop: faDesktop,
  route: faRoute,
  activity: faWaveSquare,
  check: faCircleCheck,
  clipboard: faClipboardList,
  message: faCommentDots,
  play: faCirclePlay,
  lock: faLock,
  email: faEnvelope,
  github: faGithub,
  linkedin: faLinkedin,
};

// Icons accompany visible text or a labeled control, so they are decorative.
export default function Icon({ name, size = 20, className = "" }) {
  return (
    <FontAwesomeIcon
      icon={icons[name]}
      aria-hidden="true"
      focusable="false"
      className={`shrink-0 ${className}`}
      style={{ width: size, height: size, verticalAlign: "-0.125em" }}
    />
  );
}
