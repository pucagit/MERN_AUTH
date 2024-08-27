import { VERIFICATION_EMAIL_TEMPLATE } from "./email.template.js";
import { mailtrapClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verification Email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Email Verification",
    });

    console.log("Email sent successfully!", response);
  } catch (error) {
    console.log("Error sending verification email!", error);
    throw new Error("Verification email sent", error);
  }
};
