// スクロール監視のオプションを少し調整
const worksObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // インデックスに応じて少しずつ表示を遅らせる
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
