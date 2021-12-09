const alpha =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*_-+=";

const symbols = "!@#$%^&*_-+=";

const generatePassword = (length) => {
  const alph1 = alpha.slice(0, -12);

  const random1 = alph1.charAt(Math.floor(Math.random() * alph1.length));

  let password = random1 + random1;

  for (let i = 0; i < length - 1; i++) {
    password += alpha.charAt(Math.floor(Math.random() * alpha.length));
  }

  return password;
};
module.exports = generatePassword;
