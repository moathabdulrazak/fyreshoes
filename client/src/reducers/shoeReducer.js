export const INITIAL_STATE = {
  userId: JSON.parse(localStorage.getItem("currentUser"))?._id,
  title: "",
  desc: "",
  category: "",
  price: 0,
  cover: "",
  images: [],
  deliveryTime: 0,
  sales: 0,
};

export const shoeReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case "ADD_IMAGES":
      return {
        ...state,
        cover: action.payload.cover,
        images: action.payload.images,
      };
    case "INCREMENT_HYPE":
      return {
        ...state,
        hypeNumber: state.hypeNumber + 1,
        totalHype: state.totalHype + 1,
      };
    case "DECREMENT_HYPE":
      return {
        ...state,
        hypeNumber: state.hypeNumber - 1,
        totalHype: state.totalHype - 1,
      };
    case "INCREMENT_SALES":
      return {
        ...state,
        sales: state.sales + 1,
      };
    default:
      return state;
  }
};
