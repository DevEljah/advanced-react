import { CLEAR_LIST, REST_LIST, REMOVE_ITEM } from "./actions";
import { data } from "../../../data";

// reducer returns "undefined" by default
// reducer updates the state "value" >>
// whatever gonna be return from "reducer" will new "state" value
export const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  }
  //////////////
  if (action.type === REST_LIST) {
    return { ...state, people: data };
  }
  //////////////
  if (action.type === REMOVE_ITEM) {
    // console.log(action);
    // return state;
    let newPeople = state.people.filter(
      (person) => person.id !== action.payload.id
    );
    return { ...state, people: newPeople };
  }
  // console.log(state);
  // console.log(action);

  throw Error(`No matching "${action.type}" - action type`);
};
