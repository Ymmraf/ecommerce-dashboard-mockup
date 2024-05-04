export function getDecimal(price: number, discount: number = 0) {
  const finalPrice = (price * (1 - discount)).toFixed(2);

  if (!finalPrice.includes(".")) {
    return finalPrice.concat(".00");
  } else {
    return finalPrice.split(".")[1].length == 2
      ? finalPrice
      : finalPrice.concat("0");
  }
}
