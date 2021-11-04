window.onload = async function () {
  //? Get paints info from json
  let paints = await fetch("../json/paints.json")
    .then((response) => response.text())
    .then((data) => {
      return data;
    });
  paints = JSON.parse(paints);
  paints = paints.paints;

  const cart = new client();
  console.log(cart.getArrPaints());
  let str = "<h1>Your Order</h1>\n";
  let div = document.getElementById("items");
  let total = 0;
  for (i = 0; i < cart.getArrPaints().length; i++) {
    total += paints[parseInt(cart.getArrPaints()[i])].price;
    str += `<div class="cart-item" id="item">
    <img src=${paints[parseInt(cart.getArrPaints()[i])].img} />
    <p>${paints[parseInt(cart.getArrPaints()[i])].name}</p>
    <p>${paints[parseInt(cart.getArrPaints()[i])].price}€</p>
    <button id="remove" class="remove" onclick="removePaint(${
      cart.getArrPaints()[i]
    })">
      <i class="fas fa-trash fa-2x"></i>
    </button> 
  </div>
  <br />`;
  }
  document.getElementById("total").innerHTML = `Total: &nbsp; &nbsp; ${total}€`;
  div.innerHTML = str;
};

function removePaint(paint) {
  const cart = new client();
  cart.removePaint(paint);
  location.reload();
}

//? Class CLient to work on local Storage DB ez
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
