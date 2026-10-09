import sendMail from "./utils/nodemailer.js";

export const sendMailController = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    await sendMail(name, email, subject, message);

    return res.status(201).json({ message: "Mail sended successfully" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: error.message || "Internal server error" });
  }
};
