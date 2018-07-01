import {WEEKEND_CLASS_NAME} from "../../const/styles/quickMenu";
import {items, selectedItems} from "../../const/items";
import {SELECTED_ITEM_CLASS_NAME} from "../../const/styles/item";
import updateTimeCoverResult from "../timeCoverResult/update";
import addBorder from "./addBorder";

window.selectWeekend = function () {
    items.filter(item => item.day === 6 || item.day === 7).forEach(item => {
        if (!selectedItems.includes(item)) {
            selectedItems.push(item);
            document.getElementById(item.id).classList.add(SELECTED_ITEM_CLASS_NAME);
        }
    });
    addBorder(WEEKEND_CLASS_NAME);
    updateTimeCoverResult();
};
