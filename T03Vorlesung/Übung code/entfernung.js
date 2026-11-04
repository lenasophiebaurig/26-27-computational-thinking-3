const fs = require("fs"); // ganz oben

const roh = fs.readFileSync("orte.json", "utf8");
const orte = JSON.parse(roh);

// Berechnet die Entfernung zwischen zwei Orten (Haversine-Formel)
function entfernung(ortA, ortB) {
  const R = 6371; // Erdradius in km
  const rad = (grad) => (grad * Math.PI) / 180;

  const dLat = rad(ortB.lat - ortA.lat);
  const dLon = rad(ortB.lon - ortA.lon);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(rad(ortA.lat)) * Math.cos(rad(ortB.lat)) * Math.sin(dLon / 2) ** 2;

  const km = 2 * R * Math.asin(Math.sqrt(a));

  console.log(`${ortA.name} ist ${km.toFixed(1)} km weit von ${ortB.name} entfernt.`);
  return km;
}

// Beispiele
entfernung(orte[3], orte[2]); // Stuttgart – Schwäbisch Gmünd
entfernung(orte[0], orte[1]); // Nullinsel – Prüfpunkt Ost
entfernung(orte[3], orte[7]); // Stuttgart – NYC