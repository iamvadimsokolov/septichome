// Оглавление статьи: плавная прокрутка и подсветка активного заголовка

const initHeadlines = () => {
  const links = document.querySelectorAll("[data-headlines-link]");
  const headers = document.querySelectorAll(".post-content__text h2");

  // ✅ Проверяем, что элементы есть
  if (!links.length || !headers.length) return;

  // ✅ Плавная прокрутка при клике
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href")?.replace("#", "");
      if (!targetId) return;

      const target = document.getElementById(targetId);
      if (target) {
        const offset = 100;
        const pos = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: pos, behavior: "smooth" });
      }
    });
  });

  // ✅ Подсветка активного заголовка при скролле
  const updateActiveLink = () => {
    let currentId = "";
    const offset = 120;

    headers.forEach((header) => {
      const rect = header.getBoundingClientRect();
      if (rect.top <= offset) {
        currentId = header.id;
      }
    });

    links.forEach((link) => {
      const href = link.getAttribute("href")?.replace("#", "");
      link.classList.toggle("active", href === currentId);
    });
  };

  window.addEventListener("scroll", updateActiveLink);
  updateActiveLink();
};

initHeadlines();
