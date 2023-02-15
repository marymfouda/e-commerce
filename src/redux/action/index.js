// for add item to cart
export const addCart = (product) => {
    return {
        type :"ADDITEM",
        payload: product
    }
}
//for delete item from cart

export const decCart = (product) => {
    return {
        type :"DECITEM",
        payload : product 
    }
}
export const removeCart = (product) => {
    return {
        type :"REMOVEITEM",
        payload : product 
    }
}
export const clearCart = () => {
  return {
    type: "CLEARCART",
    
  };
};
