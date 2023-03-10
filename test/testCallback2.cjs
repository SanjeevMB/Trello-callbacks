const allListBelongToBoardId = require('../callback2.cjs');

function callBack(error, data) {

    if (error) {

        console.error(error);

    } else {

        console.log('Information returned successfully');
        console.log(data);

    }

}

allListBelongToBoardId("mcu453ed", callBack);