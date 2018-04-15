'use strict';

(function() {
    function Question(question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }

    Question.prototype.displayQuestion = function () {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    };

    Question.prototype.checkAnswer = function (answer, callback) {
        var score;

        if (answer === this.correctAnswer) {
            console.log('Jawaban Benar!');
            score = callback(true);
        } else {
            console.log('SALAH. coba lagi :)');
            score = callback(false);
        }

        this.displayScore(score);
    };

    Question.prototype.displayScore = function (score) {
        console.log('Nilai Anda Adalah : ' + score);
    };

    var q1 = new Question('Apakah JavaScript bahasa pemrograman paling keren sedunia?',
                          ['Ya', 'Enggak'],
                          0);

    var q2 = new Question('Siapa nama dosen yang mengajar kuliah ini ?',
                          ['John', 'Micheal', 'Oskar'],
                          2);

    var q3 = new Question('Kata yang paling bagus mendeskripsikan Pelajaran Pemrograman Web',
                          ['Bosen', 'Susah', 'Membahagiakan', 'Membosenkan'],
                          2);
                          
    var q4 = new Question('Kata yang paling bagus mendeskripsikan koding',
                          ['Bosen', 'Susah', 'Membahagiakan', 'Membosenkan'],
                          2);
    
    var q5 = new Question('Kata yang paling bagus mendeskripsikan JavaScript',
                          ['Pusing', 'Susah', 'Menyenangkan', 'Membosenkan'],
                          2);
    
    var questions = [q1, q2, q3, q4, q5];
    
    function addScore() {
        var score = 0;
        return function (correct) {
            if (correct) {
                score++;
            }

            return score;
        }
    }

    var keepScore = addScore();

    function askQuestion() {
        var n = Math.floor(Math.random() * questions.length);

        questions[n].displayQuestion();

        var answer = prompt('Masukan Jawaban Anda :');

        if (answer !== 'exit') {
            questions[n].checkAnswer(+answer, keepScore);
            askQuestion();
        }
    }

    askQuestion();
})();