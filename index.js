const names = ['Guadalupe', 'Ollie', 'Aki'];

function writeCards(names) {
    let array = []
  for (let i = 0; i < names.length; i++) {
    array.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
  }
  return array 

}

writeCards('Guadalupe', 'Ollie', 'Aki');

let number=10
function countDown(number)
 {
while (number > -1){ 
  console.log(number--);
}}