export function getProjectSlug(title = "") {
  return String(title)
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getProjectAnchor(title = "") {
  return `project-${getProjectSlug(title)}`;
}
