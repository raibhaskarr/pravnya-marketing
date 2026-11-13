document.getElementById("login").addEventListener("submit", async (e) => {
  e.preventDefault();
  const error = document.getElementById("error");
  const button = e.target.querySelector("button");
  button.disabled = true;
  error.hidden = true;
  try {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Requested-With": "fetch" },
      body: JSON.stringify({ password: document.getElementById("password").value }),
    });
    if (res.ok) return location.replace("/");
    error.textContent = (await res.json().catch(() => ({}))).error || "Couldn't sign in";
    error.hidden = false;
  } finally {
    button.disabled = false;
  }
});
