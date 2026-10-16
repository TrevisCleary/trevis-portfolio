import { projectCaseStudies, projectHref } from "./projectCaseStudies";

export const featuredProjects = projectCaseStudies.slice(0, 3).map((project) => ({
  title: project.title,
  slug: project.slug,
  description: project.description,
  href: projectHref(project),
  label: "Case Study",
}));
