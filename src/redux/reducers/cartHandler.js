const cart = [];

const cartHandler = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADD_ITEM":
      const exist = state.find((item) => item.id === product.id);
      if (exist) {
        return state.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }

    case "DELETE_ITEM":
      const exist1 = state.find((item) => item.id === product.id);
      if (exist1.qty === 1) {
        return state.filter((item) => item.id !== product.id);
      } else {
        return state.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty - 1 } : item
        );
      }

    default:
      return state;
  }
};

export default cartHandler;
