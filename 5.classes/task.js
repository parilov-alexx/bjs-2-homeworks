class PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state = 100, type = null) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = state;
		this.type = type;
	};

	fix() {
		this.state = this.state * 1.5;

	};

	set state(state) {
		if (state < 0) {
			this._state = 0
		} else if (state > 100) {
			this._state = 100;
		} else {
			this._state = state
		}
	};
	get state() {
		return this._state;
	};

}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state = 100, type = null) {
		super(name, releaseDate, pagesCount, state = 100);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount, state, type) {
		super(name, releaseDate, pagesCount, state, type);

		this.author = author;
		this.type = "book";

	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state, type) {
		super(author, name, releaseDate, pagesCount, state);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state, type) {
		super(author, name, releaseDate, pagesCount, state);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state, type) {
		super(author, name, releaseDate, pagesCount, state);
		this.type = "detective";
	}
}

class Library {
	constructor(name) {
		this.name = name;
		this.books = []
	}


	addBook(book) {
		if (book.state > 30) {
			this.books.push(book)
		}
	}

	findBookBy(type, value) {
		let findNumber = this.books.find(el => el[type] === value);
		if (findNumber === undefined) {
			return null;
		} else {
			return findNumber;
		}
	}

	giveBookByName(bookName) {
		let findBook = this.books.findIndex(el => el.name === bookName);
		if (findBook === -1) {
			return null;
		} else {
			let givenBook = this.books.splice(findBook, 1);
			return givenBook[0];

		}

	}
}

class Student {
	constructor(name) {
		this.name = name;
		this.marks = {};
	}

	addMark(mark, subject) {
		if (mark >= 2 && mark <= 5) {
			if (this.marks[subject] === undefined) {
				this.marks[subject] = [];
				this.marks[subject].push(mark);
			} else {
				this.marks[subject].push(mark);
			}
		}
	}

	getAverageBySubject(subject) {
		if (this.marks[subject] === undefined) {
			return 0;
		} else {
			return this.marks[subject].reduce((acc, item) => acc + item, 0) / this.marks[subject].length;
		}
	}

	getAverage() {
		let subjectNames = Object.keys(this.marks);
		return subjectNames.reduce((acc, item) => acc + this.getAverageBySubject(item), 0) / subjectNames.length;

	}

}
