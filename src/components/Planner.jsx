let chairPosition = [4, 3];
let observer = null;

function emitChange() {
    observer(chairPosition);
}

export function observe(o) {
    if (observer) {
        throw new Error("Multiple observers not implemented.");
    }

    observer = o;
    emitChange();
}

export function moveChair(toX, toY) {
    chairPosition = [toX, toY];
    emitChange();
}

export function canMoveChair(toX, toY) {
    const [x, y] = chairPosition;
    const dx = toX - x;
    const dy = toY - y;
    return (
        (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
        (Math.abs(dx) === 1 && Math.abs(dy) === 2)
    );
}
