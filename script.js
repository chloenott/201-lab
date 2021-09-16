`use strict`
// Keep track of the number of correct guesses and the number of questions asked.
// Be sure to increment questionsAsked if any additional questions are added later on.
let correctCount = 0;
let questionsAsked = 0;
let userName
function question1To5(){
    
    // What is your name?
    let userName = prompt("What is your name?");
    if (typeof(userName) == 'string') {
        if (userName.length > 0) {
            alert("Welcome " + userName + "!");
        } else {
            alert("Welcome stranger!");
        }
    } else {
        alert("Welcome stranger!");
    }
    
    
    // Asks user the yes/no quesions. If correct, user is alerted then next question is asked.
    // Different alerts are shown depending on correct, incorrect, or invalid answers. 
    // Valid responses are yes/y and no/n. Not case sensitive. 
    // User can reattempt up to the guess limit.
    // User is not penalized for invalid responses.
    let questions = ['Are cats my favorite kind of pet?','Is watermelon not my favorite food?','Is my favorite color blue?','Do I enjoy listening to music?','Is Gundam Unicorn my favorite anime?'];
    let answers = ['yes','no','no','yes','yes'];
    
    // Generic messages for invalid input to yes/no answer questions:
    let requiresYesOrNo = "Invalid guess. Has to be yes/y or no/n answer.";
    let requiresResponse = "Guess cannot be left blank."
    
    // Variables for yes/no question loop.
    let alertResponse;
    let response;
    let validResponses = ['yes', 'y', 'no', 'n']
    
    // Question 1-5. Loop through the yes/no questions.
    for (let i = 0; i < questions.length; i++) {
        questionsAsked++;
    
        console.log(questions[i]);
        response = prompt(questions[i]);
    
        // User entered a response.
        if (response) {
            response = response.toLowerCase();
    
            // Correct guess
            if (response == answers[i] || response == answers[i][0]) {
                correctCount++;
                alertResponse = `Question ${i+1}: You were correct!`;
                console.log(alertResponse);
                alert(alertResponse);
                continue; // Go to next question when guessed correctly.
    
            // Incorrect guess
            } else if (
                    response == validResponses[0] || 
                    response == validResponses[1] ||
                    response == validResponses[2] ||
                    response == validResponses[3]
                    ) {
                alertResponse = `Question ${i+1}: That is incorrect.`;
            
            // Invalid guess
            } else {
                alertResponse = requiresYesOrNo;
                i--; // Decrement index to so the question is asked again. (Workaround...)
                questionsAsked--; // (Workaround...)
            }
    
        // Guess cannot be blank
        } else {
            alertResponse = requiresResponse;
            i--; // Decrement index to so the question is asked again. (Workaround...)
            questionsAsked--; // (Workaround...)
        }
    
        console.log(alertResponse);
        alert(alertResponse);
    }
}

function question6(){
    // Question 6: guess the random number 1-10.
    let randomNum = Math.floor(Math.random() * 10) + 1;
    let question = 'Guess a number between 1 and 10.';
    let requires1To10 = `Requires a numeric response between 1-10.`;
    let guessCount = 1;
    let guessLimit = 4;
    questionsAsked++;
    
    // Question 6. Allow multiple attempts up to the guessLimit.
    while (guessCount <= guessLimit) {
        console.log(question);
        response = Number(prompt(question));
        
        // Correct guess
        if (response == randomNum) {
            correctCount++;
            alertResponse = `That is correct! You had ${guessLimit - guessCount} guesses remaining.`;
            console.log(alertResponse);
            alert(alertResponse);
            break;
        
        // Valid guess but guess was too low
        } else if (response >= 1 && response < randomNum) {
            if (guessCount == guessLimit) {
                alertResponse = `Guess was incorrect. No more guesses remaining. Answer was ${randomNum}.`
            } else {
                alertResponse = `Guess was too low. Guesses remaining: ${guessLimit - guessCount}`;
            }
            guessCount++; // Only want to penalize valid responses.
        }
    
        // Valid guess but guess was too high
        else if (response <= 10 && response > randomNum) {
            if (guessCount == guessLimit) {
                alertResponse = `Guess was incorrect. No more guesses remaining. Answer was ${randomNum}.`
            } else {
                alertResponse = `Guess was too high. Guesses remaining: ${guessLimit - guessCount}`;
            }
            guessCount++; // Only want to penalize valid responses.
        }
    
        // Invalid guess
        else {
            alertResponse = requires1To10; // Do not penalize invalid responses.
        }
    
        // Code only reaches here if correct guess wasn't given.
        console.log(alertResponse);
        alert(alertResponse);
    }
}


function question7(){
    questionsAsked++;
    let guessCount = 1;
    let guessLimit = 6;
    let question = 'What is one of my favorite movies/anime/series?'
    let response
    let alertResponse
    let answers = [
        'Gundam Unicorn',
        'Mob Psycho 100',
        'The Fountain',
        'Spirited Away',
        'Promare',
        'Batman Trilogy',
        'Star Trek TNG',
        'Star Trek TOS',
        'The Mandalorian',
        'Wonder Woman (2017)'
        ]
    
    question7:
    while (guessCount <= guessLimit) {
        console.log(question);
        response = prompt(question);
    
        // User entered a response
        if (response) {
            response = response.toLowerCase();
    
            // Check if guess is one of the possible answers.
            for (let i = 0; i < answers.length; i++) {
    
                // Correct guess was found in array of possible answers.
                if (response == answers[i].toLowerCase()) {
                    correctCount++;
                    alertResponse = `${answers[i]} is one of my favorites! You had ${guessLimit - guessCount} guesses remaining. Possible answers were: ${answers}`;
                    console.log(alertResponse);
                    alert(alertResponse);
                    break question7; // No need to check for other correct guesses in array.
                }
            }
    
            // Code only reaches here if guess was not found in array. Guess was not one of the possible answers.
            if (guessCount == guessLimit) {
                alertResponse = `Sorry! You have run out of attempts. Possible answers were: ${answers}`
            } else {
                alertResponse = `Nope! Guess again! Guesses left: ${guessLimit - guessCount}`;
            }
            guessCount++;
    
        // Invalid guess
        } else {
            alertResponse = requiresResponse; // Do not penalize invalid responses.
        }
    
        // Code only reaches here if correct guess wasn't given.
        console.log(alertResponse);
        alert(alertResponse);
    }
    
    // Alert final message.
    console.log(`You got ${correctCount} of ${questionsAsked} correct!`);
    if (typeof(userName) == 'string') {
        if (userName.length > 0) {
            alert(`You got ${correctCount} of ${questionsAsked} correct! Thank you for playing this guessing game, ${userName}!`);
        } else {
            alert(`You got ${correctCount} of ${questionsAsked} correct! Thank you for playing this guessing game`);
        }
    } else {
        alert(`You got ${correctCount} of ${questionsAsked} correct! Thank you for playing this guessing game`);
    }
}

question1To5();
question6();
question7();