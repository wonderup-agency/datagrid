(() => {
  const component = document.querySelector("[data-component='demo-form']");

  if (!component) return;

  const form = component.querySelector("form");
  const textArea = form.querySelector("textarea");

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
    const targetUrl = "https://app.datagrid.com/sign-up?" + params.toString();
    window.open(targetUrl, "_blank");
  });
})();
