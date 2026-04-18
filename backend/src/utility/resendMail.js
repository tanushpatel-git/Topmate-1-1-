const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

async function resendMail(toMail, message) {
    try {
        const response = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: toMail,
            subject: "Topmate",
            html: message,
        });
        return { success: true, data: response };
    } catch (error) {

        return { success: false, error: error.message };
    }
}

module.exports = { resendMail };