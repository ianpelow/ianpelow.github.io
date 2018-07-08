// MODAL

var popup = document.getElementById('myModal');
         var myBytton = document.getElementById("btn");
         var span = document.getElementsByClassName("end")[0];
         myBytton.onclick = function() {
            popup.style.display = "block";
         }
         span.onclick = function() {
            popup.style.display = "none";
         }
         window.onclick = function(event) {
            if (event.target == popup) {
               popup.style.display = "none";
            }
         }

// DROPDOWN

         /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {

  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
}

//CAROUSEL






