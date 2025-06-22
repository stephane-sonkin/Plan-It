// Récupère la valeur d'un paramètre dans l'URL
function getQueryParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

// Enregistre une participation à un événement dans le localStorage
function saveParticipation(eventId) {
  let participations = JSON.parse(
    localStorage.getItem("participations") || "[]"
  );
  if (!participations.includes(eventId)) {
    participations.push(eventId);
    localStorage.setItem("participations", JSON.stringify(participations));
  }
}

// Charge un fichier JSON depuis une URL (Promise)
function loadJSON(url) {
  return fetch(url).then((res) => {
    if (!res.ok) throw new Error("Erreur de chargement");
    return res.json();
  });
}

// Ajoute dynamiquement la bannière utilisateur en haut du body
function insertUserBanner() {
  const banner = document.createElement("div");
  banner.className = "user-banner";
  banner.textContent = "Connecté en tant que Stéphane Étudiant";
  document.body.insertBefore(banner, document.body.firstChild);
}

document.addEventListener("DOMContentLoaded", insertUserBanner);
