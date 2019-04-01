var uppercase = "HELLO";
// Defines the global variable 'uppercase'
      // Assigns 'uppercase' the string 'HELLO' in all caps

var lowercase = "hello";
// Defines the global variable 'lowercase'
      // Assigns 'lowercase' the string 'hello' in lowercase

function shout(string) {
  return string.toUpperCase();
}
// 1. Defines the function 'shout' that will receive one argument and return it in all caps
      // 'shout' accepts one parameter, 'string'
// 2. 'shout' returns the entered string
      // The toUpperCase() function returns 'string' in all caps

function whisper(string){
  return string.toLowerCase();
}
// 1. Defines the function 'whisper' that will receive one argument and return it in lowercase
      // 'whisper' accepts one parameter, 'string'
// 2. Returns the entered string
      // The toLowerCase() function returns 'string' in lowercase

function logShout(string) {
 console.log(string.toUpperCase);
}
logShout('hello')
// 1. Defines the function 'logShout' that logs one
      // 'logShout' accepts no parameters
// 2. The function console.log tells 'logShout' to print the string "HELLO" in all caps

function logWhisper() {
 console.log("hello");
}
// 1. Defines the function 'logWhisper'
      // 'logWhisper' accepts no parameters
//2. The function console.log tells logWhisper to print the string "hello" in lowercase

function sayHiToGrandma(string) {
  if (string === lowercase) {
    return 'I can\'t hear you!';
  }
  else if (string === uppercase) {
    return "YES INDEED!";
  }
  else if (string === "I love you, Grandma.") {
    return "I love you, too.";
  }
}
//Defines the function 'sayHiToGrandma' that accepts one parameter, 'string'
//If the entered string is relationally equal to the 'lowercase' variable ('hello'), the function returns the string 'I can't hear you!'
//Otherwise, if the entered string is relationally equal to the 'uppercase' variable ('HELLO'), the function returns the string 'YES INDEED!'
//If the entered string is relationally equal to the string 'I love you, Grandma', the function returns the string 'I love you too.'