// wraper functions with promises expression
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
    };
};

export { asyncHandler }








/* wraper functions with try and catch exceptions
const asyncHandler = (fn) => {
    async (err, req, res, next) => {
        try {
            await fn(err, req, res, next);
        } catch (error) {
            res.status(err.code || 500).json({
                success: false,
                message: error.message || "Something went wrong"
            })
        }

    }
}
*/
