import { fromEvent, timer } from "rxjs";
import { throttle, filter, tap } from "rxjs/operators";
import {
  isForward,
  isHorizontalSwipe,
  isLeftEdgeDocument,
  isRightEdgeDocument,
} from "./helpers";

let leftEdge = isLeftEdgeDocument();
let rightEdge = isRightEdgeDocument();

fromEvent(window, "mousewheel")
  .pipe(
    throttle(() => timer(300)),
    tap((e) => {
      leftEdge = isLeftEdgeDocument();
      rightEdge = isRightEdgeDocument();
    }),
    filter((e) =>
      isHorizontalSwipe(e.deltaX, e.deltaY, leftEdge && rightEdge ? 35 : 45)
    )
  )
  .subscribe((e) => {
    if (isForward(e.deltaX)) {
      if (rightEdge) {
        history.forward();
      }
    } else {
      if (leftEdge) {
        history.back();
      }
    }
  });
