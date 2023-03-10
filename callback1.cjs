/* 
    Problem 1: Write a function that will return a particular board's information based on the boardID that is passed from the given list of boards in boards.json and then pass control back to the code that called it by using a callback function.
*/

const fs = require('fs');

function boardInformation(boardId, callback) {

    setTimeout(() => {

        fs.readFile('./boards.json', (error, data) => {

            if (error) {

                callback(error);

            } else {

                let information = JSON.parse(data.toString())

                let boardInformation = information.filter((element, index, array) => {

                    return element.id === boardId;

                });

                callback(null, boardInformation);

            }

        });

    }, 2 * 1000);

}

module.exports = boardInformation;