const mainCheckbox = document.querySelector(
  ".form-container form .remember-me input"
);
const customCheckbox = document.querySelector(
  ".form-container form .remember-me .checkmark"
);

customCheckbox.addEventListener("click", toggleCheckbox);

function toggleCheckbox() {
  if (mainCheckbox.checked) mainCheckbox.checked = false;
  else mainCheckbox.checked = true;
}

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
