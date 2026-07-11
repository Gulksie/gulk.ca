const randomIDButton = document.getElementById("randomBlogButton");
randomIDButton.addEventListener("click", randomPage);

const posts = JSON.parse(document.getElementById("allPosts").textContent);
function randomPage() {
    window.location.href = posts[Math.floor(Math.random() * posts.length)];
}