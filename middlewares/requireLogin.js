// The next parameter signals end of middleware functionality to pass off to the next middleware
// Ends request if user is not logged in
// Sends status/custom error in response
module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: "You must log in!" });
  }

  // If user is logged in, pass middleware authentication
  next();
};
