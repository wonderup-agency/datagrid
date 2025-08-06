(() => {
  const component = document.querySelector("[data-component='demo-form']");

  if (!component) return;

  const form = component.querySelector("form");
  const textArea = form.querySelector("textarea");
  const placeholderText = component.dataset.placeholder.trim();
  let targetUrl = component.dataset.targetUrl.trim();

  let currentIndex = 0;
  const typewriterEffect = () => {
    if (currentIndex < placeholderText.length) {
      textArea.setAttribute(
        "placeholder",
        placeholderText.substring(0, currentIndex + 1),
      );
      currentIndex++;
      setTimeout(typewriterEffect, 20);
    }
  };
  typewriterEffect();

  textArea.addEventListener("input", () => {
    textArea.style.height = "auto";
    textArea.style.height = `${textArea.scrollHeight}px`;
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopPropagation();
    const formData = new FormData(form);
    const params = new URLSearchParams();
    for (let [key, value] of formData) {
      if (value) {
        params.append(key, value);
      }
    }
    targetUrl += `?${params.toString()}`;
    window.open(targetUrl, "_blank");
  });
})();
