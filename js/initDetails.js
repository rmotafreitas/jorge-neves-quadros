window.onload = async function () {
  //?Require paints from json file
  let paints = await fetch("../json/paints.json")
    .then((response) => response.text())
    .then((data) => {
      return data;
    });
  paints = JSON.parse(paints);
  paints = paints.paints;

  //?Initialize _$GET system in js
  var parts = window.location.search.substr(1).split("&");
  var $_GET = {};
  for (var i = 0; i < parts.length; i++) {
    var temp = parts[i].split("=");
    $_GET[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
  }

  //?Get the info from the "Database.json" about the paint, passed by reference ID in _$GET
  const paintID = $_GET["id"];
  const paint = paints[paintID];

  //? Put the primary paint image
  const ProductImg = document.getElementById("ProductImg");
  ProductImg.src = paint.img;

  //? Put the other mini images
  const imgs = document.getElementById("imgs");
  let strImgs = "";
  for (i = 0; i < paint.arrImg.length; i++) {
    strImgs += `<div class="small-img-col">
    <img
      src="${paint.arrImg[i]}"
      alt=""
      width="100%"
      class="small-img"
      onclick="{ProductImg.src = this.src}"
    />
  </div>`;
  }
  imgs.innerHTML = strImgs;

  //?Update the info on the side
  document.getElementById("nameP").innerHTML = paint.name;
  document.getElementById("nameH").innerHTML = paint.name;
  document.getElementById("price").innerHTML = paint.price;
  document.getElementById("width").innerHTML = paint.size.width;
  document.getElementById("height").innerHTML = paint.size.height;
};
