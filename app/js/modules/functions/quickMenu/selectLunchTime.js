import {LUNCH_CLASS_NAME} from "../../const/styles/quickMenu";
import {items, selectedItems} from "../../const/items";
import {SELECTED_ITEM_CLASS_NAME} from "../../const/styles/item";
import updateTimeCoverResult from "../timeCoverResult/update";
import addBorder from "./addBorder";

window.selectLunchTime = function () {
    items.filter(item => item.time === 13 || item.time === 14).forEach(item => {
        if (!selectedItems.includes(item)) {
            selectedItems.push(item);
            document.getElementById(item.id).classList.add(SELECTED_ITEM_CLASS_NAME);
        }
    });
    addBorder(LUNCH_CLASS_NAME);
    updateTimeCoverResult();
};