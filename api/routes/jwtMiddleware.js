const jwt = require('jsonwebtoken');
const { ACCESS_TOKEN_SECRET } = require("../config.js");

module.exports = {
  checkJwt: (req, res, next) => {
    // Get the JWT from the request header.
    const token = req.headers['authorization'];
    let jwtPayload;

    // Validate the token and retrieve its data.
    try {
      // The header is usually "Bearer <token>"
      // So we split by space and take the second part
      if (!token) {
        throw new Error("No token provided");
      }
      
      let jwtBearer = token.split(' ')[1];
      if (!jwtBearer) {
        throw new Error("No Bearer token found");
      }

      console.log("Authorization: " + jwtBearer);
      jwtPayload = jwt.verify(jwtBearer, ACCESS_TOKEN_SECRET, {
        complete: true,
        algorithms: ['HS256'],
        clockTolerance: 0,
        ignoreExpiration: false,
        ignoreNotBefore: false
      });
      // Add the payload to the request so controllers may access it.
      req.token = jwtPayload;
    } catch (error) {
      console.log(error);
      res.status(401)
        .type('json')
        .send(JSON.stringify({ message: 'Missing or invalid token' }));
      return;
    }

    // Pass programmatic flow to the next middleware/controller.
    next();
  }
}
