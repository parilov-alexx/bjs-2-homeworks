function Student(name, gender, age) {
  return {
    name,
    gender,
    age,
    marks: []
   }
}


Student.prototype.setSubject = function (subjectName) {
this.subject = subjectName;
};

Student.prototype.addMarks = function (...marks) {
  if(marks in Student === true) {
this.marks = marks;
  }
}

Student.prototype.getAverage = function () {
    if(marks in Student === true) {
        for(let i = 0; i < Student.marks.length; i++) {
            let res = 0;
            res = res + Student.marks[i] / Student.marks.length;
            return res;
        }
    } else {return 0;}
}

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.subject;
  delete this.marks;
}
