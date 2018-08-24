$(document).ready(function() {
  $(".snow").hide();
  $("#name").focus();
 
});

$('button').click(function(){
   $(".snow").show();
  $('button').hide();
  $('input').hide();
document.body.style.backgroundImage="url('img/rt.jpg')";
  document.getElementById('Greeting').innerText="Happy Raksha Bandan" + "\n" + "Stay Blessed";
  document.getElementById('notes').innerText="I jst wnt 2 let u knw u mean d world 2 me u were always there, dat shows how much u really care" + "\n" + "I feel blessed having a brother jst lyk u..";
  document.getElementById('blessed').innerText="With" + "Love\n" + "Geet";
  var Yourname= document.getElementById('name').value;
  
   document.getElementById('yourname').innerText='MY Dear '+ Yourname + ',';
  });

