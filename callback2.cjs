/* 
    Problem 2: Write a function that will return all lists that belong to a board based on the boardID that is passed to it from the given data in lists.json. Then pass control back to the code that called it by using a callback function.
*/

const fs = require('fs');

function allListBelongToBoardId(boardID, callBack) {

    setTimeout(() => {

        fs.readFile('./lists.json', (error, data) => {

            if (error) {

                callBack(error);

            } else {

                let allLists = JSON.parse(
                    data.toString()
                );

                callBack(null, allLists[boardID]);

            }

        });

    }, 2 * 1000);

}

module.exports = allListBelongToBoardId;