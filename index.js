// Write your code in this file!

function scuberGreetingForFeet(ride){
  if (ride <= 400){
    return 'This one is on me!'
  } else if (ride > 2000 && ride < 2500) {
    return 'I will gladly take your thirty bucks.'
  } else {
    return 'No can do.'
  }
};

function ternaryCheckCity(city){
  let rsp;
  city === 'NYC' ? rsp = 'Ok, sounds good.': rsp = 'No go.';
  return rsp;
}

function switchOnCharmFromTip(tip){
  switch(tip){
  case 'generous':
    return 'Thank you so much.'
    break;
  case 'not as generous':
    return 'Thank you.'
    break;
  case 'thanks for everything':
    return 'Bye.'
    break;
  }
};
