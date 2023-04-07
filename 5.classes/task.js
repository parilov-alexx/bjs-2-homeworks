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
		let findNumber = books.find(type => this.book.type === type || this.book.value === value);
		if (findNumber === undefined) {
			return null;
		} else {
			return this.books[findNumber];
		}
	}
}