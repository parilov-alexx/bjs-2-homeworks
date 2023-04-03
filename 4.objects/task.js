function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}


Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
};

Student.prototype.addMarks = function(...marks) {
	if ("marks" in this === true) {
		this.marks.push(...marks);
	}
}

Student.prototype.getAverage = function() {
	if ("marks" in this === true) {
		let res = 0;
		for (let i = 0; i < this.marks.length; i++) {
			res = res + this.marks[i] / this.marks.length;
		}
		return res;
	} else {
		return 0;
	}
}

Student.prototype.exclude = function(reason) {
	this.excluded = reason;
	delete this.subject;
	delete this.marks;
}