console.log("Hola Mundo!");

/*
    ===== Código de TypeScript =====
    
*/
let nombre: string | number = "asdasd adssad asdf";

let frutas: (string | number)[] = ["pera", "manzana", "uva", 1];

interface Personaje {
  nombre: string;
  hp: number;
  habilidades: string[];
  puebloNatal?: string;
}

nombre = "asd";
console.log("🚀 ~ file: index.ts:10 ~ nombre", nombre);

let personaje: Personaje = {
  nombre: "Pepe",
  hp: 32,
  habilidades: ["zas", "ras"],
  puebloNatal: "Irun",
};
console.table(personaje);
