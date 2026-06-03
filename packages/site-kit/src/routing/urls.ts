export function trimTrailingSlash(value: string) {
  return value.replace(/\/+$/, "");
}

export function ensureLeadingSlash(path: string) {
  return path.startsWith("/") ? path : `/${path}`;
}

export function ensureTrailingSlash(path: string) {
  return path.endsWith("/") ? path : `${path}/`;
}

export function normalizePath(path = "/") {
  if (path === "") return "/";

  const withLeadingSlash = ensureLeadingSlash(path);
  const withoutDuplicateSlashes = withLeadingSlash.replace(/\/+/g, "/");

  return ensureTrailingSlash(withoutDuplicateSlashes);
}

export function absoluteUrl(origin: string, path = "/") {
  return new URL(normalizePath(path), trimTrailingSlash(origin)).toString();
}
