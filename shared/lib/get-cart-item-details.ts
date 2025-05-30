import { mapPizzaType, PizzaSize, PizzaType } from "../constants/pizza";
import { CartStateItem } from "./get-cart-details";


export const getCartItemDetails = (
    ingredients: CartStateItem['ingredients'],
    pizzaType?: PizzaType,
    pizzaSize?: PizzaSize,
): string => {
    const details = [];

  if (pizzaSize && pizzaType) {
    const typeName = mapPizzaType[pizzaType];
    details.push(`${typeName}, ${pizzaSize} размер`);
  }

  if (ingredients) {
    details.push(...ingredients.map((ingredients) => ingredients.name));
  }

  return details.join(', ');
};