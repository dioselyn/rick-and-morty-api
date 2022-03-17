//Input event search
document.addEventListener("keypress", async event => {
    if(event.target.matches("#search")) {
        //console.log(event.keyCode);
        if(event.key === "Enter") {
            try {
                let query = event.target.value;
                //console.log(query)
                message = "Character does not exist";
                loadCharacter(`${API}?name=${query}`);
   
            } catch (error) {
               console.log(err);
               let message = "Character does not exist";
               $main.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
            }
        }
    }
   });