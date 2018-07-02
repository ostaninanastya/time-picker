import {selectedItems} from "../entity/const/items";
import {HOUR_RESULT_ID, PERCENT_RESULT_ID} from "./const/style/timeCoverResult";

const hourStringCases = ['часов', 'час', 'часа'];

export default function setTimeCoverResult() {
    let result = selectedItems.length;
    document.getElementById(PERCENT_RESULT_ID).innerText = (result / 1.68).toFixed() + '%';
    let hourString = hourStringCases[0];
    if (Math.floor(result / 10) !== 1) {
        let lastSymbol = result % 10;
        if (lastSymbol === 1) {
            hourString = hourStringCases[1];
        }
        else if (lastSymbol > 1 && lastSymbol < 5) {
            hourString = hourStringCases[2];
        }
    }
    document.getElementById(HOUR_RESULT_ID).innerText = '(' + result + ' ' + hourString + ')';
}