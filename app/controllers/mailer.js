// Use at least Nodemailer v4.1.0
const nodemailer = require('nodemailer');

module.exports.mailer = function(to, link, token, token_id, callback){
    
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
        html: '<p><b>Link para redefinicão de senha: </b> http://localhost?request_id='+token+'&token_id='+token_id+'</p>'
    };

    // Create a SMTP transporter object
    transporter.sendMail(message, (err, info) => {
        if (err) {
            console.log('Error occurred. ' + err.message);
            return process.exit(1);
        }

        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });    

}