var userChoice = prompt('Do you choose rock, paper or scissors?');
var computerChoice = Math.random();
if (computerChoice < 0.33)
  {
    computerChoice = 'rock';
  }
  else if(computerChoice < 0.66)
    {
      computerChoice = 'paper';
    }
else
  {
    computerChoice = 'scissors';
  }
function compare(personChoice , robotChoice)
{
  if(personChoice === robotChoice)
    {
      console.log('Its a Tie!');
    }
  else if (personChoice === 'rock')
    {
      if(robotChoice === 'scissors'){
      console.log('Rock win!!');
    }
  else if(personChoice === 'rock'){
   console.log('Paper Wins');
    }
  } else if(personChoice === 'paper'){
    if (robotChoice === 'rock'){
      console.log('Paper Wins!');
    } else if (robotChoice === 'scissors'){
      console.log('Scissors Wins!');
    }
  } else if (personChoice === 'scissors'){
    if (robotChoice === 'rock'){
      console.log('Rock wins!');
    } else if (robotChoice === 'paper'){
      console.log('Scissors Wins!');
    }
  } else if (personChoice === 'bomb'){
    if (robotChoice === 'rock'){
      console.log('You win!!');
    }
  else if (robotChoice === 'scissors'){
    console.log('You win again!');
  } else {
    console.log('You win!!!!!!');
  }
}
}
compare(userChoice, computerChoice);