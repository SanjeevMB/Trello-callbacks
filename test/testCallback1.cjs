const boardInformation = require('../callback1.cjs');

function callBack(error, data) {

    if (error) {

        console.error(error);

    } else {

        console.log('Information returned successfully');
        console.log(data);

    }

}

boardInformation("mcu453ed", callBack);