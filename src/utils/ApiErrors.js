class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        statch = "") {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.data = null;
        this.success = false;
        this.errors = errors;
        if (statch) {
            this.stack = statch;
        }
        else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { ApiError }