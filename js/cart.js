const { client } = require("./client.js");
const { paints } = require("../json/paints.json");

global.apagar = function (position) {
  new client().removePaint(position);
  location.reload();
};

window.onload = function () {
  const paintings = new client().getArrPaints();
  const p = document.getElementById("p");
  let pstring = "";
  for (c = 0; c < paintings.length; c++) {
    //console.log(paints[paintings[c]]);
    pstring += ` <div class="Cart-Items">
   <div class="image-box">
     <img src="${paints[paintings[c]].img}" style="height: 120px" />
   </div>
   <div class="about">
     <h1 class="title">${paints[paintings[c]].name}</h1>
     <h3 class="subtitle">${paints[paintings[c]].dimension}cm</h3>
    
   </div>
   <div class="prices">
     <div class="amount">${paints[paintings[c]].price}$</div>
     <div class="remove" onclick="apagar(${paintings[c]})" > <u>Remove</u></div>
   </div>
 </div>`;
  }
  p.innerHTML = pstring;
  let price = 0;
  for (c = 0; c < paintings.length; c++) {
    price += paints[paintings[c]].price;
  }
  document.getElementById("price").innerHTML = price + "€";
  document.getElementById("itemsQ").innerHTML = paintings.length + " items";

  document.getElementById("cartcontainer").style = `height: ${
    300 + 200 * paintings.length
  }px`;
};
