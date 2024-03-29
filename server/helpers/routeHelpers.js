const Joi =require('joi');

module.exports={
    validateBody: (schema)=>{
        return(req, res,next)=>{
           
           const result=schema.validate(req.body);

            if(result.error) return res.status(400).json(result.error);

            if(!req.value) req.value={};
            req.value['body']=result.value;
            next();
        }
    },
    schemas:{
        authSchema: Joi.object().keys({
            email:Joi.string().email().required(),
            password: Joi.string().required()
        }),
        projectSchema: Joi.object().keys({
            name:Joi.string().required(),
            author:Joi.string().required(),
            link:Joi.string().required(),
            grade:Joi.number().required()
        })
    },
    validateProject: (schema)=>{
        return(req, res, next)=>{
            const result=schema.validate(req.body);
            if(result.error) return res.status(400).json(result.error);

            if(!req.value) req.value={};
            req.value['body']=result.value;
            next();
        }
    }
}
