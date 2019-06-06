# Universal Circle

Everything to know about circles.


## API

### Circle

* **Circle(radius)**
* **circle.radius** *{Number}*
* **circle.circumference()** *{Number}*
* **circle.area()** *{Number}*
* **circle.toSegmentFromHeight(height)** *{CircleSegment}*
* **circle.toSegmentFromChord(chordLength)** *{CircleSegment}*

### CircleAngle

* **Circle.Angle(angle)**
* **Circle.Angle.radians(degrees)** *{Number}*
* **angle.angle** *{Number}*
* **angle.degrees()** *{Number}*
* **angle.toSegmentFromHeight(height)** *{CircleSegment}*
* **angle.toSegmentFromChord(chordLength)** *{CircleSegment}*

### CircleSegment

* **Circle.Segment(chordLength, height)**
* **Circle.Segment.height(radius, angle)** *{Number}*
* **Circle.Segment.chordLength(radius, angle)** *{Number}*
* **segment.chordLength** *{Number}*
* **segment.height** *{Number}*
* **segment.arcLength()** *{NUmber}*
* **segment.area()** *{Number}*
* **segment.circleRadius()** *{Number}*
* **segment.toAngle()** *{CircleAngle}*
* **segment.toCircle()** *{Circle}*


## License

MIT