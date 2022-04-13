import { GET_PEOPLE, GET_CHARACTER } from "./types";

import DashboardService from "../services/dashboard";

export const getAllPeopleAction = (no) => async (dispatch) => {
  try {
    const res = await DashboardService.getAllPeople(no);
    dispatch({
      type: GET_PEOPLE,
      payload: res,
    });
  } catch (err) {
    console.log(err);
  }
};

export const searchPeopleAction = (q) => async (dispatch) => {
  try {
    const res = await DashboardService.searchPeople(q);
    dispatch({
      type: GET_PEOPLE,
      payload: res,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getCharacterAction = (q) => async (dispatch) => {
  try {
    const res = await DashboardService.getCharacter(q);
    dispatch({
      type: GET_CHARACTER,
      payload: res,
    });
  } catch (err) {
    console.log(err);
  }
};

