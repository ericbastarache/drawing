import {
  SET_COLOR,
  CHANGE_COLOR,
} from '../constants';

const INITIAL_STATE = {
  color: null
};

const colorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_COLOR:
      return {

      }
    case CHANGE_COLOR:
      return {

      }
    default:
      return state;
  }
}

export default colorReducer;