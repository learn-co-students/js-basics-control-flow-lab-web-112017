// Write your code in this file!
    //
    // scuberGreetingForFeet() — Use if and else if statements to return the correct greeting based on the distance the passenger desires to travel.

function scuberGreetingForFeet(ride) {
  if (ride > 2500) {
    return 'No can do.';
  } else if (ride > 2000) {
    return 'I will gladly take your thirty bucks.';
  } else if (ride <= 400) {
    return 'This one is on me!';
  }
}

    // ternaryCheckCity() — Use a ternary operator to return the correct response based on the desired destination of the passenger.
function ternaryCheckCity(city) {
  if (city === 'NYC') {
    return 'Ok, sounds good.';
  } else {
    return 'No go.';
  }
}

function switchOnCharmFromTip(tip){
  switch (tip){
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default:
      return 'Bye.'
  }

}


    // switchOnCharmFromTip() — Use a switch statement to return a different response based on the generosity of the passenger's tip.
