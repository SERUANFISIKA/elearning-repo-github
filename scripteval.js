const questions = [
    {
        question: "Sebuah roket air ditembakkan dengan kecepatan awal 200 m/s dan sudut elevasi 30<math><mo>&#xb0;</mo></math>. Jika gravitasi pada tempat itu adalah 10<math><mfrac><mi>m</mi><mrow><msup><mi>s</mi><mn>2</mn></msup></mrow></mfrac></math>. Hitunglah waktu yang diperlukan roket air untuk mencapai titik tertinggi!" ,
        optionA: "10 <math><mfrac><mi>m</mi><mrow><msup><mi>s</mi><mn>2</mn></msup></mrow></mfrac></math>",
        optionB: "5 <math><mfrac><mi>m</mi><mrow><msup><mi>s</mi><mn>2</mn></msup></mrow></mfrac></math>",
        optionC: "20 <math><mfrac><mi>m</mi><mrow><msup><mi>s</mi><mn>2</mn></msup></mrow></mfrac></math>",
        optionD: "2 <math><mfrac><mi>m</mi><mrow><msup><mi>s</mi><mn>2</mn></msup></mrow></mfrac></math>",
        optionE: "0,5 <math><mfrac><mi>m</mi><mrow><msup><mi>s</mi><mn>2</mn></msup></mrow></mfrac></math>",
        correctOption: "optionA"
    },

    {
        question: "Sebuah peluru ditembakkan dengan kecepatan awal 20 m/s. Jika sudut elevasinya 60<math><mo>&#xb0;</mo></math>dan percepatan gravitasinya 10<math><mfrac><mi>m</mi><mrow><msup><mi>s</mi><mn>2</mn></msup></mrow></mfrac></math>. Berakah waktu yang diperlukan peluru untuk mencapai titik tertinggi?",
        optionA: "2 s", 
        optionB: "1 s",
        optionC: "<math><msqrt><mn>3</mn></msqrt></math> s",
        optionD: "3 <math><msqrt><mn>3</mn></msqrt></math> s",
        optionE: "3 s",
        correctOption: "optionC"
    },

    {
        question: "Sebuah pesawat terbang bergerak mendatar dengan kecepatan 250 m/s melepaskan bom dari ketinggian 430 m. Jika percepatan gravitanya sebesar 10<math><mfrac><mi>m</mi><mrow><msup><mi>s</mi><mn>2</mn></msup></mrow></mfrac></math>. Maka jarak AB adalah..." ,
        optionA: "500m",
        optionB: "1500m",
        optionC: "2000m",
        optionD: "1000m",
        optionE: "1750m",
        correctOption: "optionC"
    },

    {
        question: "Pada suatu tendangan bebas dalam permainan sepak bola, lintasan bola mencapai titik tertinggi 45 m di atas tanah. Berapa lama waktu yang harus ditunggu sejak bola ditendang sampai tiba kembali di tanah?" ,
        optionA: "9 s",
        optionB: "6 s",
        optionC: "4,5 s",
        optionD: "3 s",
        optionE: "10,5 s",
        correctOption: "optionB"
    },

    {
        question: "Sebuah peluru meriam ditembakkan dengan kecepatan awal 60 m/s dan sudut elevasi 53 derajat. Apabila percepatan gravitasinya 10<math><mfrac><mi>m</mi><mrow><msup><mi>s</mi><mn>2</mn></msup></mrow></mfrac></math>, maka posisi peluru pada detik ke 1 adalah..." ,
        optionA: "36",
        optionB: "32",
        optionC: "43 ",
        optionD: "64",
        optionE: "34",
        correctOption: "optionC"
    },

    {
        question: "Sebuah benda ditembakkan miring ke atas denga sudut elevasi 60 derajat dan energi kinetiknya sebesar 400 J. Jika g = 10<math><mfrac><mi>m</mi><mrow><msup><mi>s</mi><mn>2</mn></msup></mrow></mfrac></math> maka energi kinetik benda pada saat mencapai titik tertinggi adalah..." ,
        optionA: "50 J",
        optionB: "25 J",
        optionC: "100 J",
        optionD: "90 J",
        optionE: "200 J",
        correctOption: "optionC"
    },

    {
        question: "Pada gerak parabola, vektor kecepatan total dan percepatan benda saling tegak lurus saat benda berada pada posisi..." ,
        optionA: "Titik tertinggi",
        optionB: "Titik maksimal akhir",
        optionC: "Titik kecepatan awal",
        optionD: "Titik peluncuran awal",
        optionE: "Semua jawaban benar",
        correctOption: "optionA"
    },

    {
        question: "Seorang murid menendang bola dengan kecepatan awal dalam arah vertikal 9 m/s dan kecepatan awal dalam arah horizontal 12 m/s. Dalam peristiwa itu berapakah kecepatan awal bola?" ,
        optionA: "14 m/s",
        optionB: "15 m/s",
        optionC: "23 m/s",
        optionD: "16 m/s",
        optionE: "17 m/s",
        correctOption: "optionB"
    },

    {
        question: "Pada saat peluru mencapai titik tertinggi, kecepatan arah vertikal peluru adalah..." ,
        optionA: "Tetap",
        optionB: "Nol",
        optionC: "Berubah bertambah cepat",
        optionD: "Berubah bertambah lambat",
        optionE: "Berubah tidak beraturan",
        correctOption: "optionB"
    },

    {
        question: "Azka tanpa sengaja menendang bola dengan kecepatan awal 15 m.s dengan sudut elevasi 45 derajat. Panjang lintasan maksimum bola tersebut adalah...m" ,
        optionA: "22,49",
        optionB: "22",
        optionC: "22,50",
        optionD: "22,59",
        optionE: "23",
        correctOption: "optionA"
    },
]

let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

// function for displaying next question in the array to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;
    document.getElementById("option-five-label").innerHTML = currentQuestion.optionE;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })
   
    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked === false && option[4].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}

let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}