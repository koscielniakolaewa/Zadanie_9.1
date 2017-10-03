function getTriangleArea(a, h) {
	if ( (a > 0) && (h > 0) ) {
		return a*h/2; 
	}
	else if ( (a <= 0) || (h <= 0) ) {
		return 'Nieprawidłowe dane'; 
	}
}

console.log(getTriangleArea(10, 6))

var triangle1Area = getTriangleArea(10, 15);

var triangle2Area = getTriangleArea(-2, 15);

var triangle3Area = getTriangleArea(0, 15);


alert(triangle1Area);