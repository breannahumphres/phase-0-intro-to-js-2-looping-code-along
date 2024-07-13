// Code your solutions in this file
/* const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    
  }

  return gifts;
}

wrapGifts(gifts); */

function writeCards(stringNames, event) {
    const messages = []
    for (let i = 0; i < stringNames.length; i++) {
        const message = `Thank you, ${stringNames[i]}, for the wonderful ${event} gift!`;
        messages.push(message);
    }
    return messages;
} 

function countDown(number) {
    while (number >= 0) {
        console.log(number--);
    }
}
