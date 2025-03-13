/**
 * An array of routes that are accessible to authenticated users
 * These routes require authentication
 * @type {string[]}
 */
export const authRoutes = ['/login'];

/**
 * The default API routes
 * @type {string}
 */
export const DEFAULT_API_ROUTES = '/api';

/**
 * The default login redirect URL
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = '/';

/**
 * The default logout redirect URL
 * @type {string}
 */
export const DEFAULT_LOGOUT_REDIRECT = '/login';

export const newsApiRoute = `${DEFAULT_API_ROUTES}/news`;
