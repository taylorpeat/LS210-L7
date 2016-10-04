var studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function generateClassRecordSummary(scores) {
  var report = {
    studentGrades: [],
    exams: [],
  };

  Object.keys(scores).forEach(parseStudent);

  function parseStudent(studentName) {
    var student = scores[studentName];
    var studentExamAverage = 0;
    var studentExerciseAverage = calculateExerciseAverage(student.scores.exercises)
    var studentGrade;

    assignAndFormat();

    function assignAndFormat() {
      student.scores.exams.forEach(assignExams);
      studentExamAverage /= student.scores.exams.length;
      studentGrade = 0.65 * studentExamAverage + 0.35 * studentExerciseAverage;
      report.studentGrades.push(formatGrade(studentGrade));
    }

    function assignExams(exam, testNum) {
      studentExamAverage += exam;
      if (report.exams[testNum]) {
        report.exams[testNum].push(exam);
      } else {
        report.exams[testNum] = [exam];
      }
    }
  }

  report.exams = report.exams.map(formatExamResults);

  function formatExamResults(exam) {
    var result = {};
    result.average = findAverage(exam);
    result.minimum = exam.sort(sortByNumber)[0];
    result.maximum = exam.sort(sortByNumber)[exam.length - 1];

    return result;
  }

  function formatGrade(grade) {
    var let = "F";
    
    if (grade >= 93) {
      let = "A";
    } else if (grade >= 85) {
      let = "B";
    } else if (grade >= 77) {
      let = "C";
    } else if (grade >= 69) {
      let = "D";
    } else if (grade >= 60) {
      let = "E";
    }

    return grade.toFixed(0) + " (" + let + ")";
  }

  function calculateExerciseAverage(exercises) {
    return exercises.reduce(function(total, exercise) {
      return total + exercise;
    }, 0);
  }

  function findAverage(exam) {
    return exam.reduce(function(total, score) {
      return total + score;
    }, 0) / exam.length;
  }

  function sortByNumber(a, b) {
    return a > b;
  }

  return report;
};

generateClassRecordSummary(studentScores);