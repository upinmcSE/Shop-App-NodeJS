const validate = (requestType) => {
    return (req, res, next) => {
        const {error} = requestType.validate(req.body)
        if(error){
            return res.status(400).json({
                message: "loi khi them san pham moi",
                // errors: error.details
                error: error.details[0].message
            })
        }
        next()
    }
}

export default validate;