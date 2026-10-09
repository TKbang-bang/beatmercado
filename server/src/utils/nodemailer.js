import nodemailer from "nodemailer";

const sendMail = async (name, email, subject, message) => {
  try {
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    // send mail with defined transport object
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL}>`,
      to: process.env.EMAIL,
      replyTo: email,
      subject,
      html: `
        <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); font-family: 'Helvetica Neue', sans-serif; color: #333;">
          <div style="background-color: #007BFF; padding: 20px; border-top-left-radius: 10px; border-top-right-radius: 10px;">
            <h2 style="color: #fff; margin: 0; font-size: 24px;">New Contact Message</h2>
          </div>
          <div style="padding: 20px;">
            <p style="margin: 0 0 10px;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 0 0 10px;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 0 0 10px;"><strong>Subject:</strong> ${subject}</p>
            <div style="margin-top: 20px;">
              <p style="margin-bottom: 8px;"><strong>Message:</strong></p>
              <div style="background-color: #f1f1f1; padding: 15px; border-radius: 6px; line-height: 1.6; white-space: pre-line;">
                ${message}
              </div>
            </div>
          </div>
          <div style="padding: 15px; text-align: center; font-size: 12px; color: #777; border-top: 1px solid #eee;">
            This email was automatically generated from your website's contact form.
          </div>
        </div>
      `,
    };

    // sending email
    await transporter.sendMail(mailOptions);
  } catch (error) {
    throw new Error("Something went wrong sending the email");
  }
};

export default sendMail;
