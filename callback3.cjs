/* 
    Problem 3: Write a function that will return all cards that belong to a particular list based on the listID that is passed to it from the given data in cards.json. Then pass control back to the code that called it by using a callback function.
*/

const fs = require('fs');

function allCardsBelongsToListId(listID, callBack) {

    setTimeout(() => {

        fs.readFile('./cards.json', (error, data) => {

            if (error) {

                callBack(error);

            } else {

                let cardsData = JSON.parse(data.toString());

                callBack(null, cardsData[listID]);

            }

        });

    }, 2 * 1000);

}

module.exports = allCardsBelongsToListId;