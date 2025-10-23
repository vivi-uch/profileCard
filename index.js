const timeElement = document.getElementById("current-time");

function updateTime() {
  timeElement.textContent = Date.now();
}

updateTime();

setInterval(updateTime, 1000);

const form = document.getElementById("contact-form");
const successMsg = document.getElementById("success");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;
  successMsg.textContent = "";

  const fields = [
    { id: "name", testid: "test-contact-error-name" },
    { id: "email", testid: "test-contact-error-email" },
    { id: "subject", testid: "test-contact-error-subject" },
    { id: "message", testid: "test-contact-error-message" },
  ];

  fields.forEach((field) => {
    const input = document.getElementById(field.id);
    const error = document.querySelector(`[data-testid="${field.testid}"]`);
    error.textContent = "";

    if (!input.value.trim()) {
      error.textContent = "This field is required";
      valid = false;
    } else if (
      field.id === "email" &&
      !/^[^@]+@[^@]+\.[^@]+$/.test(input.value)
    ) {
      error.textContent = "Enter a valid email";
      valid = false;
    } else if (field.id === "message" && input.value.trim().length < 10) {
      error.textContent = "Message must be at least 10 characters";
      valid = false;
    }
  });

  if (valid) {
    form.reset();
    successMsg.textContent = "Message sent successfully!";
  }
});
