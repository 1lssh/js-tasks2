let coord = field.getBoundingClientRect();
let point1 = coord.left + ":" + coord.top;
let point2 = coord.right + ":" + coord.bottom;
let point3 = (coord.left + field.clientLeft) + ":" + (coord.top + field.clientTop);
let point4 = (coord.right - field.clientLeft) + ":" + (coord.bottom - field.clientTop);