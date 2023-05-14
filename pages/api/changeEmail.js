import { MongoClient, ObjectId } from "mongodb";
import { transporter } from "@/components/custom hook/nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://sleasarbajic:FIEzTsepUaCSR79i@creck.ougdyzb.mongodb.net/users?retryWrites=true&w=majority"
    );
    const db = client.db();
    const emails = data.emails;
    const userCollection = db.collection("users");

    const account = await userCollection
      .find({ _id: new ObjectId(data._id) })
      .toArray();
    if (account[0].email === emails.currentEmail) {
      if (
        account[0].email !== emails.newEmail &&
        emails.newEmail === emails.enteredEmail
      ) {
        const update = await userCollection.updateOne(
          { _id: new ObjectId(data._id) },
          { $set: { email: `${emails.newEmail}` } }
        );
        try {
          await transporter.sendMail({
            from: "creckflix@gmail.com",
            to: emails.newEmail,
            subject: "Your Email was changed!",
            text: "Here is the link to website, enjoy new movies!",
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
                      Hey ${account[0].name}, your password has been updated!
                    </p>
                    <p class="text">
                      Your new email adress is set to go!
                    </p>
                  </div>
                  <div class="outline"></div>
                
                  <a
                  href="https://creckflix.vercel.app"
                  class="button"
                  >Visit our website</a
                  >
                
                  <p class="link">
                    Or click this link:<a
                      href="https://creckflix.vercel.app"
                      
                    >
                      https://creckflix.vercel.app</a
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
      } else {
        res.status(401).json({ message: "bad emails" });
      }
    } else {
      res.status(403).json({ message: "wrong email" });
    }
    client.close();

    // res.status(201).json(passwords);
  }
}
