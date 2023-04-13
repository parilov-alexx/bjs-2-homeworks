function parseCount(value) {
	let parseRes = Number.parseFloat(value);
	if (isNaN(parseRes)) {
		throw Error("Невалидное значение")
	} else {
		return parseRes;
	}

}

function validateCount(value) {
	try {
		return parseCount(value);
	} catch (error) {
		let failure = error;
		return failure;
	}
}

class Triangle {
	constructor(a, b, c) {
		if (a + b < c || b + c < a || a + c < b) {
			throw new Error('Треугольник с такими сторонами не существует')
		} else {

			this.sideA = a;
			this.sideB = b;
			this.sideC = c;
		};
	}

	get perimeter() {
		return this.sideA + this.sideB + this.sideC;
	}

	get area() {
		let halfPerimeter = this.perimeter / 2;
		let res = Math.sqrt(halfPerimeter * (halfPerimeter - this.sideA) * (halfPerimeter - this.sideB) * (halfPerimeter - this.sideC));
		return +res.toFixed(3);
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c)
	} catch (error) {
		let obj = {
			get perimeter() {
				return 'Ошибка! Треугольник не существует';
			},
			get area() {
				return 'Ошибка! Треугольник не существует';
			}
		}
		return obj;
	}
}