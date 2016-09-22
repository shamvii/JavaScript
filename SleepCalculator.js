function monday()
{
  var result = prompt('How many hours did you sleep on Monday?');
  return +result;
}
function tuesday(){
   var result = prompt('How many hours did you sleep on Tuesday?');
  return +result;
}
function wednesday(){
   var result = prompt('How many hours did you sleep on Wednesday?');
  return +result;
}
function thursday(){
   var result = prompt('How many hours did you sleep on Thursday?');
  return +result;
}
function friday(){
   var result = prompt('How many hours did you sleep on Friday?');
  return +result;
}
function saturday(){
   var result = prompt('How many hours did you sleep on Saturday?');
  return +result;
}
function sunday(){
   var result = prompt('How many hours did you sleep on Sunday?');
  return +result;
}
function sleepDebtCalculator()
{
  var idealSleep = prompt('How many hours of sleep is ideal for you in a night?');
  var idealHoursPerWeek = idealSleep * 7;
  var actualHoursPerWeek = monday() + tuesday() + wednesday() + thursday() + friday() + saturday() + sunday();
  
  if (idealHoursPerWeek === actualHoursPerWeek){
    console.log('You slept the perfect amount!!');
  } else if (idealHoursPerWeek < actualHoursPerWeek){
    console.log('You have been over sleeping!!');
    console.log('You got' + (actualHoursPerWeek - idealHoursPerWeek) + 'hours more than the ideal');
  } else {
    console.log('You are sleep deficit!!');
    console.log('You got' + '' + (idealHoursPerWeek - actualHoursPerWeek) + '' + 'hours of sleep only! Make sure you take rest');
  }
}
sleepDebtCalculator();