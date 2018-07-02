import {selectedItems, items} from "../graph/init";
import {updateTimeCoverResult} from "../resultBox/resultBox";

const LEFT_BORDER_CLASS_NAME = 'left-border';
const WEEKEND_CLASS_NAME = 'weekend';
const EVENING_CLASS_NAME = 'evening';
const LUNCH_CLASS_NAME = 'lunch';
const WORKING_HOURS_CLASS_NAME = 'working-hours';
const SELECTED_ITEM_CLASS_NAME = 'selected';

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

window.selectWorkingTime = function () {
    items.filter(item => item.time !== 14 && item.time !== 13
        && item.time >= 9 && item.time <= 19).forEach(item => {
        if (!selectedItems.includes(item)) {
            selectedItems.push(item);
            document.getElementById(item.id).classList.add(SELECTED_ITEM_CLASS_NAME);
        }
    });

    addBorder(WORKING_HOURS_CLASS_NAME);
    updateTimeCoverResult();
};

function addBorder(id) {
    [...document.getElementsByClassName(LEFT_BORDER_CLASS_NAME)]
        .forEach(item => item.classList.remove(LEFT_BORDER_CLASS_NAME));

    document.getElementById(id).classList.add(LEFT_BORDER_CLASS_NAME);
}