function search() {
  // Hämtar värdet från sökfältet
  const searchInput = document.getElementById("searchInput").value;

  // Hämtar referens till listan för resultat
  const resultsList = document.getElementById("resultsList");
  resultsList.innerHTML = "";

  // Utför sökfunktionen med sökinmatningen
  const results = searchFunction(searchInput);

  // Loopar igenom resultaten och lägger till dem i resultatlistan
  results.forEach((result) => {
    const li = document.createElement("li");
    li.textContent = result;
    resultsList.appendChild(li);
  });
}

function searchFunction(searchInput) {
  // Hårdkodade resultat för exemplet
  const results = ["resultat 1", "resultat 2", "resultat 3"];

  // Filtrerar resultaten baserat på sökinmatningen (skiftlägesokänslig sökning)
  return results.filter((result) =>
    result.toLowerCase().includes(searchInput.toLowerCase())
  );
}
