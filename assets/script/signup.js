document.querySelectorAll(".input-box input").forEach((input) => {
  input.addEventListener("focus", () => {
    input.parentNode.classList.add("input-focused");
  });

  input.addEventListener("blur", () => {
    if (!input.value) {
      input.parentNode.classList.remove("input-focused");
    }
  });
});
