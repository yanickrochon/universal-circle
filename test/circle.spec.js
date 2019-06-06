const Circle = require('../lib/circle');

describe('Testing Circle', () => {

  it('should return circumference', () => {
    const c = new Circle(10);

    expect(c.circumference()).toBeCloseTo(62.831, 2);
  });

  it('should return area', () => {
    const c = new Circle(1);

    expect(c.area()).toBeCloseTo(Math.PI, 2);
  });

  it('should return a segment from height', () => {
    const c = new Circle(1);
    const s = c.toSegmentFromHeight(0.334);

    expect(s).toBeInstanceOf(Circle.Segment);
    expect(s.chordLength).toBeCloseTo(1.492, 2);
    expect(s.circleRadius()).toBeCloseTo(1, 2);
  });

  it('should return a segment from chord', () => {
    const c = new Circle(1);
    const s = c.toSegmentFromChord(1.492);

    expect(s).toBeInstanceOf(Circle.Segment);
    expect(s.height).toBeCloseTo(0.334, 2);
    expect(s.circleRadius()).toBeCloseTo(1, 2);
  });



  describe('Testing Angle', () => {

    it('should convert degrees to radians', () => {
      const deg = 200.00;
      const rad = Circle.Angle.radians(deg);
      const a = new Circle.Angle(rad);
      
      expect(a.degrees()).toBeCloseTo(deg, 2);
    });

    it('should create segment from height', () => {
      const rad = 1.75;
      const h = 5.35;
      const a = new Circle.Angle(rad);
      const s = a.toSegmentFromHeight(h);

      expect(s).toBeInstanceOf(Circle.Segment);
      expect(s.toAngle().angle).toBeCloseTo(rad, 2);
    });

    it('should create segment from chord', () => {
      const rad = 2.77;
      const w = 2.59;
      const a = new Circle.Angle(rad);
      const s = a.toSegmentFromChord(w);

      expect(s).toBeInstanceOf(Circle.Segment);
      expect(s.toAngle().angle).toBeCloseTo(rad, 2);
    });

  });


  describe('Testing Segment', () => {

    it('should return height from radius and angle', () => {
      const r = 15;
      const a = Circle.Angle.radians(45);
      const h = Circle.Segment.height(r, a);

      expect(h).toBeCloseTo(1.14, 2);
    });

    it('should return chord length from radius and angle', () => {
      const r = 15;
      const a = Circle.Angle.radians(45);
      const w = Circle.Segment.chordLength(r, a);

      expect(w).toBeCloseTo(11.48, 2);
    });

    it('should create circle from segment', () => {
      const s = new Circle.Segment(40, 14);
      const c = s.toCircle();

      expect(c.radius).toBeCloseTo(21.2857, 3);
    });

    it('should calculate the circle radius', () => {
      [
        [30.00, new Circle.Segment(36, 6)],
        [11.22, new Circle.Segment(22, 9)],
      ].forEach(([r, s]) => expect(s.circleRadius()).toBeCloseTo(r, 2));
    });

    it('should calculate area', () => {
      const s = new Circle.Segment(7.74596, 3);

      expect(s.area()).toBeCloseTo(17.22, 2);
    });

    it('should calculate arc length', () => {
      const s = new Circle.Segment(8.23, 1.34);

      expect(s.arcLength()).toBeCloseTo(8.80, 2);
    });

    it('should calculate segment height', () => {
      const s = new Circle.Segment(40, 14);
      const c = s.toCircle();

      expect(c.toSegmentFromChord(40).height).toBeCloseTo(14, 2);
    });

    it('should calculate chord length', () => {
      const s = new Circle.Segment(40, 14);
      const c = s.toCircle();

      expect(c.toSegmentFromHeight(14).chordLength).toBeCloseTo(40, 2);
    });

  });

});
