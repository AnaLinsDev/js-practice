var coll = document.getElementsByClassName("collapsible");
var main = document.querySelector(".main");
var toshow =''
var i;

function toShow(){
for (i=0; i<3;i++){
    toshow +=
    `<button class="collapsible" onclick=(Collapse(${i}))>Open Section ${i+1}</button>
    <div class="content">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>`
}
main.innerHTML = toshow
}

function Collapse(i){
    var content = coll[i].nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
      coll[i].style.borderRadius = "0px"
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.borderRadius = "0px 0px 30px 30px"
      coll[i].style.borderRadius = "30px 30px 0px 0px"
    } 
  };

toShow()



