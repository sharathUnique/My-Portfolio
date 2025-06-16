
function validate() {
    // validate form here
    alert("I am not doing any vlidation now!!! \nIt will be implemented soon \nWe are redirecting to main page \nThank you for your patience ");
    
    }

function onchangeName(){
    // validate username here 
    // alert("name changed");
   
}

function onchangePassword(){
     // validate password  here 
    // alert("password changed");
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

