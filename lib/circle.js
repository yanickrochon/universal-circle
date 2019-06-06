
class Circle {

  /**
   * Create a new circle given a radius
   * @param {Number} r   radius of the circle
   */
  constructor(r) {
    this.radius = r;
  }

  /**
   * Return the circumference of the circle
   * @return {Number}
   */
  circumference() {
    return 2 * Math.PI * this.radius;
  }

  /**
   * Return the area of the circle
   * @return {Number}
   */
  area() {
    return Math.PI * (this.radius * this.radius);
  }

  /**
   * Return a segment of the circle given it's height
   * @param {Number} h   the segment sagitta height
   * @return {CircleSegment}
   */
  toSegmentFromHeight(h) {
    const r = this.radius;
    const a = 2 * Math.acos(1 - (h / r));

    return new CircleSegment(CircleSegment.chordLength(r, a), h);
  }

  /**
   * Return a segment of the circle given it's chord length
   * @param {Number} w    the chord length
   * @return {CircleSegment}
   */
  toSegmentFromChord(w) {
    const r = this.radius;
    const a = 2 * Math.asin(w / (2 * r));

    return new CircleSegment(w, CircleSegment.height(r, a));
  }

}


class CircleAngle {

  /**
   * Convert degrees into radians
   * @param {Number} deg   angle in degrees
   * @return {Number}
   */
  static radians(deg) {
    return deg * Math.PI / 180;
  }


  /**
   * Create a new circle angle
   * @param {Number} a   the angle in radians 
   */
  constructor(a) {
    this.angle = a;
  }

  /**
   * Convert angle to radians
   * @return {Number}
   */
  degrees() {
    return this.angle / Math.PI * 180;
  }

  /**
   * Create a segment from this angle, provided it's height
   * @param {Number} h   the segment sagitta height
   * @return {CircleSegment}
   */
  toSegmentFromHeight(h) {
    const w = 2 * h / Math.tan(this.angle / 4);

    return new Circle.Segment(w, h);
  }

  /**
   * Create a segment from this angle, provided it's chord length
   * @param {Number} w   the chord length
   * @return {CircleSegment}
   */
  toSegmentFromChord(w) {
    const h = w / 2 * Math.tan(this.angle / 4);

    return new Circle.Segment(w, h);
  }

}


class CircleSegment {

  /**
   * Return the height of a segment given it's radius and angle
   * @param {Number} r   radius of the circle
   * @param {Number} a   angle in radians
   * @return {Number}
   */
  static height(r, a) {
    return r * (1 - Math.cos(a  / 2));
  }

  /**
   * Return the chord length of a segment given it's radius and angle
   * @param {Number} r   radius of the circle
   * @param {Number} a   angle in radians
   * @return {Number}
   */
  static chordLength(r, a) {
    return 2 * r * Math.sin(a / 2);
  }


  /**
   * Create a new segment given a chord length and height
   * @param {Number} w    the chord length
   * @param {Number} h    the segment sagitta height
   */
  constructor(w, h) {
    this.chordLength = w;
    this.height = h;
  }

  /**
   * Return the length of the arc
   * @return {Number}
   */
  arcLength() {
    return this.toAngle().angle * this.circleRadius();
  }

  /**
   * Return the area of the segment
   * @return {Number}
   */
  area() {
    const r = this.circleRadius();
    const h = this.height;

    return (r * r) * Math.acos((r - h) / r) - (r - h) * Math.sqrt((2 * r * h) - (h * h));
  }

  /**
   * Return the radius of the circle corresponding to this segment
   * @return {Number}
   */
  circleRadius() {
    const w = this.chordLength;
    const h = this.height;

    return (h / 2) + ((w * w) / (8 * h));
  }

  /**
   * Create an angle from this segment
   * @return {CircleAngle}
   */
  toAngle() {
    return new CircleAngle(2 * Math.asin(this.chordLength / (2 * this.circleRadius())));
  }

  /**
   * Create a circle from this segment
   * @return {Circle}
   */
  toCircle() {
    return new Circle(this.circleRadius());
  }

}


module.exports = Circle;
module.exports.Angle = CircleAngle;
module.exports.Segment = CircleSegment;
