const card = document.getElementById("card");

card.addEventListener("click", (e) => {
  card.classList.toggle("is-flipped");

  if (card.classList.contains("is-flipped")) {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }
});

// 🌟 Sparkles
const canvas = document.getElementById("sparkle-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const sparkles = Array.from({ length: 100 }).map(() => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 1.5 + 0.5,
  d: Math.random() * 2,
}));

function drawSparkles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
  sparkles.forEach((s) => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2, false);
    ctx.fill();
  });
  moveSparkles();
}

function moveSparkles() {
  sparkles.forEach((s) => {
    s.y += s.d;
    if (s.y > canvas.height) {
      s.y = 0;
      s.x = Math.random() * canvas.width;
    }
  });
}

setInterval(drawSparkles, 30);

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
