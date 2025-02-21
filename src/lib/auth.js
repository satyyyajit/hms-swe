import jwt from 'jsonwebtoken';

// Verify JWT token
export const verifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        return null;
    }
};

// Get user from token
export const getUserFromToken = (token) => {
    if (!token) return null;
    return verifyToken(token);
};

// decode JWT token
export const decodeToken = (token) => {
    return jwt.decode(token);
};

