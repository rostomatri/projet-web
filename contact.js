const Inputs = document.querySelectorAll("input");

Inputs.forEach((input) => {
  input.required = true;
});

const numberField = document.getElementById("myNumberField");

const destination = document.getElementById("destination");

const dateInput = document.getElementById("dateInput");

const heuredepart = document.getElementById("heuredepart");

const heurearrivee = document.getElementById("heurearrivee");


numberField.addEventListener("input", function () {
  this.value = this.value.replace(/\D/g, "");

});


document.getElementById("myButton").addEventListener("click", function() {

  if (numberField.value==="")
  {
    var displayText = document.getElementById("displayText");
    displayText.style.display = "block";

    setTimeout(function() {
      displayText.style.display = "none";;
    }, 4000);
  }

  if (dateInput.value==="" )
  {
    var displayText1 = document.getElementById("displayText1");
    displayText1.style.display = "block";

    setTimeout(function() {
      displayText1.style.display = "none";;
    }, 4000);
  }

   else if ( dateInput.value <  new Date().toISOString().split("T")[0] )
  {
    var displayText4 = document.getElementById("displayText4");
    displayText4.style.display = "block";

    setTimeout(function() {
      displayText4.style.display = "none";;
    }, 4000);
  }

   if (destination.value==="")
  {
    var displayText2 = document.getElementById("displayText2");
    displayText2.style.display = "block";

    setTimeout(function() {
      displayText2.style.display = "none";;
    }, 4000);
  }

  if (heuredepart.value==="" || heurearrivee.value ==="" )
  {
    var displayText3 = document.getElementById("displayText3");
    displayText3.style.display = "block";

    setTimeout(function() {
      displayText3.style.display = "none";;
    }, 4000);
  }

 else if (heuredepart.value > heurearrivee.value )
 {
  var displayText5 = document.getElementById("displayText5");
  displayText5.style.display = "block";

  setTimeout(function() {
    displayText5.style.display = "none";;
  }, 4000);
}

});

function validateDateInput(input) {
    var currentDate = new Date().toISOString().split("T")[0];
    input.min = currentDate;
  }

