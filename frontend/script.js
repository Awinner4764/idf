document.getElementById("registrationForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
  };

  const response = await fetch("https://international-diplomacy-forum-2025.netlify.app/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    document.getElementById("formMessage").classList.remove("hidden");
    form.reset();
  }
});
