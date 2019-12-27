import { createTransport } from 'nodemailer';

import { Response } from '../interface';

const transporter = createTransport({
  host: 'mail.insg.xyz',
  secure: true,
  auth: {
    user: 'i@insg.xyz',
    pass: 'pass1234'
  }
});

const mailOptions = {
  from: 'i@insg.xyz',
  to: 'seesea2@gmail.com',
  subject: 'Hello',
  text: 'This is email from InSG.xyz',
  html: '<b>this is email from InSG.xyz</b>'
};

function SendEmail(body: any, res: Response) {
  // const emailHtml: string =
  //   '<!DOCTYPE html><head>' +
  //   '<meta http-equiv="content-type" content="text/html;charset=UTF-8"></head>' +
  //   `<body><br><b>Message from User ${body.name}` +
  //   ' :</b><br><br>' +
  //   `<p><b>Email: </b> ${body.email}` +
  //   '</p>' +
  //   `<p><b>Mobile: </b> ${body.mobile}` +
  //   '</p>' +
  //   `<p><b>Message: </b> ${body.message}` +
  //   '</p>' +
  //   '</body></html>';

  // mailOptions.subject = 'User Inquiry';
  // mailOptions.html = emailHtml;
  transporter.sendMail(mailOptions);
  return res.status(200).send({ message: 'ok' });
}

export default SendEmail;
