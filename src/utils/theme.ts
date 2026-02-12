export type Theme = "Dark" | "Light";

export function toggleDarkTheme() {
  const html = document.documentElement;
  const savedTheme = localStorage.getItem("theme") as Theme | null;

  // If no saved theme, initialize from system
  if (!savedTheme) {
    const systemTheme: Theme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "Dark"
      : "Light";

    localStorage.setItem("theme", systemTheme);
    html.classList.toggle("dark", systemTheme === "Dark");
    return;
  }

  const nextTheme: Theme = savedTheme === "Dark" ? "Light" : "Dark";

  html.classList.toggle("dark", nextTheme === "Dark");
  localStorage.setItem("theme", nextTheme);
}

export function setDefaultTheme() {
  const html = document.documentElement;
  const savedTheme = localStorage.getItem("theme") as Theme | null;

  if (!savedTheme) {
    const systemTheme: Theme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "Dark"
      : "Light";

    html.classList.toggle("dark", systemTheme === "Dark");
    localStorage.setItem("theme", systemTheme);
    return;
  }

  html.classList.toggle("dark", savedTheme === "Dark");
}

export function getCurrentTheme(): Theme {
  const savedTheme = localStorage.getItem("theme") as Theme | null;

  if (savedTheme) return savedTheme;

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "Dark" : "Light";
}
