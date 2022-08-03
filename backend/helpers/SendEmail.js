const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const CLIENTD_ID =
  "252263736230-sa7uubqje9svv532kd7dlgust640jqcb.apps.googleusercontent.com";
const CLIENTD_SECRET = "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";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRES_TOKEN =
  "1//042YuNDINvjH6CgYIARAAGAQSNwF-L9Irjx_CWCalCiZLPWFVC4OOCPKZnnzd8hgSblWDlbyAzRH22zh2fmVzgjRX2QMScwu0MPY";

const oAuth2Client = new google.auth.OAuth2(
  CLIENTD_ID,
  CLIENTD_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRES_TOKEN });

const welcomeEmailRegister = async (datos) => {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "sdmoreno51@gmail.com",
        clientId: CLIENTD_ID,
        clientSecret: CLIENTD_SECRET,
        refreshToken: REFRES_TOKEN,
        accessToken: accessToken,
      },
    });

    const { email, name } = datos;

    const info = await transport.sendMail({
      from: "TodoApp🌟",
      to: email,
      subject: "TodoApp🌟",
      text: "TodoApp🌟",
      html: `
    <h1>Bienvenido a todoAPP</h1>
    <p>Hola ${name} nos hace feliz tenerte con nosotros, esperamos que tengas una excelente experiencia 😄</p>
    `,
    });
    console.log("Mensaje enviado: %s", info.messageId);
  } catch (error) {
    console.log(error.message);
  }
};

const changuePasswordEmail = async (datos) => {
  console.log(datos);
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "sdmoreno51@gmail.com",
        clientId: CLIENTD_ID,
        clientSecret: CLIENTD_SECRET,
        refreshToken: REFRES_TOKEN,
        accessToken: accessToken,
      },
    });

    const { email, name, changePassword } = datos;

    const info = await transport.sendMail({
      from: "Todo APP",
      to: email,
      subject: "Recupera tu cuenta",
      text: "Recupera tu cuenta",
      html: `<h2>Administracion TodoAPP</h2>
      <p>Hola: ${name}, has solicitado restablecer tu contraseña</p>
      <p>Click en el enlace para generar una nueva contraseña
      <a href="${process.env.FRONTEND_URL}/auth/recuperarCuenta/${changePassword}">Restablecer contraseña</a></p>
  
      <p><span>Si tu no creaste la solicitud, puedes ignorar el mensaje ☺</span></p>
      `,
    });
    console.log("Mensaje enviado: %s", info.messageId);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  welcomeEmailRegister,
  changuePasswordEmail,
};
