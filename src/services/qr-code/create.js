import prompt from "prompt";
import promptQrCode from "../../prompts/prompt-qrcode.js";

async function createQrCode() {
  prompt.get(promptQrCode, handle);

  prompt.start();
}

export default createQrCode;
