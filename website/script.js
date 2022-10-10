const button = document.getElementById("button");

button.addEventListener("click", () => {
    const http = new XMLHttpRequest();
    const url = "http://localhost:8080/";
    http.open("GET", url);
    http.onload = () => {
        const data = JSON.parse();
        console.log("data: ", data);
    };
    http.send();
});
