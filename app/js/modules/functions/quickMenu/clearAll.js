import {LEFT_BORDER_CLASS_NAME} from "../../const/styles/quickMenu";
import {items, selectedItems} from "../../const/items";
import {SELECTED_ITEM_CLASS_NAME} from "../../const/styles/item";
import updateTimeCoverResult from "../timeCoverResult/update";

window.clearAll = function () {
    items.forEach(item => {
        if (selectedItems.includes(item)) {
            selectedItems.splice(selectedItems.indexOf(item), 1);
            document.getElementById(item.id).classList.remove(SELECTED_ITEM_CLASS_NAME);
        }
    });
    [...document.getElementsByClassName(LEFT_BORDER_CLASS_NAME)]
        .forEach(item => item.classList.remove(LEFT_BORDER_CLASS_NAME));
    updateTimeCoverResult();
};