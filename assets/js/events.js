document.addEventListener("DOMContentLoaded", () => {
  fetch("data/events.json")
    .then((response) => response.json())
    .then((data) => {
      const events = Array.isArray(data) ? data : data.events || [];
      const eventsList = document.getElementById("events-list");
      if (!events.length) {
        eventsList.innerHTML = "<p>Aucun événement trouvé.</p>";
        return;
      }
      eventsList.innerHTML = events
        .map(
          (event) => `
                <div class="event-card">
                    <img src="${
                      event.image || "assets/img/default.jpg"
                    }" alt="Image de l'événement" class="event-img" style="width:100%;max-height:180px;object-fit:cover;border-radius:12px 12px 0 0;margin-bottom:1rem;">
                    <h2>${event.titre}</h2>
                    <p><strong>Date :</strong> ${event.date}</p>
                    <p><strong>Lieu :</strong> ${event.lieu}</p>
                    <a class="btn" href="event-details.html?id=${
                      event.id
                    }">Voir plus</a>
                </div>
            `
        )
        .join("");
    })
    .catch(() => {
      document.getElementById("events-list").innerHTML =
        "<p>Erreur lors du chargement des événements.</p>";
    });
});
