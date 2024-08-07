const nodemailer =require('nodemailer');

const sendEmail=(emailConfig,resData)  => {
    return new promises ((resolve,reject)=>{
     
        let transporter = nodemailer.createTransport({

        host :"smtp.office365.com",
        port:548,
        secure:false,
        auth:{
            user:"anilkumar.t@verifacts.co.in",
            pass:"Rahjkar@1996"
        }
       })

       let mailOptions ={
        from:"anilkumar.t@verifacts.co.in",
        to:emailConfig.to,
        subject:emailConfig.subject,
        text:emailConfig.text
       }

       transporter.sendMail(mailOptions,function(error,info)
       {
         if(error){
            reject(error)
            }else{
                if(resData){
                    resolve(resData)
                }else{
                    resolve({message:"Successful"})
                }
            }
         })

       })
    }

const resData={
    exampleKey: "exampleValue"
};

const emailConfig={
    to:"adarsh.s@verifacts.co.in",
    subject:"testing",
    text:"hello"
}

sendEmail(emailConfig,resData).then(result => {
    console.log("Email sent successfully:", result);
}).catch(error => {
    console.error("Error sending email:", error);
});