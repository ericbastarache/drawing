import { DRAWING_IN_PROGRESS, DRAW_START, DRAW_END } from '../constants';

export const drawingInProgress = (coords) => {
  return {
    type: DRAWING_IN_PROGRESS,
    payload: coords,
  }
}

export const drawStart = (pos) => {
  return {
    type: DRAW_START,
    payload: pos,
  }
}

export const drawEnd = (pos) => {
  return {
    type: DRAW_END,
    payload: pos,
  }
}