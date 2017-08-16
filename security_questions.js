
// Security Questions

// Work in the security_questions.js file.

// Create an array called securityQuestions. Each element of securityQuestions will be an object with two keys: question and expectedAnswer.

// Populate (fill) securityQuestions with at least three such objects. Feel free to just make them up. For example, one security question object might be:

// { question: "What was your first pet's name?", expectedAnswer: "FlufferNutter" }
// Write code that goes through each of the security questions in your array doing the following:

// use window.prompt (short name: prompt) to create a popup in the browser with the question
// check whether the user's input matches the expected answer
// * if the answer does match, ask the next question * if the answer doesn't match, stop asking questions and pop up an alert message.


let securityQuestions = [
{question: "what is your favorite animal?", expectedAnswer:"dog"},
{question: "what is your favorite movie?", expectedAnswer:"taken"}, 
{question: "what is your favorite color?", expectedAnswer:"blue"}
];


const secQ=()=>{

	for(let i=0; i<securityQuestions.length; i++){

		let ans =prompt(securityQuestions[i].question);
		if(ans!==securityQuestions[i].expectedAnswer){
			alert("Incorrect answer!");
			break;
		}else{
			console.log("Correct answer!");
		}

	}
};
secQ();

