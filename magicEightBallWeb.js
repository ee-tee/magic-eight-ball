/* ---------------------------------------------------------------------------------------
    © 2022 - Web Project Series developed by ee-tee
--------------------------------------------------------------------------------------- *//*
/* ---------------------------------------------------------------------------------------
    Based on the CodeAcademy JavaScript Project: Magic Eight Ball
--------------------------------------------------------------------------------------- *//*
LEARN JAVASCRIPT
Magic Eight Ball

You’ve learned a powerful tool in JavaScript: control flow! It’s so powerful, in fact, that it can be used to tell someone’s fortune.
In this project we will build a Magic Eight Ball using control flow in JavaScript.
The user will be able to input a question, then our program will output a random fortune.

*//* -------------------------------------------------------------------------------------
    Web Project Overview
--------------------------------------------------------------------------------------- *//*
Now that I have built my JS magic eight ball, it's time to set up my fortune telling business. 
Presenting... Magic Mama the Mystic Fortune Teller at your service! 🔮✨

In this web edition, the user can access the fortune teller service through their browser. Tell me your name and any burning questions you have, and Magic Mama will read the stars and predict the future with the help of the magical eight ball.

!!Disclaimer!! 
This is just for entertainment purposes, please don't take the answers too seriously. 
Whether good or bad, life goes on so try again or move on and just do your best! 

Task Overview:
1) Get the user's name input --> set as username.
2) Get the user's question input and summon the magic eight ball.
3) The magic eight ball will generate a random number and return the corresponding answer.
4) The chat bubbles on the screen will also reflect the conversation in real time, 
    e.g. ask for name and question, display question entered, and display answer generated.

Now let's get started!

*//* -------------------------------------------------------------------------------------
    Script
--------------------------------------------------------------------------------------- */

/* ----- Magic Eight Ball ----- */

let textOuterCircle = document.getElementById('text-outer-circle-id');
let activateBallButton = document.getElementById("ask");

// Event listener for to get question from user and activate magic ball, triggers upon click.
activateBallButton.addEventListener('click', getQuestion);

// This is where the c̶o̶d̶i̶n̶g̶  magic happens..
function activateMagic() {

    let newEightBallText = "";
    let ballText = document.getElementById('eightball-text-id');

    // Generate random number between 1-20 for the magic eight ball result.
    let randomNumber = Math.floor(Math.random() * 20);

        // Activate ball motion animation
        textOuterCircle.classList.remove("animate-ball");
        ballText.classList.remove('animate-text');
       
        void textOuterCircle.offsetWidth;
        void ballText.offsetWidth;
     
        textOuterCircle.classList.add("animate-ball");
        ballText.classList.add('animate-text');
    
    // Set up magic eight ball result for each random number, currently there are 20 in the list.
    switch(randomNumber) {
        case 0:
            {newEightBallText='It is certain.'}         //For randomNumber = 0
            break;
        case 1:
            {newEightBallText='It is decidedly so.'}    //For randomNumber = 1
            break;
        case 2:
            {newEightBallText='Without a doubt.'}       //For ...
            break;
        case 3:
            {newEightBallText='Yes - definitely.'}
            break;
        case 4:
            {newEightBallText='You may rely on it.'}
            break;
        case 5:
            {newEightBallText='As I see it, yes.'}
            break;
        case 6:
            {newEightBallText='Most likely.'}
            break;
        case 7:
            {newEightBallText='Outlook good.'}
            break;
        case 8:
            {newEightBallText='Yes.'}
            break;
        case 9:
            {newEightBallText='Signs point to yes.'}
            break;
        case 10:
            {newEightBallText='Reply hazy, try again'}
            break;
        case 11:
            {newEightBallText='Ask again later.'}
            break;
        case 12:
            {newEightBallText='Better not tell you now.'}
            break;
        case 13:
            {newEightBallText='Cannot predict now.'}
            break;
        case 14:
            {newEightBallText='Concentrate and ask again.'}
            break;
        case 15:
            {newEightBallText='Don\'t count on it.'}
            break;
        case 16:
            {newEightBallText='My reply is no.'}
            break;
        case 17:
            {newEightBallText='My sources say no.'}
            break;
        case 18:
            {newEightBallText='Outlook not so good.'}
            break;
        case 19:
            {newEightBallText='Very doubtful.'}             //For randomNumber = 19
            break;
        default:
            {newEightBallText='You need to try harder.'}    //For randomNumber = 20
    }

    // Create setTimeout function to delay until animation reaches approx. 55%,
    // For magic eight ball text
    setTimeout(doSomething, 1550);
    function doSomething() {
        document.getElementById('eightball-text-id').innerHTML = newEightBallText;
    }

    // For fortune teller answer text
    setTimeout(tellAnswer, 1750);
    function tellAnswer() {
        let answer = newEightBallText;
        if (answer != null) {
            document.getElementsByClassName("tellerBubble")[0].innerHTML = answer;
            document.getElementsByClassName("tellerBubble")[1].innerHTML = answer;
        }
    }
}

