import axios from "axios";

export const mailSenderService = async (name, email, subject, message) => {
  const response = await axios.post("/mail", { name, email, subject, message });
  if (response.status != 201)
    return { success: false, message: response.data.message };

  return { success: true, message: response.data.message };
};
