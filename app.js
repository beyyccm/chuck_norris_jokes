const jokeEl = document.getElementById("joke");
const btn = document.getElementById("btn");
const statusEl = document.getElementById("status");

const API_URL = "https://api.chucknorris.io/jokes/random";

async function fetchJoke() {
  btn.disabled = true;
  statusEl.textContent = "Şaka getiriliyor...";

  try {
    const res = await fetch(API_URL, { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json();
    jokeEl.textContent = data.value;

    statusEl.textContent = "";
  } catch (err) {
    console.error(err);
    statusEl.textContent = "Şaka alınamadı. İnternet bağlantını kontrol edip tekrar dene.";
  } finally {
    btn.disabled = false;
  }
}

window.addEventListener("DOMContentLoaded", fetchJoke);
btn.addEventListener("click", fetchJoke);
