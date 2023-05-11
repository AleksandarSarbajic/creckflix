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
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link
              href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
              rel="stylesheet"
            />
            <title>Your Email Template</title>
            <style>
              body,
              body * {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
              }
        
              /* Set a background color */
              body {
                background-color: #f1f1f1;
                font-family: inter, sans-serif;
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
                font-size: 14px;
              }
        
              /* Footer section */
              .footer {
                text-align: center;
                padding: 20px 0;
                color: #888888;
                font-size: 12px;
              }
              .img {
                width: 140px;
                height: 50px;
              }
              .align {
                margin-bottom: 40px;
                text-align: center;
              }
              .text {
                font-size: 14px;
                margin: 0 20px;
                text-align: center;
              }
              .outline {
                height: 1px;
                background-color: #ddd;
                margin-bottom: 30px;
              }
              .button {
                background-color: #e50914;
                color: #ffffff !important;
                display: block;
                font-family: sans-serif;
                font-size: 14px;
                font-weight: 600;
                line-height: 40px;
                margin-bottom: 10px;
                text-decoration: none;
                width: 200px;
                margin: 0 auto;
                border: none;
                cursor: pointer;
                border-radius: 5px;
                text-align: center;
              }
              .link {
                font-size: 12px;
                font-weight: 600;
                opacity: 0.7;
                text-align: center;
                margin: 20px 0 40px 0;
              }
              .link a {
                color: #000;
                
              }
              
              .linked {
                color: #ffffff !important;
                text-decoration: none;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Creckflix</h1>
                <img src="https://i.ibb.co/mCrD5cm/logo.png" alt="logo" class="img" />
              </div>
              <div class="content">
                <p class="align">
                  Hey ${account[0].name}, did you want to reset your password?
                </p>
                <p class="text">
                  Someone (hopefully you) has asked us to reset the password for your
                  Twitch account. Please click the button below to do so. If you didn't
                  request this password reset, you can go ahead and ignore this email!
                </p>
              </div>
              <div class="outline"></div>
            
              <a
              href="http://localhost:3000/email/${data._id}"
              class="button"
              >Reset your email</a
              >
            
              <p class="link">
                Or click this link:<a
                  href="http://localhost:3000/email/${data._id}"
                  
                >
                  http://localhost:3000/email/${data._id}</a
                >
              </p>
              <div class="footer">
                <p>© 2023 Creckflix. All rights reserved.</p>
              </div>
            </div>
          </body>
        </html>
        `,
      });
      return res.status(200).json({ cucsess: true });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }
}
