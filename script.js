var set = 0;
window.onresize = function(){
  document.getElementById("menu1").style.visibility = "hidden";
  document.getElementById("menu1").style.padding = "0px";
  set = 0;
}
document.getElementById("stripes").onclick = function(){
  if(set == 1){
    document.getElementById("menu1").style.visibility = "hidden";
    set = 0;
    document.getElementById("menu1").style.padding = "0px";
  }
  else{
    document.getElementById("menu1").style.visibility = "visible";
    set = 1;
    document.getElementById("menu1").style.padding = "120px";
  }
};
/**
if(typeof jQuery == undefined){
  alert("Wrong defined jQuery");
}
$("try").click(function(){
  alert("You clicked in stripes");
});
**/
