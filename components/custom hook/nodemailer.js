import nodemailer from "nodemailer";
const email = "creckflix@gmail.com";
const pass = "kxrjobsqhibfvwio";
export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});
