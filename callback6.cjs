/* 
    Problem 6: Write a function that will use the previously written functions to get the following information. You do not need to pass control back to the code that called it.

    Get information from the Thanos boards
    Get all the lists for the Thanos board
    Get all cards for all lists simultaneously
*/

function usingPreviouslyWrittenFunction(thanosId, thonasBoard) {

    const boardInformation = require('./callback1.cjs');

    const allListBelongToBoardId = require('./callback2.cjs');

    const allCardsBelongsToListId = require('./callback3.cjs');

    setTimeout(() => {

        boardInformation(thanosId, (error, data) => {
            if (error) {

                console.error(error);

            } else {

                console.log('Information returned successfully');
                console.log(data);

            }
            
        });
        allListBelongToBoardId(thonasBoard, (error, data) => {
            if (error) {

                console.error(error);

            } else {

                console.log('Information returned successfully');
                console.log(data);

                //Deleting 6th element because it is not available in the list.
                data.pop();

                data.forEach((element, index, array) => {

                    allCardsBelongsToListId(element.id, (error, data) => {
                        if (error) {

                            console.error(error);

                        } else {

                            console.log('Card of listId return successfully');
                            console.log(data);

                        }
                    });

                });

            }

        });

    }, 2 * 1000);

}

module.exports = usingPreviouslyWrittenFunction;