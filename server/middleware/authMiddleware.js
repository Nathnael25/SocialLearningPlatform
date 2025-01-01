import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, proccess.env.JWT_SECRET);
    req.user = decodded;
    next();
  } catch (err) {
    res.status(401).json({ messge: "Invalid token" });
  }
};

export default authMiddleware;
