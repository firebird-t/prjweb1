// Use at least Nodemailer v4.1.0
const nodemailer = require('nodemailer');

function mailer(){}

mailer.prototype.send_mail = function(to, link, token, token_id, callback){
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'rzl4kwpipwopmfdy@ethereal.email',
            pass: 'CHBpcGAJyPsxcsPmxD'
        }
    });

    // Message object
    let message = {
        from: 'Sistemas de Envio de Emails <rzl4kwpipwopmfdy@ethereal.emai>',
        to: to,
        subject: 'Link para redefinição de senha',
        text: 'Link para redefinição de senha!',
        html: '<p><b>Link para redefinicão de senha: </b> http://localhost/password/request/reset?request_id='+token+'&token_id='+token_id+'</p>'
    };

    // Create a SMTP transporter object
    transporter.sendMail(message, callback); 
}
    

module.exports = function(){
    return mailer;
}