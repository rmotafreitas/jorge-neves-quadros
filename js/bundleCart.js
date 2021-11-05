(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){(function (){
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

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../json/paints.json":3,"./client.js":2}],2:[function(require,module,exports){
class client {
  constructor() {
    if (localStorage.getItem("arrPaints")) {
      this.arrPaints = JSON.parse(localStorage.getItem("arrPaints"));
    } else {
      localStorage.setItem("arrPaints", JSON.stringify([]));
      this.arrPaints = [];
    }
  }

  addPaint(key) {
    this.arrPaints.push(key);
    localStorage.setItem("arrPaints", JSON.stringify(this.arrPaints));
  }

  removePaint(key) {
    const index = this.arrPaints.indexOf(key);
    console.log(index);
    if (index == -1) {
      return null;
    }
    this.arrPaints.splice(index, 1);
    localStorage.setItem("arrPaints", JSON.stringify(this.arrPaints));
  }

  getArrPaints() {
    return (this.arrPaints = JSON.parse(localStorage.getItem("arrPaints")));
  }
}

module.exports = {
  client,
};

},{}],3:[function(require,module,exports){
module.exports={
  "paints": [
    {
      "name": "Explosão De Sabores",
      "dimension": "60x50",
      "price": 250,
      "img": "../Images/Sevilha.jpeg"
    },
    {
      "name": "Caminhos Cruzados",
      "dimension": "60x40",
      "price": 200,
      "img": "../Images/CaminhosCruzados.jpeg"
    },
    {
      "name": "Liberdade",
      "dimension": "70x50",
      "price": 250,
      "img": "../Images/ExplosaoDeSabores.jpeg"
    },
    {
      "name": "Urbano II",
      "dimension": "120x120",
      "price": 380,
      "img": "../Images/UrbanoI.jpeg"
    },
    {
      "name": "Equilibrio",
      "dimension": "60x40",
      "price": 180,
      "img": "../Images/Equilibrio.jpeg"
    },
    {
      "name": "Paixão Segundo",
      "dimension": "60x50",
      "price": 250,
      "img": "../Images/PaixaoSegundo.jpeg"
    },
    {
      "name": "Urbano I",
      "dimension": "120x120",
      "price": 380,
      "img": "../Images/UrbanoII.jpeg"
    },

    {
      "name": "Sevilha",
      "dimension": "60x50",
      "price": 250,
      "img": "../Images/Liberdade.jpeg"
    },
    {
      "name": "Do Outro Lado",
      "dimension": "150x60",
      "price": 300,
      "img": "../Images/DoOutroLado.jpeg"
    },
    {
      "name": "As Cataratas",
      "dimension": "100x25",
      "price": 200,
      "img": "../Images/AsCataratas.jpeg"
    }
  ]
}

},{}]},{},[1]);
