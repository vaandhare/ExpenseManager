import { categoryArray, subCategoryArray } from "../../constants/arrayLists";

let defaultState = {
  category: {
    categories: [...categoryArray],
    subCategories: [...subCategoryArray],
  },
};

let CategoryReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_CATEGORY": {
      let newState = { ...state };
      newState.category = {
        categories: [...newState.category.categories, action.payload],
      };
      console.log(newState);
      return newState;
    }

    case "REMOVE_CATEGORY": {
      let newState = { ...state };
      newState.category = {
        categories: newState.category.categories.filter(
          (item, index) => index != action.payload.index
        ),
        subCategories: newState.category.subCategories.filter(
          (item, index) => index != action.payload.index
        ),
      };
      console.log(newState);
      return newState;
    }

    default:
      return state;
  }
};

export default CategoryReducer;
