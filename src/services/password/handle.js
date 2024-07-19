async function handle() {
  let characters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  let password = "";

  const passwordLength = process.env.PASSWORD_LENGTH;

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  if (process.env.UPPERCASE_LETTERS === "true") {
    characters.push(...letters);
  }
  if (process.env.LOWERCASE_LETTERS === "true") {
    characters.push(...letters.toLowerCase());
  }
  if (process.env.NUMBERS === "true") {
    characters.push(..."0123456789");
  }

  if (process.env.SPECIAL_CHARACTERS === "true") {
    characters.push(..."!@#$%&*-.,");
  }

  for (let i = 0; i < passwordLength; i++) {
    const index = Math.floor(Math.random() * characters.length);

    password += characters[index];
  }

  return password;
}

export default handle;
