// has to reach out to localstorage using the same key that you put the information
// convert if from string to array
// make elements, put the info in it, and put it on the page.
// addeventlistener to clear button, and on click, clear localstorage

const list = document.getElementById("highscores-list");
const clearBtn = document.getElementById("clear-button");

for (let i = 0; i < localStorage.length; i++) {
    const name = localStorage.key(i);
    const score = localStorage.getItem(name);

    console.log(name);
    console.log(score);
    
    if (name && score) {
        const listName = document.createElement("li");
        listName.textContent = `${name} your score was: ${score}.`
        list.appendChild(listName);
    }
};

clearBtn.addEventListener("click", function() {
    localStorage.clear();
})