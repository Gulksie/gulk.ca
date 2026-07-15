const postsList = document.getElementById("postsList");
const tagsList = document.getElementById("tagsList");
let tags = [];
let filteredTags = [];

// construct tags array
for (const child of postsList.children) {
    for (const tag of child.classList) {
        if (!(tags.includes(tag))) {
            tags.push(tag);
        }
    }
}

// now make a filter element for each tag
for (const tag of tags) {
    var btn = document.createElement("button");
    btn.id=tag + "Button";
    btn.innerHTML = tag;
    btn.onclick = tagButtonClicked;
    tagsList.appendChild(btn);
}

function tagButtonClicked(e) {
    let clickedBtn = e.target;
    let tag = clickedBtn.id.slice(0, -6);

    // add/remove tag from list of filters
    if (filteredTags.includes(tag)) {
        index = filteredTags.indexOf(tag);
        filteredTags.splice(index, 1);
        clickedBtn.classList.remove("clicked");
    } else {
        filteredTags.push(tag);
        clickedBtn.classList.add("clicked");
    }

    // now change visibility of each element according to filters
    if (filteredTags.length == 0) {
        for (const child of postsList.children) {
            child.style.display = "";  // reset display and (hopefully?) inherit from parent again
        }
    } else {
        for (const child of postsList.children) {
            // check if both arrays have matching elements
            // i could do this with for loops but that felt ugly and slow
            // stack overflow to the rescue in the year of our lord 2026
            // https://stackoverflow.com/questions/16312528/check-if-an-array-contains-any-element-of-another-array-in-javascript
            if (Array.from(child.classList).some(r=> filteredTags.includes(r))) {
                child.style.display = "";
            } else {
                child.style.display = "none";
            }
        }
    }
}