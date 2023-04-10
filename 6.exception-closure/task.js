function parseCount(value) {
	try {

		if (isNaN(Number.parseFloat(value))) {
			throw new Error("Error")
		} else {
			return Number.parseFloat(value)
		}
	} catch (error) {
		throw new Error("Невалидное значение")
	}
}

function validateCount(value) {
	try {
		return parseCount(value);
	} catch (error) {
		return Error(parseCount(value))
	}

}


class Triangle {
	constructor(A, B, C) {
		try {
			if (A + B < C || B + C < A || A + C < B) {
				throw new Error('Error')
			} else {

				this.sideA = A;
				this.sideB = B;
				this.sideC = C;
			};
		} catch (err) {
			throw new Error("Треугольник с такими сторонами не существует")
		}
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

function getTriangle(A, B, C) {
	try {
		return new Triangle(A, B, C)
	} catch (error) {
		throw new Error("Ошибка! Треугольник не существует")
	}
}