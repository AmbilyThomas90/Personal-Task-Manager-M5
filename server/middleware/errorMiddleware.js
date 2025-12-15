// Global error handling middleware for Express
// This function catches errors passed using next(err)

export const errorHandler = (err, req, res, next) => {
    // Send the error message back to the client
res.status(500).json({ message: err.message });
};