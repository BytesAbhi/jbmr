const validateBody = (validateDto) => (req, res, next) => {
    const { error, value } = validateDto.validate(req.body, {
        stripUnknown: true,
        allowUnknown: true,
        abortEarly: false
    })

    if (!!error?.details?.length) {
        // console.log(error.details.message)
        res.status(400).json({
            errors: error?.details.reduce((errors, curr) =>
                ({ ...errors,[curr.context.key]: curr.message.replace(/"/g, '')}),
                {}),
            "status": "fail",
            "statusCode": 400,
        })
          
        return;
    }
    req.body = value
    next()
}
const validateFile = (validateDto) => (req, res, next) => {
    const { error, value } = validateDto.validate(req.file, {
        stripUnknown: true,
        allowUnknown: true,
        abortEarly: false
    })

    if (!!error?.details?.length) {
        // console.log(error.details.message)
        res.status(400).json({
            errors: error?.details.reduce((errors, curr) =>
                ({ ...errors,[curr.context.key]: curr.message.replace(/"/g, '')}),
                {}),
            "status": "fail",
            "statusCode": 400,
        })
    
        return;
    }
    req.file = value
    next()
}
const validateQuery = (validateDto) => (req, res, next) => {
    const { error, value } = validateDto.validate(req.query, {
        stripUnknown: true,
        allowUnknown: true,
        abortEarly: false
    })

    if (!!error?.details?.length) {
        res.status(400).json({
            errors: error?.details.reduce((errors, curr) =>
                ({ ...errors, [curr.context.key]: curr.message.replace(/"/g, '') }),
                {}),
            "status": "fail",
            "statusCode": 400,
        })
        
        return;
    }
    req.query = value
    next()
}

const validateParams = (validateDto) => (req, res, next) => {
    const { error, value } = validateDto.validate(req.params, {
        stripUnknown: true,
        allowUnknown: true,
        abortEarly: false
    })

    if (!!error?.details?.length) {
        res.status(400).json({
            errors: error?.details.reduce((errors, curr) =>
                ({ ...errors, [curr.context.key]: curr.message.replace(/"/g, '') }),
                {}),
            "status": "fail",
            "statusCode": 400,
        })
        
        return;
    }
    req.params = value
    next()
}

module.exports={validateBody,validateParams,validateQuery,validateFile}