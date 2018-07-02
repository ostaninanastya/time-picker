import {LEFT_BORDER_CLASS_NAME} from "./const/style/quickMenu";
import {items, selectedItems} from "../entity/const/items";
import {SELECTED_ITEM_CLASS_NAME} from "../entity/const/style/item";
import updateTimeCoverResult from "../resultBox/update";

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