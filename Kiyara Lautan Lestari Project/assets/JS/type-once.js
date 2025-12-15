document.querySelectorAll(".typing-once").forEach((el) => {
  const text = el.textContent;
  const speed = parseInt(el.dataset.speed) || 80;
  let index = 0;

  el.textContent = "";

  function type() {
    if (index < text.length) {
      el.textContent += text.charAt(index);
      index++;
      setTimeout(type, speed);
    }
  }

  type();
});
