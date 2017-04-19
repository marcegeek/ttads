class Shape {
  constructor (id, x, y) {
        this.id = id
        this.move(x, y)
    }
    toString () {
      return `Shape(${this.id})`
    }
    move (x, y) {
        this.x = x
        this.y = y
    }
}

class Triangle extends Shape {
  constructor (id, x, y, x1, y1, x2, y2, x3, y3) {
    super(id, x, y);
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
  }
  toString () {
    return "Triangle > " + super.toString()
  }
  perimeter() {
    let d1_2 = Math.sqrt(Math.pow(x2 - x1,2) + Math.pow(y2 - y1,2));
    let d2_3 = Math.sqrt(Math.pow(x3 - x2,2) + Math.pow(y3 - y2,2));
    let d1_3 = Math.sqrt(Math.pow(x3 - x1,2) + Math.pow(y3 - y1,2));
    return d1_2 + d2_3 + d1_3;
  }
  area() {
    let base = Math.sqrt(Math.pow(x2 - x1,2) + Math.pow(y2 - y1,2)); //pseudo base
    //TODO implement and return the actual area
    return 0.0;
  }
}
