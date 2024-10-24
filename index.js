const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// a) Las pizzas que tengan un id impar.

console.log("🍕 Pizzas con ID impar:");

for (let i = 0; i < pizzas.length; i++) {
  if (pizzas[i].id % 2 !== 0) {
    console.log(`- ${pizzas[i].nombre} (ID: ${pizzas[i].id})`);
  }
}

// b) Responder: ¿Hay alguna pizza que valga menos de $600?

let hayPizzaBarata = false;
for (let i = 0; i < pizzas.length; i++) {
  if (pizzas[i].precio < 600) {
    hayPizzaBarata = true;
    break;
  }
}
if (hayPizzaBarata) {
  console.log("🎉 ¡Sí! Hay al menos una pizza que vale menos de $600.");
} else {
  console.log("😢 No hay ninguna pizza que valga menos de $600.");
}

// c) El nombre de cada pizza con su respectivo precio.


console.log("💰 Precios de las pizzas:");
for (let i = 0; i < pizzas.length; i++) {
  console.log(`ID = ${pizzas[i].id}, ${pizzas[i].nombre}: $${pizzas[i].precio}`);
}

// d) Todos los ingredientes de cada pizza.

console.log("🧀 Ingredientes de cada pizza:");
for (let i = 0; i < pizzas.length; i++) {
  let ingredientes = pizzas[i].ingredientes.join(", ");
  console.log(`- ${pizzas[i].nombre} tiene los siguientes ingredientes: ${ingredientes}`);
}

