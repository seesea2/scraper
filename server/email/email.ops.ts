import { createTransport } from 'nodemailer';

import { Response } from '../interface';

const outlook_transporter = createTransport({
  service: 'outlook',
  auth: {
    user: 'yuanchao@outlook.sg',
    pass: 'pingmeHC83'
  }
});

const outlook_mailOptions = {
  from: 'yuanchao@outlook.sg',
  to: 'seesea2@gmail.com',
  subject: null,
  html: null
};

function SendEmail(body: any, res: Response) {
  const emailHtml: string =
    '<!DOCTYPE html><head>' +
    '<meta http-equiv="content-type" content="text/html;charset=UTF-8"></head>' +
    `<body><br><b>Message from User ${body.name}` +
    ' :</b><br><br>' +
    `<p><b>Email: </b> ${body.email}` +
    '</p>' +
    `<p><b>Mobile: </b> ${body.mobile}` +
    '</p>' +
    `<p><b>Message: </b> ${body.message}` +
    '</p>' +
    '</body></html>';

  outlook_mailOptions.subject = 'User Inquiry';
  outlook_mailOptions.html = emailHtml;
  outlook_transporter.sendMail(outlook_mailOptions);
  return res.status(200).send({ result: 'ok' });
}

export { SendEmail };
