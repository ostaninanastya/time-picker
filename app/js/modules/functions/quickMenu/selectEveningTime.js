import {EVENING_CLASS_NAME} from "../../const/styles/quickMenu";
import {items, selectedItems} from "../../const/items";
import {SELECTED_ITEM_CLASS_NAME} from "../../const/styles/item";
import updateTimeCoverResult from "../timeCoverResult/update";
import addBorder from "./addBorder";

window.selectEveningTime = function () {
    items.filter(item => item.time >= 18 && item.time <= 22).forEach(item => {
        if (!selectedItems.includes(item)) {
            selectedItems.push(item);
            document.getElementById(item.id).classList.add(SELECTED_ITEM_CLASS_NAME);
        }
    });
    addBorder(EVENING_CLASS_NAME);
    updateTimeCoverResult();
};