const allCardsBelongsToListId = require('../callback3.cjs');

function callBack(error, data) {

    if (error) {

        console.error(error);

    } else {

        console.log('card of listId return successfully');
        console.log(data);

    }

}

allCardsBelongsToListId("qwsa221", callBack);