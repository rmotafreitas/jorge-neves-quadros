window.onload = async function () {
  let paints = await fetch("../json/paints.json")
    .then((response) => response.text())
    .then((data) => {
      return data;
    });
  paints = JSON.parse(paints);
  paints = paints.paints;

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

function apagar(position) {
  new client().removePaint(position);
  location.reload();
}

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
