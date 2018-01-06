// Write your code in this file!

function scuberGreetingForFeet(num) {
  if (num > 2500) {
      return 'No can do.';
  } else if (num > 400 && num > 2000 && num < 2500) {
      return 'I will gladly take your thirty bucks.';
  } else {
      return 'This one is on me!';
  }
}

// Use if and else if statements to return the correct greeting based on the distance the passenger desires to travel.
function ternaryCheckCity(city) {
  return (city === 'NYC') ? 'Ok, sounds good.' : 'No go.';
}
// Use a ternary operator to return the correct response based on the desired destination of the passenger.
function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return "Thank you so much.";
      break;
    case 'not as generous':
      return "Thank you.";
      break;
    default:
      return "Bye.";
      break;
  }
}
// Use a switch statement to return a different response based on the generosity of the passenger's tip.
