class ApiError extends Error {
    constructor(
        statusCode,
        message="Something went wrong",
        errors=[],
        stack= ""
        
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors

        if(stack){
<<<<<<< HEAD
            this.stack = stack
=======
            this.stack = statck
>>>>>>> 1bf3e52a3df7b6100752c4de0e48a5e977f3c221
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}
export{ApiError}
