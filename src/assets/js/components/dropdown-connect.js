// дропдаун в хэдере по кнопке Связаться с нами
// показывает контактные данные

const initDropdownConnect = () => {
  const block = document.querySelector('[data-connect]');
  if (!block) return;

  const btn = block.querySelector('[data-connect-btn]');
  const dropdown = block.querySelector('[data-connect-dropdown]');

  const toggleDropdown = (isOpen) => {
    dropdown.classList.toggle('connect__dropdown--active', isOpen);
    btn.classList.toggle('connect__btn--active', isOpen);
    btn.setAttribute('aria-expanded', isOpen);
  };

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = dropdown.classList.contains('connect__dropdown--active');
    toggleDropdown(!isOpen);
  });

  document.addEventListener('click', (e) => {
    if (!btn.contains(e.target) && !dropdown.contains(e.target)) {
      toggleDropdown(false);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      toggleDropdown(false);
    }
  });
};

initDropdownConnect();
