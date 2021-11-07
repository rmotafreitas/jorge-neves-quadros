(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
(function (global){(function (){
const { client } = require("./client.js");
const { paints } = require("../json/paints.json");
window.onload = function () {
  let str = "";
  let div = document.getElementById("items2");
  for (i = 0; i < paints.length; i++) {
    str += `<div class="card">
    <img src="${paints[i].img}" alt="Paint" style="width: 100%" />  
    <h3 style="  text-align: center">${paints[i].name}</h3>
    <p style="  text-align: center" class="price">${paints[i].price}€</p>
    <p style="  text-align: center"><a href="#" onclick="initOnClick(${i})">Adicionar</a></p>
  </div>`;
  }
  div.innerHTML = str;
};

global.initOnClick = function (key) {
  $(".alert").addClass("show");
  $(".alert").removeClass("hide");
  $(".alert").addClass("showAlert");
  setTimeout(function () {
    $(".alert").removeClass("show");
    $(".alert").addClass("hide");
  }, 5000);

  $(".close-btn").click(function () {
    $(".alert").removeClass("show");
    $(".alert").addClass("hide");
  });

  buy(key);
};

function buy(paint) {
  const cart = new client();
  cart.addPaint(paint);
}

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../json/paints.json":3,"./client.js":1}],3:[function(require,module,exports){
module.exports={
  "paints": [
    {
      "name": "Explosão De Sabores",
      "dimension": "70x50",
      "price": 275,
      "img": "../Images/ExplosaoDeSabores.jpg",
      "arrImg": [
        "../Images/ExplosaoDeSabores.jpg",
        "../Images/ExplosaoDeSabores1.jpg"
      ]
    },
    {
      "name": "Caminhos Cruzados",
      "dimension": "60x40",
      "price": 225,
      "img": "../Images/CaminhosCruzados.jpg",
      "arrImg": [
        "../Images/CaminhosCruzados.jpg",
        "../Images/CaminhosCruzados1.jpg",
        "../Images/CaminhosCruzados2.jpg"
      ]
    },
    {
      "name": "Liberdade",
      "dimension": "60x50",
      "price": 275,
      "img": "../Images/Liberdade.jpg",
      "arrImg": ["../Images/Liberdade.jpg", "../Images/Liberdade1.jpg"]
    },
    {
      "name": "Urbano II",
      "dimension": "120x120",
      "price": 405,
      "img": "../Images/UrbanoII.jpg",
      "arrImg": ["../Images/UrbanoII.jpg", "../Images/UrbanoII1.jpg"]
    },
    {
      "name": "Equilibrio",
      "dimension": "60x40",
      "price": 205,
      "img": "../Images/Equilibrio.jpg",
      "arrImg": ["../Images/Equilibrio.jpg", "../Images/Equilibrio1.jpg"]
    },
    {
      "name": "Paixão Segundo",
      "dimension": "60x50",
      "price": 275,
      "img": "../Images/PaixaoSegundo.jpg",
      "arrImg": ["../Images/PaixaoSegundo.jpg", "../Images/PaixaoSegundo1.jpg"]
    },
    {
      "name": "Urbano I",
      "dimension": "120x120",
      "price": 405,
      "img": "../Images/UrbanoI.jpg",
      "arrImg": ["../Images/UrbanoI.jpg", "../Images/UrbanoI1.jpg"]
    },

    {
      "name": "Sevilha",
      "dimension": "60x50",
      "price": 275,
      "img": "../Images/Sevilha.jpg",
      "arrImg": ["../Images/Sevilha.jpg", "../Images/Sevilha1.jpg"]
    },
    {
      "name": "Do Outro Lado",
      "dimension": "150x60",
      "price": 325,
      "img": "../Images/DoOutroLado.jpg",
      "arrImg": ["../Images/DoOutroLado.jpg", "../Images/DoOutroLado1.jpg"]
    },
    {
      "name": "As Cataratas",
      "dimension": "100x25",
      "price": 225,
      "img": "../Images/AsCataratas.jpg",
      "arrImg": ["../Images/AsCataratas.jpg", "../Images/AsCataratas1.jpg"]
    }
  ]
}

},{}]},{},[2]);
