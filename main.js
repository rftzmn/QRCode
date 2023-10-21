import { data } from "autoprefixer";
import { stringify } from "postcss";

const generateButton = document.getElementById('generateQrButton');

const generateQR = () => {
  const width = document.getElementById('width').value;
  const height = document.getElementById('height').value;
  const qrText = document.getElementById('qrText').value;

  console.log(typeof width, typeof height, typeof qrText);

  const app = document.getElementById('app');
  app.innerHTML = `
  <img src="https://api.qrserver.com/v1/create-qr-code/?size=${width}x${height}&data=${qrText}" alt="" class="shadow-xl shadow-cyan-500/50 rounded-lg p-4 mt-36 border-4 border-rose-500">
  <button
        id="reloadBtn"
        class="btn btn-outline btn-error w-full max-w-xs mt-10" onClick="window.location.reload()"
      >
        Reload
      </button>
  `
}

generateButton.addEventListener('click', generateQR)