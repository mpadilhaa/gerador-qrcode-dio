import chalk from "chalk";

const promptQrCode = [
  {
    name: "link",
    description: chalk.yellow("Digite o link para gerar o QRCODE"),
  },
  {
    name: "type",
    description: chalk.yellow(
      "Escolha entre o tipo de QRCODE (1) - NORMAL ou (2) - TERMINAL"
    ),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("escolha apenas entre 1 e 2"),
    required: true,
  },
];

export default promptQrCode;
