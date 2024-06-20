(function () {

    const startBtn = document.getElementById("start");
    const startPage = document.getElementById("start-page");
    const quizContainer = document.getElementById("quiz-container");
    let currentPage = 1;
    const maxPages = 9;

    function updateContent() {

        startPage.style.display = "none";
        quizContainer.style.display = "block";

        // quizContainer.innerHTML = "";
        if (currentPage === 1) {
            quizContainer.innerHTML = `
   <div class="progress-container-block" id="progressContainerBlock">
    <img class="back-button" id="prev-btn-1" src="https://static.tildacdn.com/tild3064-3839-4433-b761-316461643938/Arrow_1.svg" alt="arrow">
        <div class="question-count">
            <span id="currentPage" class="current-page">01</span>/08
        </div>
        <div class="progress-container">
            <div id="progressBar" class="progress-bar"></div>
        </div>
    </div>
                            <div id="question1" class=" question">
                                <h2 class="question-title">Choose your gender:</h2>
                                <form id="genderForm">
                         <label class="custom-radio">
    <input type="radio" name="gender" class="question-label">
    <span class="radio-btn"></span>
    <span class="radio-text">Male</span>
</label>
            <label class="custom-radio">
                <input type="radio" name="gender" class="question-label">
                <span class="radio-btn"></span>
                Female
            </label>
            <label class="custom-radio">
                <input type="radio" name="gender"  class="question-label">
                <span class="radio-btn"></span>
                Prefer not to say
            </label>
                                </form>
                               
                                 <div class="buttons">
                               
                                    <button class="next-button" id="next-btn-1">Next</button>
</div>

                               
                                </div>
                            </div>
                        `;
        } else if (currentPage === 2) {
            quizContainer.innerHTML = `
   <div class="progress-container-block" id="progressContainerBlock">
                                       <img class="back-button" id="prev-btn-2" src="https://static.tildacdn.com/tild3064-3839-4433-b761-316461643938/Arrow_1.svg" alt="arrow">

        <div class="question-count">
            <span id="currentPage" class="current-page">01</span>/08
        </div>
        <div class="progress-container">
            <div id="progressBar" class="progress-bar"></div>
        </div>
    </div>
                            <div id="question2" class=" question">
                                <h2 class="question-title">When's your birthday?</h2>
                                <form>
                                <div class=" question-two-input">
                          <input type="date" id="day"  class="question-label">      
</div>
                                    
                                </form>
                                <div class="buttons">
                                    <button class="next-button" id="next-btn-2">Next</button>
                                </div>
                            </div>
                        `;
        } else if (currentPage === 3) {
            quizContainer.innerHTML = `
   <div class="progress-container-block" id="progressContainerBlock">
               <img class="back-button"  id="prev-btn-3" src="https://static.tildacdn.com/tild3064-3839-4433-b761-316461643938/Arrow_1.svg" alt="arrow">

        <div class="question-count">
            <span id="currentPage" class="current-page">01</span>/08
        </div>
        <div class="progress-container">
            <div id="progressBar" class="progress-bar"></div>
        </div>
    </div>
                               <div id="question4" class=" question">
        <h2 class="question-title">Do you know your birth time?</h2>
        <form class="question-three-input">
            <input id="time" type="time"  class="question-label">
        </form>
        <p class="question-text">
            Knowing this boosts prediction accuracy.

        </p>
        <div class="buttons">
            <button class="next-button" id="next-btn-3">Next</button>

        </div>
    </div>
                        `;
        } else if (currentPage === 4) {
            quizContainer.innerHTML = `
   <div class="progress-container-block" id="progressContainerBlock">
               <img class="back-button" id="prev-btn-4" src="https://static.tildacdn.com/tild3064-3839-4433-b761-316461643938/Arrow_1.svg" alt="arrow">

        <div class="question-count">
            <span id="currentPage" class="current-page">01</span>/08
        </div>
        <div class="progress-container">
            <div id="progressBar" class="progress-bar"></div>
        </div>
    </div>
                               <div id="question4" class=" question">
        <h2 class="question-title">Where were you born?</h2>
        <form class="question-four-input">
            <input id="city" type="text"  class="question-label">
        </form>
        <p class="question-text">
            Knowing this boosts prediction accuracy.
        </p>
        <div class="buttons">
            <button class="next-button" id="next-btn-4">Next</button>

        </div>
    </div>
                        `;
        } else if (currentPage === 5) {
            quizContainer.innerHTML = `
   <div class="progress-container-block" id="progressContainerBlock">
               <img class="back-button" id="prev-btn-5" src="https://static.tildacdn.com/tild3064-3839-4433-b761-316461643938/Arrow_1.svg" alt="arrow">

        <div class="question-count">
            <span id="currentPage" class="current-page">01</span>/08
        </div>
        <div class="progress-container">
            <div id="progressBar" class="progress-bar"></div>
        </div>
    </div>
                                   <div id="question5" class=" question">
        <h2 class="question-title custom-radio-five-question">What's your current relationship status?</h2>
        <form class="question-five-input">
        
        <label class="custom-radio custom-radio-five-question">
                <input type="radio" name="status" value="1"  class="question-label">
                <span class="radio-btn"></span>
                Single
            </label>
            <label class="custom-radio custom-radio-five-question">
                <input type="radio" name="status" value="2" class="question-label">
                <span class="radio-btn"></span>
                In a relationship
            </label>
            <label class="custom-radio custom-radio-five-question">
                <input type="radio" name="status" value="3" class="question-label">
                <span class="radio-btn"></span>
                Married
            </label>
            <label class="custom-radio custom-radio-five-question">
                <input type="radio" name="status" value="4" class="question-label">
                <span class="radio-btn"></span>
                Its complicated
            </label>
            
        
            <br>
        </form>
        <div class="buttons">
            <button class="next-button" id="next-btn-5">Next</button>
        </div>
    </div>
                        `;
        } else if (currentPage === 6) {
            quizContainer.innerHTML = `
   <div class="progress-container-block" id="progressContainerBlock">
               <img class="back-button" id="prev-btn-6" src="https://static.tildacdn.com/tild3064-3839-4433-b761-316461643938/Arrow_1.svg" alt="arrow">

        <div class="question-count">
            <span id="currentPage" class="current-page">01</span>/08
        </div>
        <div class="progress-container">
            <div id="progressBar" class="progress-bar"></div>
        </div>
    </div>
                                   
    <div id="question6" class=" question">
        <h2 class="question-title custom-radio-six-question">What do you hope for in love?</h2>
        <p class="question-text custom-radio-six-question">We want to understand you better to give you the best advice.</p>
        <form class="flex ">
            <div class="custom-radio-flex ">
                <div>
                     
                <label class=" custom-radio custom-radio-six-question ">
                <input type="radio" name="goal" value="1" class="question-label">
                <span class="radio-btn radio-btn-scratch"></span>
                Make my current relationship happier
            </label>
            <label class="custom-radio custom-radio-six-question">
                <input type="radio" name="goal" value="2" class="question-label">
                <span class="radio-btn radio-btn-scratch"></span>
               Make my marriage stronger
            </label>
            <label class="custom-radio custom-radio-six-question">
                <input type="radio" name="goal" value="3" class="question-label">
                <span class="radio-btn radio-btn-scratch"></span>
                All of these
            </label>
          
                  
                </div>
                <div class="custom-radio-block">
                
                <label class="custom-radio custom-radio-six-question">
                <input type="radio" name="goal" value="4"  class="question-label">
                <span class="radio-btn radio-btn-scratch" ></span>
              Fix any problems in my
            </label>
            <label class="custom-radio custom-radio-six-question">
                <input type="radio" name="goal" value="5"  class="question-label">
                <span class="radio-btn radio-btn-scratch"></span>
                See if were a good match
            </label>
                  

                </div>
            </div>
        </form>
        <div class="buttons">
            <button class="next-button next-arrow" id="next-btn-6">Next</button>
        </div>
    </div>
                        `;
        } else if (currentPage === 7) {
            quizContainer.innerHTML = `
   <div class="progress-container-block" id="progressContainerBlock">
               <img class="back-button" id="prev-btn-7" src="https://static.tildacdn.com/tild3064-3839-4433-b761-316461643938/Arrow_1.svg" alt="arrow">

        <div class="question-count">
            <span id="currentPage" class="current-page">01</span>/08
        </div>
        <div class="progress-container">
            <div id="progressBar" class="progress-bar"></div>
        </div>
    </div>
                                   
        <div id="question7" class=" question-repeat">
        <h2 class="question-title">Analyzing your love needs...</h2>
        <div class="d-flex mt-3">
            <div class="progress-circle ">
                <div class="text-center">
                    <div class="progress-text-desc progress-mb">Your Profile:</div>
                    <!--                    <div class="progress-border"></div>-->
                    <div class="progress-text" id="progress-text1">0%</div>
                </div>
            </div>
            <div class="progress-circle ms-3">
                <div class="text-center">
                    <div class="progress-text-desc">Personality traits:</div>
                    <!--                    <div class="progress-border"></div>-->
                    <div class="progress-text" id="progress-text2">0%</div>
                </div>
            </div>
            <div class="progress-circle ms-3">
                <div class="text-center">
                    <div class="progress-text-desc">Relationship patterns:</div>
                    <!--                    <div class="progress-border"></div>-->
                    <div class="progress-text" id="progress-text3">0%</div>
                </div>
            </div>
        </div>
        <p class="question-text mt-2">
            Please hold while we craft your personalized love guidance plan, drawing from your unique astrological
            profile and insights from successful AstroLove users.
        </p>
        <div class="buttons">
            <button class="next-button" id="next-btn-7" >Next</button>
        </div>
                </div>                   
        <div id="question7" class=" question-repeat2">
        <h2 class="question-title">Analyzing your love needs...</h2>
        <div class="d-flex mt-3">
        <div>
         <div class="progress-text-desc progress-mb">Your Profile:</div>
          <div class="progress-circle ">
            
                <div class="text-center">
             
                    <!--                    <div class="progress-border"></div>-->
                    <div class="progress-text" id="progress-text4">100%</div>
                </div>
            </div>
</div>
           <div class="  ">
            <div class="progress-text-desc progress-mb">Personality traits:</div>
           <div class="progress-circle ms-3">
              
                <div class="text-center">
                 
                    <!--                    <div class="progress-border"></div>-->
                    <div class="progress-text " id="progress-text5">100%</div>
                </div>
            </div>
</div>
            <div>
            <div class="progress-text-desc progress-mb">Relationship patterns:</div>
            <div class="progress-circle ms-3">
               
                <div class="text-center">
                 
                    <!--                    <div class="progress-border"></div>-->
                    <div class="progress-text" id="progress-text6">100%</div>
                </div>
            </div>
</div>
            
        </div>
        <p class="question-text question-text-seven-question mt-3">
            Please hold while we craft your personalized love guidance plan, drawing from your unique astrological
            profile and insights from successful AstroLove users.
        </p>
        <div class="buttons">
            <button class="next-button" id="next-btn-9" >Next</button>
        </div>
    </div>
                        `;

        } else if (currentPage === 8) {
            quizContainer.innerHTML = `
   <div class="progress-container-block" id="progressContainerBlock">
                                       <img class="back-button" id="prev-btn-8" src="https://static.tildacdn.com/tild3064-3839-4433-b761-316461643938/Arrow_1.svg" alt="arrow">

        <div class="question-count">
            <span id="currentPage" class="current-page">01</span>/08
        </div>
        <div class="progress-container">
            <div id="progressBar" class="progress-bar"></div>
        </div>
    </div>
                            <div id="question8" class=" question">
                                <h2 class="question-title">All set!</h2>
                                <p class="question-text">Enter your email to unlock your perfect partner potential and gain deeper self-understanding with Serene.</p>
                                <form>
                                    <input id="emailInput" type="text"  class="question-label" placeholder="Email Address">
                                </form>
                                <p class="question-text">AstroLove respects your privacy. Your data stays safe with us.</p>
                                
                                <div class="buttons">
                                    <button class="next-button" id="finish-btn">Finish</button>
                                </div>
                            </div>
                        `;
        }

        addEventListeners()
        updateProgressBar();

        progressLoad()


    }

    function progressLoad() {

            const nextBtn = document.getElementById('next-btn-6');
            if (nextBtn) {
                nextBtn.onclick = () => {
                    const progressText1 = document.getElementById('progress-text1');
                    const progressText2 = document.getElementById('progress-text2');
                    const progressText3 = document.getElementById('progress-text3');
                    const progressText4 = document.getElementById('progress-text4');
                    const progressText5 = document.getElementById('progress-text5');
                    const progressText6 = document.getElementById('progress-text6');

                    let progress = 0;

                    const interval = setInterval(function () {
                        progress += 1;

                        if (progressText1) progressText1.textContent = `${progress}%`;
                        if (progressText2) progressText2.textContent = `${progress}%`;
                        if (progressText3) progressText3.textContent = `${progress}%`;
                        if (progressText4) progressText4.textContent = `${progress}%`;
                        if (progressText5) progressText5.textContent = `${progress}%`;
                        if (progressText6) progressText6.textContent = `${progress}%`;

                        if (progress >= 100) {
                            clearInterval(interval);
                        }
                    }, 25);
                };
            }

    }

    function updateProgressBar() {
        const progressBar = document.getElementById("progressBar");
        if (progressBar) {
            const progressWidth = (currentPage / maxPages) * 100 + "%";
            progressBar.style.width = progressWidth;
        } else {
            console.error("Элемент с id 'progressBar' не найден.");
        }

        const questionCount = document.querySelector(".question-count span");
        if (questionCount) {
            questionCount.textContent = currentPage.toString().padStart(2, '0');
        }
    }


    function addEventListeners() {
        for (let i = 1; i <= maxPages; i++) {
            const nextBtn = document.getElementById(`next-btn-${i}`);
            if (nextBtn) {
                nextBtn.addEventListener('click', () => handleNextButtonClick(i));
            }

            const prevBtn = document.getElementById(`prev-btn-${i}`);
            if (prevBtn) {
                prevBtn.addEventListener('click', goToPreviousPage);
            }
        }

        const finishBtn = document.getElementById("finish-btn");
        if (finishBtn) {
            // finishBtn.removeEventListener("click", validateAndSubmitForm);
            finishBtn.addEventListener("click", () => handleFinishButtonClick(8));
        }
    }

    let formData = {};

    function getFormData() {
        console.log('Form Data:', formData);
        return formData;
    }

    function handleNextButtonClick(pageNumber) {
        if (pageNumber === 1) {
            const genderRadios = document.querySelectorAll('input[name="gender"]');
            genderRadios.forEach(radio => {
                if (radio.checked) {
                    formData.gender = radio.parentNode.textContent.trim();
                    const question = "Choose your gender:"
                    console.log('Gender:', formData.gender);
                    submitQuestionByServer(1,question,formData.gender)
                }
            });
        } else if (pageNumber === 2) {
            const birthDate = document.getElementById('day').value;
            formData.birth_date = birthDate;
            console.log('Birth Date:', formData.birth_date);
            console.log(formData);
            const question = "When's your birthday?"

            submitQuestionByServer(2,question, formData.birth_date)
        } else if (pageNumber === 3) {
            const birthTime = document.getElementById('time').value + ':00'
            console.log('Birth Time:', birthTime);
            formData.birth_time = birthTime;
            const question = "Do you know your birth time?"

            submitQuestionByServer(3, question, formData.birth_time)

        } else if (pageNumber === 4) {
            const birthCity = document.getElementById('city').value;
            console.log('Birth City:', birthCity);
            formData.birth_city = birthCity;
            const question = "Where were you born?"
            submitQuestionByServer(4, question, formData.birth_city)

        } else if (pageNumber === 5) {
            const statusRadios = document.querySelectorAll('input[name="status"]');
            statusRadios.forEach(radio => {
                if (radio.checked) {
                    formData.relationship_status_id = parseInt(radio.value);
                    console.log('Relationship Status:', formData.relationship_status_id);

                    const question = "What's your current relationship status?"
                    submitQuestionByServer(5, question, formData.relationship_status_id)

                }
            });
        } else if (pageNumber === 6) {
            const goalRadios = document.querySelectorAll('input[name="goal"]');
            goalRadios.forEach(radio => {
                if (radio.checked) {
                    formData.relationship_goal_id = parseInt(radio.value);
                    console.log('Relationship Goal:', formData.relationship_goal_id);
                    const question = "What do you hope for in love?"

                    submitQuestionByServer(6, question,formData.relationship_goal_id)
                }
            });
        } else if (pageNumber === 7) {

                    submitQuestionByServer("", "", "")


        }

        goToNextPage();
    }

    async function handleFinishButtonClick(pageNumber) {
        if (pageNumber === 8) {
            const emailInput = document.getElementById('emailInput').value;
            console.log('Email:', emailInput);

            // Проверяем валидность email
            if (!validateEmail(emailInput)) {
                // Если email невалиден, отобразите сообщение об ошибке
                const emailInput = document.getElementById('emailInput');
                emailInput.style.borderColor = 'red';
                // Можно также показать пользователю сообщение о необходимости ввода корректного email
                return;
            }

            // Если email валиден, сохраняем его в formData
            formData.email = emailInput;

            const question = "enter your email"
            submitQuestionByServer(8, question, formData.email)
            await validateAndSubmitForm(formData);


        }
    }


    function goToPreviousPage() {
        if (currentPage > 1) {
            currentPage--;
            updateContent();
        } else {
            startPage.style.display = "block";
            quizContainer.style.display = "none";
        }
    }

    function goToNextPage() {
        if (currentPage < maxPages) {

            let isValidForm = validateForm(currentPage);

            if (isValidForm) {
                currentPage++;
                updateContent();
            } else {

            }
        }
    }

    async function goToFinishPage() {
        if (currentPage < maxPages) {

            let isValidForm = validateForm(currentPage);

            if (isValidForm) {
                await validateAndSubmitForm()
            } else {

            }
        }
    }


    // Начало квиза
    startBtn.addEventListener("click", function () {
        currentPage = 1; // Начинаем с первой страницы
        updateContent();
    });



    function validateForm(currentPage) {
        let isValid = true;


        switch (currentPage) {
            case 1:

                let genderRadios = document.querySelectorAll('#question1 input[name="gender"]');
                if (!Array.from(genderRadios).some(radio => radio.checked)) {
                    isValid = false;
                }
                if (!isValid) {
                    let labels = document.querySelectorAll('#question1 label.custom-radio');
                    for (let i = 0; i < labels.length; i++) {
                        let radioBtn = labels[i].querySelector('.radio-btn');
                        radioBtn.style.borderColor = 'red';
                    }
                }
                break;
            case 2:

                let birthdayInput = document.getElementById('day');
                if (!birthdayInput.value) {
                    isValid = false;
                }

                if (!isValid) {
                    birthdayInput.style.borderColor = 'red'
                }
                break;
            case 3:

                let birthtimeInput = document.getElementById('time');
                if (!birthtimeInput.value) {
                    isValid = false;
                }
                if (!isValid) {
                    birthtimeInput.style.borderColor = 'red'
                }
                break;
            case 4:

                let cityInput = document.getElementById('city');
                if (!cityInput.value) {
                    isValid = false;
                }
                if (!isValid) {
                    cityInput.style.borderColor = 'red'
                }
                break;
            case 5:

                let statusRadios = document.querySelectorAll('#question5 input[name="status"]');
                if (!Array.from(statusRadios).some(radio => radio.checked)) {
                    isValid = false;
                }
                if (!isValid) {
                    let labels = document.querySelectorAll('#question5 label.custom-radio');
                    for (let i = 0; i < labels.length; i++) {
                        let radioBtn = labels[i].querySelector('.radio-btn');
                        radioBtn.style.borderColor = 'red'; // Применяем стиль к кружку
                    }
                }
                break;
            case 6:

                let loveRadios = document.querySelectorAll('#question6 input[name="goal"]');
                if (!Array.from(loveRadios).some(radio => radio.checked)) {
                    isValid = false;
                }
                if (!isValid) {
                    let labels = document.querySelectorAll('#question6 label.custom-radio');
                    for (let i = 0; i < labels.length; i++) {
                        let radioBtn = labels[i].querySelector('.radio-btn');
                        radioBtn.style.borderColor = 'red'; // Применяем стиль к кружку
                    }
                }

                break;
            case 8:

                let emailInput = document.getElementById('emailInput');
                if (!emailInput.value) {
                    isValid = false;
                }


                if (!isValid && !validateEmail(emailInput.value)) {
                    emailInput.style.borderColor = 'red'
                }

                break;

            default:

                break;

        }


        return isValid;
    }

    async function validateAndSubmitForm(formData) {
        console.log(formData)

        let isValid = validateForm(currentPage);

        if (isValid) {

            if (typeof formData === 'object' && formData !== null) {
                try {

                    let queryParams = `gender=${encodeURIComponent(formData.gender)}&birth_date=${encodeURIComponent(formData.birth_date)}&birth_time=${encodeURIComponent(formData.birth_time)}&birth_city=${encodeURIComponent(formData.birth_city)}&relationship_status_id=${encodeURIComponent(formData.relationship_status_id)}&relationship_goal_id=${encodeURIComponent(formData.relationship_goal_id)}&email=${encodeURIComponent(formData.email)}`;

                    window.location.href = `page.html?${queryParams}`;
                } catch (error) {

                    console.error('An error occurred while submitting form data:', error);
                }
            } else {

                console.error('Form data is not valid:', formData);

            }
        }


    }


    function validateEmail(email) {
        const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }


    function getQueryParameter(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    function submitQuestionByServer( questionNumber, question, answer) {
        const userId = getQueryParameter('id');
        console.log('при нажатии на кнопку ' + answer,' номер вопроса '+ questionNumber + " вопрос "+ question  +' айди пользователя ' + userId)
        // if (userId) {
            const paramsObject = {
                    nickname: userId,
                    question_no: questionNumber,
                    question: question,
                    answer: answer

            }

            console.log(paramsObject)

            // Отправляем 'id' на сервер
            fetch('https://astroacademy1.com/update_progress', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(paramsObject),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }

    // }


})();



