'use strict';

const smsService = require('../services/sms-service');

exports.postSms = async(req, res, next)=>{
    try{
        const data = await smsService.sendSms(req.body.para, req.body.message);
        res.status(200).send({
            message:'Mensagem enviada com sucesso.'
        });
    }
    catch(e){
        res.status(500).send({
            message: 'Falha ao enviar SMS ' + e
        });
    }
} 