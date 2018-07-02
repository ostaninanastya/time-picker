import {selectedItems} from "../graph/init";

const hourStringCases = ['часов', 'час', 'часа'];
const PERCENT_RESULT_ID = 'percent-result';
const HOUR_RESULT_ID = 'hour-result';

export function setTimeCoverResult() {
    let result, hourString, lastSymbol;

    result = selectedItems.length;
    hourString = hourStringCases[0];
    lastSymbol = result % 10;

    document.getElementById(PERCENT_RESULT_ID).innerText = (result / 1.68).toFixed() + '%';

    if (Math.floor(result / 10) !== 1) {
        if (lastSymbol === 1) {
            hourString = hourStringCases[1];
        }
        else if (lastSymbol > 1 && lastSymbol < 5) {
            hourString = hourStringCases[2];
        }
    }

    document.getElementById(HOUR_RESULT_ID).innerText = '(' + result + ' ' + hourString + ')';
}

export function updateTimeCoverResult() {
    setTimeCoverResult();
    sendData();
}

function sendData() {
    /* sending data format : [{"id" : 4, "day" : 1, "time" : 3},{"id" : 77, "day" : 4, "time" : 4}] */

    let sendDataString = JSON.stringify(selectedItems);
}