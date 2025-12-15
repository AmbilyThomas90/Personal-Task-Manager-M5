import jwt from "jsonwebtoken";


export default function auth(req, res, next) {
const token = req.headers.authorization;
if (!token) return res.status(401).json({ message: "No token" });


try {
    // Verify the token using the secret key stored in environment variables
    // If valid, jwt.verify returns the decoded payload (user data)
const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach decoded user data to the request object
    // This makes req.user available in all protected controllers
req.user = decoded;
  // Move to the next middleware or controller
next();
} catch {
     // If token is invalid or expired, deny access
res.status(401).json({ message: "Invalid token" });
}
}