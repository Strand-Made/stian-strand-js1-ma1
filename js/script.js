
//question 1
const cat = {
    complain: function() {
        console.log("Meow");
    }
}
cat.complain();

//question 2
const heading = document.querySelector("h3");
heading.innerHTML = "Updated Heading";

//question 3
heading.style = "font-size: 2em";

//question 4
heading.className = "subheading";

//question 5
const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);

for(let i=0; i <paragraphs.length; i++) {
    paragraphs[i].style = "color: red";
}

//question 6
const resultContainer = document.querySelector(".results")
console.dir(resultContainer);
resultContainer.innerHTML = `<p>New Paragraph</p>`;
resultContainer.style = `background-color: yellow`;


const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
    
];




//question 7 
function loopList(list) {
    for(let i=0; i <list.length; i++) {
        console.log(list[i].name);
    }
}

loopList(cats);

// question 8

function createCats(cats) {

    const container = document.querySelector(".cat-container")
    
    let html = "";
    

    for(let i=0; i <cats.length; i++) {
        let age = "<p>Age Unknown</p>";
        if (cats[i].age ) {
            age = cats[i].age;
        }
        
        html += `<div class="cats">
        <h5>${cats[i].name}</h5>
        <p>${age}</p>
        </div>
        `;
        
    }

    
        
container.innerHTML = html;    
return html; 

}
createCats(cats);

