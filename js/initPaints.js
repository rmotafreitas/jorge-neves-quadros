window.onload = async function () {
  //?Require paints
  let paints = await fetch("../json/paints.json")
    .then((response) => response.text())
    .then((data) => {
      return data;
    });
  paints = JSON.parse(paints);
  paints = paints.paints;
  let str = "";
  let div = document.getElementById("items2");
  for (i = 0; i < paints.length; i++) {
    str += `<div class="card">
    <img src="${paints[i].img}" alt="Paint" style="width: 100%" />  
    <h3 style="  text-align: center">${paints[i].name}</h3>
    <p style="  text-align: center" class="price">${paints[i].price}€</p>
    <p style="  text-align: center"><a href="details.html?id=${i}">Detalhes</a></p>
  </div>`;
  }
  div.innerHTML = str;
};
