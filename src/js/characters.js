const API = "https://rickandmortyapi.com/api/character/";

($main = document.querySelector(".cards-content")), //var type DOM
  ($links = document.querySelector(".links")); //var type DOM

async function loadCharacter(url) {
  try {
    $main.innerHTML = `<div class="loader-container"><img class="loader" src="https://dioselyn.github.io/rick-and-morty-api/assets/img/loader.svg" alt="Loading..."></div>`;

    let response = await fetch(url),
      json = await response.json(),
      $template = "",
      $prevLink,
      $nextLink;

    //console.log(json);

    if (!response.ok)
      throw { status: response.status, statusText: response.statusText }; //catch error

    for (let i = 0; i < json.results.length; i++) {
      //console.log(json.results[i]);
      try {
        let response = await fetch(json.results[i].url),
          character = await response.json();
        //console.log(response, character);

        if (!response.ok)
          throw { status: response.status, statusText: response.statusText }; //catch error

        $template += `
                <article class="card">
                <div class="card-image">
                <img class="img-fluid" src="${character.image}" alt="${
          character.name
        }">
                <span class="badge-top">${character.origin.name}</span></div>
                
                <div class="card-body">
                <h3>${character.name}</h3>
                </div>
                <div class="card-footer">
                <span class="specie">${character.species}</span>
                <span class="${character.status.toLowerCase()}">${
          character.status
        }</span>
                </div>
                </article>
                `;
      } catch (err) {
        console.log(err);
        let message = err.statusText || "An error occurred";
        $template += `
               
               <p>Error ${err.status}: ${message}</p>
        
                `;
      }
    }
    $main.innerHTML = $template;
    //console.log(json.info.next);
    $prevLink = json.info.prev
      ? `<a href="${json.info.prev}">Previous ⏪</a>`
      : "";
    $nextLink = json.info.next ? `<a href="${json.info.next}">Next ⏩</a>` : "";
    $links.innerHTML = $prevLink + " " + $nextLink;
  } catch (err) {
    console.log(err);
    let message = err.statusText || "Character does not exist";
    $main.innerHTML = `
        
        <span class="error">Error ${err.status}: ${message}</span>
       
        `;
  }
}

//Load API
document.addEventListener("DOMContentLoaded", (event) => loadCharacter(API));
