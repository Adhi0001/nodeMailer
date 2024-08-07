const nodemailer = require('nodemailer')

const sendEmail = (emailConfig, resData) => { //emailBody = {to, subject, text}

    return new Promise((resolve, reject) => {
        
        let transporter = nodemailer.createTransport({

            host: "smtp.office365.com",

            port: 587,

            secure: false,

            auth: {

                user: "anilkumar.t@verifacts.co.in",

                pass: " "

            }

        })

        let mailOptions = {

            from: "anilkumar.t@verifacts.co.in",

            to: emailConfig.to,

            subject: emailConfig.subject,

            text: emailConfig.text

 

        }

        transporter.sendMail(mailOptions, function (error, info) {

            if (error) {

                reject(error)

            } else {

                if (resData) {

                    resolve( resData )

                } else {

                    resolve({ message: "Successfull" })

                }

            }

        })

    })

}

const resData = {
    exampleKey: "exampleValue"
};
const emailConfig ={
          to : "dhiraj.shaw@verifacts.co.in",
        subject  :"testing",
        text :"hello"
}
sendEmail(emailConfig,resData).then(result => {
    console.log("mail sent successfully:", result);
}).catch(error => {
    console.error("Error sending email:", error);
});

