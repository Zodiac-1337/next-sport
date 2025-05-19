export const mapPizzaSize = {
  44: "S",
  46: "M",
  48: "L",
  50: "XL",
  52: "XXL",
} as const;

export const mapPizzaType = {
  1: "Мужская",
  2: "Женская",
} as const;

export const pizzaSizes = Object.entries(mapPizzaSize).map(([value, name]) => ({
  name,
  value,
}));

export const pizzaTypes = Object.entries(mapPizzaType).map(([value, name]) => ({
  name,
  value,
}));

export type PizzaSize = keyof typeof mapPizzaSize;
export type PizzaType = keyof typeof mapPizzaType;