/* ----- Chat Bubbles and Question Box ----- */

// 1) Window and fortune teller will prompt user to enter name on page launch. 
//    --> Name is required and cannot be empty, else repeat loop until some text is entered.
// 2) The name will be printed on user's username and chat bubble.
// 3) Fortune teller's chat bubble will change to ask user for their question.

function getUsername() {
    let username = prompt("Hello, what is your name?");
    while (username == null || username == "") {
        username = prompt("Hello, what is your name? (Required)");
    }
    welcome(username);
}

function welcome(username) {
    // Print username and chat bubbles
    document.getElementsByClassName("userName")[0].innerHTML = username;
    document.getElementsByClassName("userName")[1].innerHTML = username;
    document.getElementsByClassName("userBubble")[0].innerHTML = "Hi, I'm " + username;
    document.getElementsByClassName("userBubble")[1].innerHTML = "Hi, I'm " + username;
    document.getElementsByClassName("tellerBubble")[0].innerHTML = "What do you want to ask the stars?";
    document.getElementsByClassName("tellerBubble")[1].innerHTML = "What do you want to ask the stars?";
}

// 4) Get text value from question input field when user clicks on the "Ask Me" button.
// 5) Call limitWords function to check for input length, if there are more than 20 words the rest will be shortened to "…" to prevent overly long paragraph from going out of frame.
// 6) Check to ensure input value is not null, not undefined, not empty and does not contain only whitespaces.
// 7) Pass -> Proceed to print question input on user's chat bubble, exceute magic eight ball, and clear input field.
// 8) Fail -> Do nothing

function getQuestion() {
    let question = document.getElementById("question").value;
    question = limitWords(question, 20);
    // if (question != null && question != undefined && question != /\S/.test(question) && question.length > 1) {
    if (isNotEmpty(question) == true) {
        document.getElementsByClassName("userBubble")[0].innerHTML = question;
        document.getElementsByClassName("userBubble")[1].innerHTML = question;
        activateMagic();
        clearInput();
    }
}

/* ----- Other Functions ----- */

//To clear input field after submitting question
function clearInput() {
    question.value = "";
}

//Validation: To check for empty input field
function isNotEmpty(input) {
    if (input == null || input == undefined || input == /\S/.test(input) || input.length < 1) {
        return false;
    } 
    else return true;
}

//Validation: To check word limit
function limitWords(textToLimit, wordLimit) {
    let finalText = "";
    let text2 = textToLimit.replace(/\s+/g, ' ');
    let text3 = text2.split(' ');
    let numberOfWords = text3.length;

    let i = 0;
    if(numberOfWords > wordLimit)
    {
    for(i = 0; i < wordLimit; i++)
    finalText = finalText + " " +  text3[i] + " ";
    return finalText + "…";
    }
    else return textToLimit;
}

/* -------------------------------------------------------------------------------------
    The End - Hope you had fun!
--------------------------------------------------------------------------------------- */