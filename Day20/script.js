let username = ""; 
const login = document.getElementById("submit-btn");
if (login) {
  login.addEventListener("click", function () {
    const mail = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    let flag = true;

    const mailValidate = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const nameValidate = /^[A-Z][a-zA-Z\s]*$/;

    if (!mailValidate.test(mail)) {
      document.getElementById("mailError").innerText = "Enter a valid Email";
      flag = false;
    } else {
      document.getElementById("mailError").innerText = ""; 
    }

    if (!nameValidate.test(name)) {
      document.getElementById("nameError").innerText = "Enter a valid Name (starting with an uppercase letter)";
      flag = false;
    } else {
      document.getElementById("nameError").innerText = ""; 
    }

    if (!name) {
      document.getElementById("nameError").innerText = "Name cannot be empty";
      flag = false;
    }

    if (!mail) {
      document.getElementById("mailError").innerText = "Email cannot be empty";
      flag = false;
    }

    if (flag) {
      username = name;
      document.getElementById("login-section").style.display = "none"; 
      document.getElementById("quiz-section").style.display = "block"; 
    }
    
  });
  
}

const questions = [
    {
      question: "Which method is used to remove the last element from an array?",
      options: [
        { answer: "pop()", isCorrect: true },
        { answer: "shift()", isCorrect: false },
        { answer: "push()", isCorrect: false },
        { answer: "unshift()", isCorrect: false },
      ],
    },
    {
      question: "Which method is used to join all elements of an array into a string?",
      options: [
        { answer: "join()", isCorrect: true },
        { answer: "concat()", isCorrect: false },
        { answer: "slice()", isCorrect: false },
        { answer: "splice()", isCorrect: false },
      ],
    },
    {
      question: "Which method creates a new array with all elements that pass a test?",
      options: [
        { answer: "filter()", isCorrect: true },
        { answer: "map()", isCorrect: false },
        { answer: "reduce()", isCorrect: false },
        { answer: "forEach()", isCorrect: false },
      ],
    },
    {
      question: "Which of the following is not a valid JavaScript data type?",
      options: [
        { answer: "Number", isCorrect: false },
        { answer: "String", isCorrect: false },
        { answer: "Float", isCorrect: true },
        { answer: "Boolean", isCorrect: false },
      ],
    },
    {
      question: "What will the following code output: `console.log(3 + '3')`?",
      options: [
        { answer: "33", isCorrect: true },
        { answer: "6", isCorrect: false },
        { answer: "NaN", isCorrect: false },
        { answer: "Error", isCorrect: false },
      ],
    },
  ];
    let leaderboard = [];
    function renderQuiz() {
    const quizContainer = document.querySelector(".quiz-container");
    quizContainer.innerHTML = ""; 
  
    questions.forEach((q, index) => {
      const questionDiv = document.createElement("div");
      questionDiv.classList.add("quiz-question");
        questionDiv.innerHTML = `<h4>${index + 1}. ${q.question}</h4>`;
        q.options.forEach((option, optIndex) => {
        const optionDiv = document.createElement("div");
        optionDiv.classList.add("form-check");
        optionDiv.innerHTML = `
          <input type="radio" class="form-check-input" name="q${index}" id="q${index}_opt${optIndex}" value="${option.isCorrect}">
          <label class="form-check-label" for="q${index}_opt${optIndex}">${option.answer}</label>
        `;
        questionDiv.appendChild(optionDiv);
      });
  
      quizContainer.appendChild(questionDiv);
    });
  }
    renderQuiz();
  
  document.getElementById("submit-button").addEventListener("click", function () {
    let score = 0;
      questions.forEach((q, index) => {
      const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
      if (selectedOption && selectedOption.value === "true") {
        score++; 
      }
    });

    const username = localStorage.getItem("username") || "Anonymous";
    leaderboard.push({ name: username, score });
    leaderboard.sort((a, b) => b.score - a.score);
      document.getElementById("score").innerText = `Your score: ${score}/${questions.length}`;
    document.getElementById("quiz-section").style.display = "none";
    document.getElementById("score-section").style.display = "block";
  });
    document.getElementById("view-leaderboard").addEventListener("click", function () {
    const leaderboardBody = document.getElementById("leaderboard-body");
    leaderboardBody.innerHTML = leaderboard
      .map(
        (entry, index) =>
          `<tr>
            <td>${index + 1}</td>
            <td>${entry.name}</td>
            <td>${entry.score}</td>
          </tr>`
      )
      .join("");
  
    document.getElementById("score-section").style.display = "none";
    document.getElementById("leaderboard-section").style.display = "block";
  });
    document.getElementById("back-to-login").addEventListener("click", function () {
        document.getElementById("email").value = ""; 
        document.getElementById("name").value = ""; 
        document.getElementById("mailError").innerText = "";
        document.getElementById("nameError").innerText = "";
        document.getElementById("quiz-section").style.display = "none";
        document.getElementById("score-section").style.display = "none";
        document.getElementById("leaderboard-section").style.display = "none";
        document.getElementById("login-section").style.display = "flex";
        const quizRadioButtons = document.querySelectorAll("input[type=radio]");
        quizRadioButtons.forEach((radio) => (radio.checked = false)); 
  });
  