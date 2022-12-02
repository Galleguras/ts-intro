interface SuperHeror {
  nombre: string;
  edad: number;
  direccion: Direccion;
  mostrarDireccion: () => string;
}
interface Direccion {
  calle: "Betan Rose";
  pais: "España";
  ciudad: "NY";
}

const superHeroe = {
  nombre: "Batman",
  edad: 23,
  direccion: {
    calle: "Betan Rose",
    pais: "España",
    ciudad: "NY",
  },
  mostrarDireccion() {
    return this.nombre + " ," + this.direccion.calle + "," + this.edad;
  },
};

const direccionObtenida = superHeroe.mostrarDireccion();
console.log(
  "🚀 ~ file: index.ts:15 ~ direccionObtenida--->",
  direccionObtenida
);
