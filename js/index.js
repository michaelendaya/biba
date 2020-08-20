
function validateForm() {
    var w = document.forms["myForm"]["Registration"].value;
    var x = document.forms["myForm"]["eventType"].value;
    var y = document.forms["myForm"]["date1"].value;
    var z = document.forms["myForm"]["date2"].value;
    var a = document.forms["myForm"]["postingDate"].value;
 
    if (x == "" || x == null,w == "" || w == null,y == "" || y == null,z == "" || z == null,a == "" || a == null) {
      alert("Name must be filled out");
     
    
    }else 
    alert("Complete");
  }