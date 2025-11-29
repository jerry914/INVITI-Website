/**
 * Routing utilities for handling base path in GitHub Pages deployment
 * The base path is '/INVITI-Website/' as configured in vite.config.ts
 */

export const BASE_PATH = '/INVITI-Website';

/**
 * Removes the base path from a given path
 * @param path - The full path including base path
 * @returns The path without the base path
 */
export function removeBasePath(path: string): string {
  if (!path) return '/';
  
  // Remove the base path if present
  if (path.startsWith(BASE_PATH)) {
    return path.slice(BASE_PATH.length) || '/';
  }
  
  return path;
}

/**
 * Adds the base path to a given path
 * @param path - The path without base path (e.g., '/blog', '/help-center')
 * @returns The full path with base path (e.g., '/INVITI-Website/blog')
 */
export function addBasePath(path: string): string {
  if (!path || path === '/') {
    return BASE_PATH + '/';
  }
  
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : '/' + path;
  
  // Don't add base path if it's already there
  if (normalizedPath.startsWith(BASE_PATH)) {
    return normalizedPath;
  }
  
  return BASE_PATH + normalizedPath;
}

/**
 * Gets the current path without the base path
 * @returns The current pathname without base path
 */
export function getCurrentPath(): string {
  return removeBasePath(window.location.pathname);
}

