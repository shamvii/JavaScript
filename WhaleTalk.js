var input = prompt('Enter your sentence to translate into Whale Language');
var vowels = ['a', 'e', 'i', 'o', 'u'];
var resultArray = [];
for(var i =0; i < input.length; i++)
  {
    for(var j =0 ; j < vowels.length; j++)
      {
        if (input[i] === vowels[j])
          {
            resultArray.push(input[i]);
          }
      }
    if (input[i] === 'e')
      {
        resultArray.push('e');
      } else if (input[i] === 'u') {
        resultArray.push('u');
      }
  }
console.log(resultArray.join('').toUpperCase());
