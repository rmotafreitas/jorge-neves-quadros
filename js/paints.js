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
