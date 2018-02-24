import { 
  DRAW_START,
  DRAWING_IN_PROGRESS,
  DRAW_END,
} from '../constants';

const INITIAL_STATE = {

};

const drawingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DRAW_START:
      return {

      }
    case DRAW_END:
      return {

      }
    case DRAWING_IN_PROGRESS:
      return {

      }
    default:
      return state;
  };
}

export default drawingReducer;