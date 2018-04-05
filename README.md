# Universal Circle

Everything to know about circles.


## API

### Circle

* **Circle(radius)**
* **circle.radius** *{Number}*
* **circle.circumference()** *{Number}*
* **circle.area()** *{Number}*
* **circle.toSegmentFromChord(chordLength)** *{CircleSegment*

### CircleAngle

* **Circle.Angle(degrees)**
* **angle.degrees** *{Number}*
* **angle.toRadian()** *{Number}*
* **angle.toSegmentFromHeight(height)** *{CircleSegment}*
* **angle.toSegmentFromChord(chordLength)** *{CircleSegment}*

### CircleSegment

* **Circle.Segment(chordLength, height)**
* **Circle.Segment.height(radius, angle)** *{Number}*
* **Circle.Segment.chordLength(radius, angle)** *{Number}*
* **segment.angle()** *{Number}*
* **segment.arcLength()** *{NUmber}*
* **segment.circleRadius()** *{Number}*
* **segment.toAngle()** *{CircleAngle}*
* **segment.toCircle()** *{Circle}*
