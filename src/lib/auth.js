import jwt from 'jsonwebtoken';

// Verify JWT token
export const verifyToken = (token) => {
    if (!process.env.JWT_SECRET) {
        throw new Error('JWT secret key is not set.');
    }
    return jwt.verify(token, process.env.JWT_SECRET);
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

