// PAGE NAVIGATION
function goToPage(num) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(`page${num}`).classList.add('active');
}

// MUSIC UPLOAD
function loadMusic(event) {
  const audio = document.getElementById('bgMusic');
  audio.src = URL.createObjectURL(event.target.files[0]);
  audio.play();
}

// IMAGE UPLOAD
function loadImages(event) {
  const files = event.target.files;
  const photos = document.querySelectorAll('.photo img');
  const finalGallery = document.querySelector('.gallery.final');

  finalGallery.innerHTML = "";

  [...files].slice(0,6).forEach((file, i) => {
    const url = URL.createObjectURL(file);
    photos[i].src = url;

    const img = document.createElement('img');
    img.src = url;
    img.style.width = "100px";
    img.style.borderRadius = "20px";
    finalGallery.appendChild(img);
  });
}

// COUNTDOWN TIMER (12 HOURS)
const totalTime = 12 * 60 * 60;
let startTime = localStorage.getItem("startTime");

if (!startTime) {
  startTime = Date.now();
  localStorage.setItem("startTime", startTime);
}

setInterval(() => {
  const elapsed = Math.floor((Date.now() - startTime) / 1000);
  const remaining = Math.max(totalTime - elapsed, 0);

  const h = String(Math.floor(remaining / 3600)).padStart(2, '0');
  const m = String(Math.floor((remaining % 3600) / 60)).padStart(2, '0');
  const s = String(remaining % 60).padStart(2, '0');

  document.getElementById('countdown').textContent = `${h}:${m}:${s}`;
}, 1000);

// SECRET CODE
const secretCode = "2019";
document.getElementById("codeInput").addEventListener("input", e => {
  if (e.target.value === secretCode) {
    document.getElementById("unlockBtn").disabled = false;
    document.getElementById("lockText").textContent = "Unlocked 💖";
  }
});

// NO BUTTON RUNS AWAY
const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover", () => {
  noBtn.style.top = Math.random() * 150 + "px";
  noBtn.style.left = Math.random() * 200 + "px";
});

//Loading audio and play in bg
const audio = document.getElementById("bgAudio");

function startAudio() {
  audio.volume = 0.8;   // soft romantic volume
  audio.play().catch(() => {});
}



