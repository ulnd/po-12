/**
 * Check if the mouse event is within the bounding box.
 * @param event the mouse event to check.
 * @param bbox the bounding box to check against.
 * @returns true if the event is within the bounding box, false otherwise.
 */
const withinBbox = (
  event: MouseEvent,
  bbox: {
    left: number;
    right: number;
    top: number;
    bottom: number;
  }
) => {
  return (
    event.clientX >= bbox.left &&
    event.clientX <= bbox.right &&
    event.clientY >= bbox.top &&
    event.clientY <= bbox.bottom
  );
};

export { withinBbox };
