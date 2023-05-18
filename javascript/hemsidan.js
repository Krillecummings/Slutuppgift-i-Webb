

// const apiKey = 'a6d8e5b18c634ced826448df91da3c32';
// const apiUrl = `https://newsapi.org/v2/top-headlines?q=gym&apiKey=${apiKey}`;

// function getNews(){
//   fetch(apiUrl)
//     .then(response => response.json())
//     .then(data => {
//       data.articles.forEach(article => {
//         const articleDiv = document.createElement('div');
//         articleDiv.className = 'article';

//         const title = document.createElement('h2');
//         title.textContent = article.title;

//         const author = document.createElement('p');
//         author.textContent = `By ${article.author}`;

//         const description = document.createElement('p');
//         description.textContent = article.description;

//         const url = document.createElement('a');
//         url.href = article.url;
//         url.textContent = 'Read More';

//         articleDiv.appendChild(title);
//         articleDiv.appendChild(author);
//         articleDiv.appendChild(description);
//         articleDiv.appendChild(url);

//         document.getElementById('news-container').appendChild(articleDiv);
//       });
//     })
//     .catch(error => console.error(error));
//   }
//     function search() {
    
//       const searchInput = document.getElementById("searchInput").value;
    
    
//       const resultsList = document.getElementById("resultsList");
//       resultsList.innerHTML = "";

//       const results = searchFunction(searchInput);
//       results.forEach((result) => {
//         const li = document.createElement("li");
//         li.textContent = result;
//         resultsList.appendChild(li);
//       });
//     }
  
//   function searchFunction(searchInput) {
//     const results = ["result 1", "result 2", "result 3"];
//     return results.filter((result) =>
//       result.toLowerCase().includes(searchInput.toLowerCase())
//     );
//   }

async function getExercise(){
const searchTerm = document.getElementById("searchInput") 
console.log("searchTerm: " + searchTerm.value);
const url = `https://exercisedb.p.rapidapi.com/exercises/name/${searchTerm}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'df23c1b9bemshd0a06916ab4dce9p156a26jsndf26734c71a6',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};
try {
	const response = await fetch(url, options);
	const result = await response.text();
  let array = JSON.parse(result);
  let output = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].bodyPart == searchTerm.value) {
      output.push(array[i]);
    }
  }
	console.log(JSON.stringify(output));
} catch (error) {
	console.error(error);
}

}

const searchButton = document.getElementById("searchButton")
searchButton.addEventListener("click", () => {
  getExercise()
})

