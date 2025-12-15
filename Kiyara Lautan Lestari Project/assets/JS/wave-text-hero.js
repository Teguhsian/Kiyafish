const texts = ["Make Someone Happy", "Sustainable Seafood Future"];

const el = document.getElementById("waveText");
let index = 0;

const waveSpeed = 60; // delay antar huruf
const stayTime = 2000; // teks diam
const fadeTime = 600; // waktu fade out

function showWave(text) {
  el.classList.remove("fade-out");
  el.innerHTML = "";

  [...text].forEach((char, i) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    span.style.animationDelay = `${i * waveSpeed}ms`;
    el.appendChild(span);
  });
}

function cycle() {
  showWave(texts[index]);

  // tunggu teks selesai + diam
  setTimeout(
    () => {
      el.classList.add("fade-out");

      // tunggu fade selesai → ganti teks
      setTimeout(() => {
        index = (index + 1) % texts.length;
        cycle();
      }, fadeTime);
    },
    stayTime + texts[index].length * waveSpeed,
  );
}

cycle(); // mulai
