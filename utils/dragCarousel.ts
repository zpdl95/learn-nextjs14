export default class DragCarousel {
  isDragging: boolean;
  startX: number;
  startScrollLeft: number;
  startTime: number;
  lastMoveTime: number;
  velocity: number;
  animationId: number;
  deceleration: number;

  constructor() {
    this.isDragging = false;
    this.startX = 0;
    this.startScrollLeft = 0;
    this.startTime = 0;
    this.lastMoveTime = 0;
    this.velocity = 0;
    this.animationId = 0;
    this.deceleration = 0;
  }

  setDeceleration = (number) => {
    this.deceleration = number;
    return this;
  };

  dragStart = (e, setState, elem: HTMLElement) => {
    e.preventDefault();
    this.isDragging = true;
    setState(true);
    this.startX = e.clientX;
    this.startScrollLeft = elem.scrollLeft;
    this.startTime = performance.now();
    this.velocity = 0;
    cancelAnimationFrame(this.animationId);
  };

  dragging = (e: MouseEvent, elem: HTMLElement) => {
    if (!this.isDragging) return;
    e.preventDefault();

    const currentTime = performance.now();
    const elapsedTime = currentTime - this.startTime;

    const deltaX = e.clientX - this.startX;

    this.velocity = (deltaX / elapsedTime) * 15;

    const distance = this.startScrollLeft - deltaX;
    const scrollMin = 0;
    const scrollMax = elem.scrollWidth - elem.clientWidth;

    if (distance < scrollMin) {
      elem.style.transform = `translateX(${-(distance / 2)}px)`;
    } else if (distance > scrollMax) {
      elem.style.transform = `translateX(${-((distance - scrollMax) / 2)}px)`;
    } else {
      elem.scrollLeft = distance;
    }

    this.lastMoveTime = currentTime;
  };

  dragEnd = (dragingState, dragEndingState, elem: HTMLElement) => {
    if (!this.isDragging) return;
    this.isDragging = false;
    dragingState(false);

    const currentTime = performance.now();
    const endWaitTime = currentTime - this.lastMoveTime;

    this.velocity = this.velocity * Math.max(0, 1 - endWaitTime / 500);

    dragEndingState(true);
    setTimeout(() => {
      elem.style.transform = `translateX(0px)`;
    });
    setTimeout(() => {
      dragEndingState(false);
    }, 200);

    const inertia = () => {
      elem.scrollLeft -= this.velocity;

      if (Math.abs(this.velocity) > 1) {
        this.velocity *= this.deceleration;
        this.animationId = requestAnimationFrame(inertia);
      } else {
        cancelAnimationFrame(this.animationId);
      }
    };
    inertia();
  };
}
