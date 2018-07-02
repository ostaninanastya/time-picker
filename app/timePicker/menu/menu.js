import * as style from "../const";
import {items, selectedItems} from "../const";
import {updateTimeCoverResult} from "../resultBox/resultBox";

window.clearAll = function () {
    items.forEach(item => {
        if (selectedItems.includes(item)) {
            selectedItems.splice(selectedItems.indexOf(item), 1);
            document.getElementById(item.id).classList.remove(style.SELECTED_ITEM_CLASS_NAME);
        }
    });

    [...document.getElementsByClassName(style.LEFT_BORDER_CLASS_NAME)]
        .forEach(item => item.classList.remove(style.LEFT_BORDER_CLASS_NAME));

    updateTimeCoverResult();
};

window.selectEveningTime = function () {
    items.filter(item => item.time >= 18 && item.time <= 22).forEach(item => {
        if (!selectedItems.includes(item)) {
            selectedItems.push(item);
            document.getElementById(item.id).classList.add(style.SELECTED_ITEM_CLASS_NAME);
        }
    });

    addBorder(style.EVENING_CLASS_NAME);
    updateTimeCoverResult();
};

window.selectLunchTime = function () {
    items.filter(item => item.time === 13 || item.time === 14).forEach(item => {
        if (!selectedItems.includes(item)) {
            selectedItems.push(item);
            document.getElementById(item.id).classList.add(style.SELECTED_ITEM_CLASS_NAME);
        }
    });

    addBorder(style.LUNCH_CLASS_NAME);
    updateTimeCoverResult();
};

window.selectWeekend = function () {
    items.filter(item => item.day === 6 || item.day === 7).forEach(item => {
        if (!selectedItems.includes(item)) {
            selectedItems.push(item);
            document.getElementById(item.id).classList.add(style.SELECTED_ITEM_CLASS_NAME);
        }
    });

    addBorder(style.WEEKEND_CLASS_NAME);
    updateTimeCoverResult();
};

window.selectWorkingTime = function () {
    items.filter(item => item.time !== 14 && item.time !== 13
        && item.time >= 9 && item.time <= 19).forEach(item => {
        if (!selectedItems.includes(item)) {
            selectedItems.push(item);
            document.getElementById(item.id).classList.add(style.SELECTED_ITEM_CLASS_NAME);
        }
    });

    addBorder(style.WORKING_HOURS_CLASS_NAME);
    updateTimeCoverResult();
};

function addBorder(id) {
    [...document.getElementsByClassName(style.LEFT_BORDER_CLASS_NAME)]
        .forEach(item => item.classList.remove(style.LEFT_BORDER_CLASS_NAME));

    document.getElementById(id).classList.add(style.LEFT_BORDER_CLASS_NAME);
}