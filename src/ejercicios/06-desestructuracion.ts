interface Producto {
  desc: string;
  precio: number;
}

const telefono: Producto = {
  desc: "Nokia Air",
  precio: 333,
};

const tableta: Producto = {
  desc: "Samsung",
  precio: 453,
};
const articulos = [telefono, tableta];
function calcularisv(productos: Producto[]): [number, number] {
  let total = 0;
  productos.forEach((p, i) => {
    console.log("as");
    total += p.precio;
    return "ok";
  });
  return [total, total * 0.15];
}

const [total, isv] = calcularisv(articulos);
console.log("ISV:", isv, total);

/* (function x(productos) {
  let total = 0;

  console.log("first");
  return "ok";
})(); */
