/*
  Deployment fallback for environments that block third-party CDN scripts.
  Alpine markup remains canonical; this only mirrors Batch 1 interactions when
  window.Alpine is unavailable.
*/

document.addEventListener("DOMContentLoaded", () => {
  if (window.Alpine) return;

  const body = document.body;
  const shell = body.matches("[x-data*='locale']");
  const state = {
    locale: shell ? "ar" : "en",
    mobileNav: false,
    profileOpen: false,
    walletOpen: false,
  };

  const setVisible = (element, visible) => {
    element.removeAttribute("x-cloak");
    if (visible) {
      element.style.removeProperty("display");
    } else {
      element.style.setProperty("display", "none", "important");
    }
  };

  const showExpression = (expression, visible) => {
    document.querySelectorAll("[x-show]").forEach((element) => {
      if (element.getAttribute("x-show") === expression) setVisible(element, visible);
    });
  };

  const renderShell = () => {
    if (!shell) return;

    const isArabic = state.locale === "ar";
    document.documentElement.lang = state.locale;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    body.dir = isArabic ? "rtl" : "ltr";

    showExpression("locale === 'ar'", isArabic);
    showExpression("locale === 'en'", !isArabic);
    showExpression("mobileNav", state.mobileNav);
    showExpression("profileOpen", state.profileOpen);
    showExpression("walletOpen", state.walletOpen);

    const sidebar = document.querySelector("aside");
    if (sidebar) {
      sidebar.classList.toggle("translate-x-0", state.mobileNav);
      sidebar.classList.toggle("translate-x-full", !state.mobileNav && isArabic);
      sidebar.classList.toggle("-translate-x-full", !state.mobileNav && !isArabic);
    }
  };

  const renderSavingButton = (button, saving) => {
    const scope = button.closest("[x-data*='saving']");
    if (!scope) return;
    const spinner = scope.querySelector("[x-show='saving']");
    const label = scope.querySelector("[x-text]");
    if (spinner) setVisible(spinner, saving);
    if (label) label.textContent = scope.dir === "rtl" ? (saving ? "جاري الحفظ…" : "جرّب التحميل") : (saving ? "Saving…" : "Test loading");
  };

  document.querySelectorAll("[x-data*='saving']").forEach((scope) => {
    const button = Array.from(scope.querySelectorAll("button")).find((item) => item.getAttribute("@click")?.includes("saving"));
    if (button) renderSavingButton(button, false);
  });

  document.querySelectorAll("button").forEach((button) => {
    const action = button.getAttribute("@click");
    if (!action) return;

    button.addEventListener("click", () => {
      if (action.includes("locale =")) state.locale = state.locale === "ar" ? "en" : "ar";
      if (action === "mobileNav = true") state.mobileNav = true;
      if (action === "mobileNav = false") state.mobileNav = false;
      if (action.includes("walletOpen = !walletOpen")) state.walletOpen = !state.walletOpen;
      if (action.includes("profileOpen = !profileOpen")) state.profileOpen = !state.profileOpen;
      if (action.includes("saving = !saving")) {
        const saving = button.dataset.saving !== "true";
        button.dataset.saving = String(saving);
        renderSavingButton(button, saving);
      }
      renderShell();
    });
  });

  document.querySelectorAll("[x-cloak]").forEach((element) => setVisible(element, false));
  renderShell();
});
