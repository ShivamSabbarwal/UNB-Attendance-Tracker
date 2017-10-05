
/**
 * Get all posts
 * @param req
 * @param res
 * @returns void
 */
export function login(req, res) {
  res.set('Set-Cookie', 'session-id = 1234');
  res.json({
    status: 'succeeded',
  });
  res.status(200);
}
