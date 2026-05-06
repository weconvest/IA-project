document.getElementById("name").addEventListener("input", function() {
    document.getElementById("output").innerText = "Hello " + this.value;
});

document.getElementById("btn").addEventListener("click", function() {
    document.getElementById("clickText").innerText = "Success!";
});

document.getElementById("box").addEventListener("mouseover", function() {
    this.innerText = "This Faculty is in Zamalek, Egypt";
});

document.getElementById("box").addEventListener("mouseout", function() {
    this.innerText = "Hover over me";
});
