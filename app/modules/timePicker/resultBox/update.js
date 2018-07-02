import {selectedItems} from "../entity/const/items";
import setTimeCoverResult from "./set";

export default function updateTimeCoverResult() {
    setTimeCoverResult();
    sendData();
}

function sendData() {
    /*
    * sending data format : [{"id" : 4, "day" : 1, "time" : 3},{"id" : 77, "day" : 4, "time" : 4}]
    */
    let sendDataString = JSON.stringify(selectedItems);
}