// Firebase config — replace these values with your own from the Firebase console
const firebaseConfig = {
  apiKey: "REPLACE_WITH_YOUR_API_KEY",
  authDomain: "REPLACE_WITH_YOUR_AUTH_DOMAIN",
  projectId: "REPLACE_WITH_YOUR_PROJECT_ID",
};

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Call this on every protected page — redirects to login if not signed in
export function requireAuth() {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      window.location.href = "/PCC-Analyst-Tools/index.html";
    }
  });
}

// Wire up the logout button if present on the page
export function setupLogout() {
  const btn = document.getElementById("logout-btn");
  if (btn) {
    btn.addEventListener("click", () => {
      signOut(auth).then(() => {
        window.location.href = "/PCC-Analyst-Tools/index.html";
      });
    });
  }
}
