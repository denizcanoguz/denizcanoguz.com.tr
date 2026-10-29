import { useSyncExternalStore } from "react";

// Shared site language. The home page and the navbar are separate React
// islands, so the choice lives in localStorage and a window event instead
// of React context.
export type Lang = "en" | "tr";

const STORAGE_KEY = "lang";
const EVENT = "lang-change";

function detect(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "tr") return stored;
  } catch (_) {}
  return navigator.language?.toLowerCase().startsWith("tr") ? "tr" : "en";
}

export function getLang(): Lang {
  if (typeof window === "undefined") return "en";
  return detect();
}

export function setLang(lang: Lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (_) {}
  document.documentElement.lang = lang;
  window.dispatchEvent(new Event(EVENT));
}

function subscribe(callback: () => void) {
  window.addEventListener(EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

export function useLang(): Lang {
  return useSyncExternalStore(subscribe, getLang, () => "en");
}
