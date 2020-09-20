export const isLeftEdgeDocument = (tolerance = 10) =>
  window.scrollX <= tolerance;

export const isRightEdgeDocument = (tolerance = 0) =>
  window.innerWidth + window.scrollX >= document.body.scrollWidth - tolerance;

export const isHorizontalSwipe = (deltaX, deltaY, threshold = 30) =>
  Math.abs(deltaY) < 0.1 && Math.abs(deltaX) > threshold;

export const isForward = (deltaX) => deltaX > 0;
