const Circle = require('../lib/circle');

describe('Testing Circle', () => {

  it('should return circumference', () => {
    const c = new Circle(10);

    expect(c.circumference()).toBeCloseTo(62.831, 2);
  });


  describe('Testing Segment', () => {

    it('should create circle from segment', () => {
      const s = new Circle.Segment(40, 14);
      const c = s.toCircle();

      expect(c.radius).toBeCloseTo(21.2857, 3);
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
