window.onload = async function () {
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
    <p style="  text-align: center"><a href="#" onclick="initOnClick(${i})">Adicionar</a></p>
  </div>`;
  }
  div.innerHTML = str;
};

function initOnClick(key) {
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
    const index = this.arrPaints.indexOf(key.toString());
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

function buy(paint) {
  const cart = new client();
  cart.addPaint(paint);
}
