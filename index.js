class Polygon {
  constructor(arrayOfInt) {
    this.sides = arrayOfInt
  }
  get countSides() {
    return this.sides.length
  }
  get perimeter() {
    return this.sides.reduce((acc,init)=>acc+init)
  }
}
class Triangle extends Polygon {
  get isValid() {
    if ((this.sides[0] < this.sides[1] + this.sides[2]) &&
    (this.sides[1] < this.sides[0] + this.sides[2]) &&
    (this.sides[2] < this.sides[0] + this.sides[1])) {
      return true
    }
    else return false
  }
}
class Square extends Polygon {
  get isValid() {
    let ratioPtoS = this.perimeter/this.sides.length
    if (ratioPtoS === this.sides[0] &&
        ratioPtoS === this.sides[1] &&
        ratioPtoS === this.sides[2] &&
        ratioPtoS === this.sides[3]) {
      return true
    } else return false
  }
  get area() {
    if (this.isValid === true) {
      return this.sides[0] ** 2
    }
    else return false
  }
}