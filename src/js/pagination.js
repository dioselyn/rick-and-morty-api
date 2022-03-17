//Next Previous Anchor
document.addEventListener("click", event =>  {
    if(event.target.matches(".links a")) {
        event.preventDefault();
        loadCharacter(event.target.getAttribute("href"));
    }
});