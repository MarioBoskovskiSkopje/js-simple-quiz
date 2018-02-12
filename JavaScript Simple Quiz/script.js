function submitAnswers() {
    let total = 5;
    let score = 0;


    let q1 = document.forms["quizForm"]["q1"].value;
    let q2 = document.forms["quizForm"]["q2"].value;
    let q3 = document.forms["quizForm"]["q3"].value;
    let q4 = document.forms["quizForm"]["q4"].value;
    let q5 = document.forms["quizForm"]["q5"].value;




    for (let i = 1; i <= total; i++) {
        if (eval("q" + i) == null || eval("q" + i) == " ") {
            alert("You missed question " + i);
            return false;
        }

    }

    let answers = ["b", "a", "d", "b", "d"];

    if (q1 == answers[0]) {
        score++;
    }
    if (q2 == answers[1]) {
        score++;
    }
    if (q3 == answers[2]) {
        score++;
    }
    if (q4 == answers[3]) {
        score++;
    }
    if (q5 == answers[4]) {
        score++;
    }

    alert("You scored " + score + " out of " + total);
}