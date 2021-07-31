var coll = document.getElementsByClassName("collapsible");
coll.item(0).addEventListener("click", function() {
    this.classList.toggle("active");
    this.innerHTML = "P<br>O<br>P";
    var content = this.nextElementSibling;
    var cont2 = (content.nextElementSibling).nextElementSibling;
    var cont3 = (cont2.nextElementSibling).nextElementSibling;
    if (content.style.maxWidth){
      content.style.maxWidth = null;
      document.getElementById("header2").innerHTML = "P<br>L<br>U<br>S";
        document.getElementById("header3").innerHTML = "P<br>R<br>E<br>M<br>I<br>U<br>M";
    } else {
      content.style.maxWidth = 350 + "px";
        cont2.style.maxWidth = null;
        cont3.style.maxWidth = null;
        document.getElementById("header2").innerHTML = "";
        document.getElementById("header3").innerHTML = "";
    } 
  });
  coll.item(1).addEventListener("click", function() {
    this.classList.toggle("active");
    this.innerHTML = "P<br>L<br>U<br>S";
    var content2 = this.nextElementSibling;
    var cont2_2 = (content2.nextElementSibling).nextElementSibling;
    var cont3_2 = (content2.previousElementSibling).previousElementSibling;
    if (content2.style.maxWidth){
      content2.style.maxWidth = null;
      document.getElementById("header1").innerHTML = "P<br>O<br>P";
        document.getElementById("header3").innerHTML = "P<br>R<br>E<br>M<br>I<br>U<br>M";
    
    } else {
      content2.style.maxWidth = 350 + "px";
      cont2_2.style.maxWidth = null;
      cont3_2.style.maxWidth = null;
      document.getElementById("header1").innerHTML = "";
        document.getElementById("header3").innerHTML = "";
    } 
  });
  coll.item(2).addEventListener("click", function() {
    this.classList.toggle("active");
    this.innerHTML = "P<br>R<br>E<br>M<br>I<br>U<br>M";
    var content3 = this.nextElementSibling;
    var cont2_3 = (content3.previousElementSibling).previousElementSibling;
    var cont3_3 = (cont2_3.previousElementSibling).previousElementSibling;
    if (content3.style.maxWidth){
      content3.style.maxWidth = null;
      document.getElementById("header2").innerHTML = "P<br>L<br>U<br>S";
        document.getElementById("header1").innerHTML = "P<br>O<br>P";
    
    } else {
      content3.style.maxWidth = 350 + "px";
      cont2_3.style.maxWidth = null;
        cont3_3.style.maxWidth = null;
        document.getElementById("header2").innerHTML = "";
        document.getElementById("header1").innerHTML = "";
    } 
  });
