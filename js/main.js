// スクロール監視の共通設定
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.1 },
); // 10%見えたら発火

// .reveal がついたすべての要素を監視
document.querySelectorAll(".reveal").forEach((el) => {
  revealObserver.observe(el);
});

// Works専用の遅延アニメーション
const worksObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, index * 150);
      }
    });
  },
  { threshold: 0.2 },
);

document.querySelectorAll(".work-item").forEach((item) => {
  worksObserver.observe(item);
});

const form = document.getElementById("contact-form");
const postcard = document.querySelector(".postcard");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // 送信時のアニメーション
  postcard.style.transition =
    "transform 1s cubic-bezier(0.68, -0.55, 0.265, 1.55), opacity 1s";
  postcard.style.transform = "translateY(-100vh) rotate(10deg)";
  postcard.style.opacity = "0";

  setTimeout(() => {
    alert("MESSAGE SENT! (Thank you for your postage)");
    // 実際はここでメール送信処理
    postcard.style.transform = "rotate(-1deg)";
    postcard.style.opacity = "1";
  }, 1500);
});
