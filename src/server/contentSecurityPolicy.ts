/**
 * The Content Security Policy's sources by directive, which `middleware.ts` turns into the header. Add the sources the
 * application's own features load from here, so recipe updates to the middleware never conflict with them.
 */
export const contentSecurityPolicy: Record<string, string[]> = {
  'default-src': ["'self'"],
  // Start streams its hydration data as inline scripts, and the root route adds chunk recovery. Background removal loads
  // ONNX Runtime as blob modules, and its ndarray dependency compiles accessors with Function().
  'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'", 'blob:'],
  'style-src': ["'self'", "'unsafe-inline'"],
  // The footer avatar comes from GitHub.
  'img-src': ["'self'", 'data:', 'blob:', 'https://github.com', 'https://avatars.githubusercontent.com'],
  'font-src': ["'self'", 'data:'],
  // Background removal fetches its model and ONNX Runtime from staticimgly.com.
  'connect-src': ["'self'", 'blob:', 'https://staticimgly.com'],
  'worker-src': ["'self'", 'blob:'],
  'object-src': ["'none'"],
  'base-uri': ["'self'"],
  'form-action': ["'self'"],
  'frame-ancestors': ["'none'"],
}
