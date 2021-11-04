window.onload = async function () {
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
  const id = $_GET["id"];
  document.getElementById("img").src = paints[id].img;
  document.getElementById("name").innerHTML = paints[id].name;
  document.getElementById(
    "dimension"
  ).innerHTML = `Dimensão: ${paints[id].dimension}cm`;
  document.getElementById("price").innerHTML = `Preço: ${paints[id].price}€`;
};
