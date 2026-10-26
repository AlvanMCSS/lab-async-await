// Write your code here!

async function getPosts() {
    const postList = document.querySelector("#post-list");

    try {
        // Get all posts from the API
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        // Check if the request worked
        if (!response.ok) {
            throw new Error("Failed to fetch posts");
        }

        // Convert the response into JavaScript data
        const posts = await response.json();

        // Loop through the posts and display them
        posts.forEach(function(post) {
            const li = document.createElement("li");

            const title = document.createElement("h3");
            title.textContent = post.title;

            const body = document.createElement("p");
            body.textContent = post.body;

            li.appendChild(title);
            li.appendChild(body);
            postList.appendChild(li);
        });
    } catch (error) {
        console.error("Error loading posts:", error);
    }
}

getPosts();
