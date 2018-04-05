
class Circle {

  constructor(radius) {
    this.radius = radius;
  }

  circumference() {
    return 2 * Math.PI * this.radius;
  }

  area() {
    return Math.PI * (this.radius * this.radius);
  }

  toSegmentFromHeight(height) {
    const angle = 2 * Math.acos(1 - (height / this.radius));

    return new CircleSegment(CircleSegment.chordLength(this.radius, angle), height);
  }

  toSegmentFromChord(chordLength) {
    const angle = 2 * Math.asin(chordLength / (2 * this.radius));

    return new CircleSegment(chordLength, CircleSegment.height(this.radius, angle));
  }

}


class CircleAngle {
  constructor(degrees) {
    this.degrees = degress;
  }

  toRadian() {
    throw new Error('Not implemented');
  }

  toSegmentFromHeight(height) {
    throw new Error('Not implemented');
  }

  toSegmentFromChord(chordLength) {
    throw new Error('Not implemented');
  }
}


class CircleSegment {

  static height(radius, angle) {
    return radius * (1 - Math.cos(angle / 2));
  }

  static chordLength(radius, angle) {
    return 2 * radius * Math.sin(angle / 2);
  }


  constructor(chordLength, height) {
    this.chordLength = chordLength;
    this.height = height;
  }

  circleRadius() {
    return (this.height / 2) + ((this.chordLength * this.chordLength) / (8 * this.height));
  }

  arcLength() {
    return this.toAngle().degrees * this.circleRadius();
  }

  angle() {
    return 2 * Math.asin(this.length / (2 * this.circleRadius()));
  }

  toAngle() {
    return new CircleAngle(this.angle());
  }

  toCircle() {
    return new Circle(this.circleRadius());
  }
}


module.exports = Circle;
module.exports.Angle = CircleAngle;
module.exports.Segment = CircleSegment;
