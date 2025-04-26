// Flip Card Logic
const card = document.getElementById("card");

function handleFlip(e) {
  e.preventDefault(); // Prevent double tap issues
  card.classList.toggle("is-flipped");

  if (card.classList.contains("is-flipped")) {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
    });
  }
}

// Listen for both desktop click and mobile touch
card.addEventListener("click", handleFlip);
card.addEventListener("touchstart", handleFlip);

// Sparkles background
const canvas = document.getElementById("sparkle-canvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();

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
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
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
      s.r = Math.random() * 1.5 + 0.5;
      s.d = Math.random() * 2;
    }
  });
}

setInterval(drawSparkles, 30);

window.addEventListener("resize", resizeCanvas);

// OPTIONAL: Auto-play background music on load (for mobile Safari fix)
const bgMusic = document.getElementById("bg-music");
document.body.addEventListener(
  "touchstart",
  () => {
    bgMusic.play().catch(() => {});
  },
  { once: true }
);
