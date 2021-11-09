//const { paints } = require("../json/paints.json");

window.onload = async function () {
  //?Require paints
  let paints = await fetch("../json/paints.json")
    .then((response) => response.text())
    .then((data) => {
      return data;
    });
  paints = JSON.parse(paints);
  paints = paints.paints;

  var parts = window.location.search.substr(1).split("&");
  var $_GET = {};
  for (var i = 0; i < parts.length; i++) {
    var temp = parts[i].split("=");
    $_GET[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
  }
  var paintID = $_GET["id"];
  const ProductImg = document.getElementById("ProductImg");
  ProductImg.src = paints[paintID].img;

  const imgs = document.getElementById("imgs");
  let strImgs = "";

  for (i = 0; i < paints[paintID].arrImg.length; i++) {
    strImgs += `<div class="small-img-col">
    <img
      src="${paints[paintID].arrImg[i]}"
      alt=""
      width="100%"
      class="small-img"
    />
  </div>`;
  }
  imgs.innerHTML = strImgs;
  document.getElementById("nameP").innerHTML = paints[paintID].name;
  document.getElementById("nameH").innerHTML = paints[paintID].name;
  document.getElementById("price").innerHTML = paints[paintID].price;
};
