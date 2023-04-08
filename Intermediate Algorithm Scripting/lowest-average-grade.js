const grades = {
    Ron: [90, 89, 99, 87, 100, 74],
    Leslie: [78, 74, 92, 87, 77, 81],
    Tom: [77, 61, 89, 47, 57, 83],
    Andy: [35, 54, 44, 58, 39, 41]
  };

  const grades2 = {
    April: [88, 56, 55, 97, 100, 88, 100, 98],
    Tammy1: [78, 46, 92, 84, 55, 74, 89, 80],
    Ben: [77, 59, 89, 47, 57, 83, 90, 89],
    Garry: [54, 90, 84, 88, 39, 73, 67, 79],
    Tammy2: [86, 49, 90, 77, 89, 92, 88, 75]
  };

  function hardestTest(classRoom) {

    let tests = {};
    let averageArr = [];
    
    for (let student in classRoom) {
        let studentGrades = classRoom[student];
        for (let i = 0; i < studentGrades.length; i++) {
            if (tests[i]) {
               tests[i].push(studentGrades[i]);
            } else {
                tests[i] = [];
                tests[i].push(studentGrades[i]);
            }
        }
    }

    for (let test in tests) {
        averageArr.push(tests[test].reduce((sum, currentTest) => sum + currentTest) / tests[test].length);
    }

    return "Test #" + parseInt(averageArr.indexOf(Math.min(...averageArr)) + 1) + " was the hardest test. Average score: " + Math.min(...averageArr);
  }

  console.log(hardestTest(grades));
  console.log(hardestTest(grades2));

