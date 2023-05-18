async function getExercise() {
	// Hämtar söktermen från input-fältet
	const searchTerm = document.getElementById("searchInput");
	console.log("searchTerm: " + searchTerm.value);
  
	// Konstruerar URL:en för API-anropet baserat på söktermen
	const url = `https://exercisedb.p.rapidapi.com/exercises/name/${searchTerm}`;
  
	// Definierar HTTP-anropsalternativen, inklusive API-nycklar och headers
	const options = {
	  method: 'GET',
	  headers: {
		'X-RapidAPI-Key': 'df23c1b9bemshd0a06916ab4dce9p156a26jsndf26734c71a6',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	  }
	};
  
	try {
	  // Utför API-anropet med fetch-funktionen
	  const response = await fetch(url, options);
	  const result = await response.text();
  
	  // Omvandlar API-svaret till en JSON-array
	  let array = JSON.parse(result);
	  let output = [];
  
	  // Itererar över arrayen och filtrera övningarna baserat på söktermen
	  for (let i = 0; i < array.length; i++) {
		if (array[i].bodyPart == searchTerm.value) {
		  output.push(array[i]);
		}
	  }
  
	  // Skriv ut resultatet i konsolen som en JSON-sträng
	  console.log(JSON.stringify(output));
	} catch (error) {
	  console.error(error);
	}
  }
  
  // Hämtar sökknappen från DOM-trädet
  const searchButton = document.getElementById("searchButton");
  
  // Lägger till en händelselyssnare för att lyssna på klickhändelser på sökknappen
  searchButton.addEventListener("click", () => {
	// Anropar getExercise-funktionen när sökknappen klickas på
	getExercise();
  });
  