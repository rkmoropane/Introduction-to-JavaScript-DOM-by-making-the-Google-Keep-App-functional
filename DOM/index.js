// import "./style.css";

document.getElementById("app").innerHTML = `
<h1>Zaio Playground</h1>
<div>
 Tets and play around with concepts here :)
</div>
`;

// create a paragraph Element, set some Text, add to document
const p = document.createElement("p");
p.innerHTML = "I am a paragraph from Javascript";
document.body.append(p);
// change background of document, and color of paragraph created
document.body.style.background = "black";
p.style.color = "white";
p.style.cursor = "pointer";

// addEventListener to paragraph click
p.addEventListener("click", () => {
    alert(p.innerHTML);
});

