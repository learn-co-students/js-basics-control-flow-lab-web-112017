// Write your code in this file!
function scuberGreetingForFeet(feet) {
  let price = 0;
  if (feet <= 400) {
    price = 0
    return "This one is on me!"
  } else if (feet >= 2000 && feet <= 2500) {
    let price = 30;
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do."
  }
}

function ternaryCheckCity(city) {
  // let isNewYork = 'NYC';
  return (city === 'NYC' ? 'Ok, sounds good.' : 'No go.')
}

function switchOnCharmFromTip(tip) {
  //let response;

  switch(tip) {
    case 'generous':
    return 'Thank you so much.';
    break;
  case 'not as generous':
    return 'Thank you.';
    break;
  default:
    return 'Bye.';
    break;
  }

}
