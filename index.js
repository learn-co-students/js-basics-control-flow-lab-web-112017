// Write your code in this file!

function scuberGreetingForFeet(amount) {
  if (amount <= 400) {
    return "This one is on me!";
  } else if (amount > 2500) {
    return "No can do."
  } else {
    return "I will gladly take your thirty bucks."
  }
}

function ternaryCheckCity(city) {
  if (city == "NYC") {
    return "Ok, sounds good.";
  } else {
    return "No go."
  }
}

function switchOnCharmFromTip(tip) {
  switch(tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye."
  }
}
