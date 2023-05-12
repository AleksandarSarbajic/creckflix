// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { transporter } from "@/components/custom hook/nodemailer";
import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://sleasarbajic:FIEzTsepUaCSR79i@creck.ougdyzb.mongodb.net/users?retryWrites=true&w=majority"
    );
    const db = client.db();

    const userCollection = db.collection("users");
    console.log(data);
    const account = await userCollection.find({ email: data.email }).toArray();
    if (account.length > 0) {
      res.status(201).json({ message: "Already have it" });
      return;
    }

    const result = await userCollection.insertOne({
      ...data,
      stayLogin: false,
    });

    client.close();
    try {
      await transporter.sendMail({
        from: "creckflix@gmail.com",
        to: data.email,
        subject: "Welcome to CreckFlix",
        text: "Welcome to Creckflix! We are thrilled to have you join our ever-growing community of entertainment enthusiasts",
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
                margin: 0 20px 10px 20px;
                text-align: center;
                line-height: 1.5;
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
                border-radius: 5px;
                text-align: center;
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
                <p class="text">
                  Welcome to Creckflix! We are thrilled to have you join our
                  ever-growing community of entertainment enthusiasts. Prepare yourself
                  for an incredible journey through a world of captivating movies and TV
                  shows right at your fingertips.
                </p>
                <p class="text">
                  At Creckflix, we understand your insatiable desire for quality
                  entertainment, and we're here to cater to your every cinematic whim.
                  Whether you're an ardent fan of gripping thrillers, heartwarming
                  dramas, side-splitting comedies, or awe-inspiring documentaries, we
                  have an extensive library of diverse content that will surely keep you
                  entertained for hours on end.
                </p>
              </div>
              <div class="outline"></div>
              <a href="https://creckflix.vercel.app/browse" class="button"
                >Enjoy new movies
              </a>
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

export default handler;
