import SectionNavigation from "./SectionNavigation";

const sections = [
  ["summary", "Summary"],
  ["capabilities", "Capabilities"],
  ["experience", "Experience"],
  ["education", "Education"],
  ["background", "Background"],
  ["interests", "Interests"],
];

export default function ResumeNavigation() {
  return <SectionNavigation sections={sections} label="Resume sections" />;
}
