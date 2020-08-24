const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (name, email) => {
    sgMail.send({
        to: email,
        from: 'itshakbar@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know if you loved the app`
    })
}

const sendCancelationEmail = (name, email) => {
    sgMail.send({
        to: email,
        from: 'itshakbar@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye ${name}, I hope to see you again soon!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}