import { transporter } from "@/components/custom hook/nodemailer";
import { MongoClient, ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://sleasarbajic:FIEzTsepUaCSR79i@creck.ougdyzb.mongodb.net/users?retryWrites=true&w=majority"
    );
    const db = client.db();
    const userCollection = db.collection("users");
    try {
      const account = await userCollection
        .find({ _id: new ObjectId(data._id) })
        .toArray();
      await transporter.sendMail({
        from: "creckflix@gmail.com",
        to: account[0].email,
        subject: "Requst to change your email",
        text: "Here is the link to website, for your email change request",
        html: `<!DOCTYPE html>
        <html>
        <head>
          <title>Your Email Template</title>
          <style>
            /* Reset default styles */
            body,
            body * {
              box-sizing: border-box;
              margin: 0;
              padding: 0;
            }
        
            /* Set a background color */
            body {
              background-color: #f1f1f1;
              font-family: Arial, sans-serif;
            }
        
            /* Main email container */
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #ffffff;
              border-radius: 5px;
              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }
        
            /* Header section */
            .header {
              text-align: center;
              padding: 20px 0;
            }
        
            /* Content section */
            .content {
              padding: 20px 0;
            }
        
            /* Footer section */
            .footer {
              text-align: center;
              padding: 20px 0;
              color: #888888;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Creckflix</h1>
            </div>
            <div class="content">
              <p>Hello,</p>
              <p>This is the content of your email. You can customize it to suit your needs.</p>
            </div>
            <div class="footer">
              <p>© 2023 Creckflix. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>`,
      });
      return res.status(200).json({ cucsess: true });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }
}
