import {
  GET_PEOPLE,
  GET_CHARACTER,
  SET_FAVOURITE,
  UNSET_FAVOURITE,
} from "../actions/types";

const initialState = {
  fav: [],
  people: [],
  character: [],
};

const starWarReducer = (state = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PEOPLE: {
      const newState = { people: payload };
      return { ...state, ...newState };
    }
    case GET_CHARACTER: {
      const newState = { character: payload };
      return { ...state, ...newState };
    }
    case SET_FAVOURITE: {
      const newState = { fav: [...state.fav, payload] };
      return { ...state, ...newState };
    }
    case UNSET_FAVOURITE: {
      const newFav = state.fav.filter((x) => x.name !== payload);
      const newState = { fav: newFav };
      return { ...state, ...newState };
    }

    default:
      return state;
  }
};

export default starWarReducer;
