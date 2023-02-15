const findProduct = (state, product) => {
  return state.find((x) => x.id === product.id);
};
const cart = [];
const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      // check if product is already
      if (findProduct(state, product)) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
    case "DECITEM":
      const exist = findProduct(state, product);
      if (exist.qty === 1) {
        return state.filter((x) => x.id !== exist.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
    case "REMOVEITEM":
      return state.filter((x) => x.id !== product.id);

    case "CLEARCART":
      return [];

    default:
      return state;
  }
};
export default handleCart;
