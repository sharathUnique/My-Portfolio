
function validate() {
    // validate form here
    alert("submit clicked");
    
    }

function onchangeName(){
    // validate username here 
    alert("name changed");
   
}

function onchangePassword(){
     // validate password  here 
    alert("password changed");
}

function showDetails(){
    alert("show details clicked");
    const contactDiv = document.getElementById("contId");
     if (contactDiv.style.display === "none" || contactDiv.style.display === "") {
    contactDiv.style.display = "block"; // Show it
  } else {
    contactDiv.style.display = "none"; // Hide it
  }
}

