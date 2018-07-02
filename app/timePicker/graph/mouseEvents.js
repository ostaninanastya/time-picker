import {selectedItems} from "./init";
import {updateTimeCoverResult} from "../resultBox/resultBox";
import {items} from "./init";

const ITEM_CLASS_NAME = 'item';
const SELECTED_ITEM_CLASS_NAME = 'selected';
const TABLE_CONTAINER_ID = 'table-container';

let mouseDown, deleteMode, startItem;

document.getElementById(TABLE_CONTAINER_ID).onmousedown = function (e) {
    let targetItem = e.target;

    if (!targetItem.classList.contains(ITEM_CLASS_NAME)) return;
    mouseDown = true;
    deleteMode = targetItem.classList.contains(SELECTED_ITEM_CLASS_NAME);
    startItem = items.find(item => (item.id === Number(targetItem.id)));
};

document.getElementById(TABLE_CONTAINER_ID).onmouseout = function (e) {
    if (!mouseDown || !e.relatedTarget.classList.contains(ITEM_CLASS_NAME)) {
        mouseDown = false;
        return;
    }

    let relatedTargetItem, targetItem;
    relatedTargetItem = items.find(item => (item.id === Number(e.relatedTarget.id)));
    targetItem = items.find(item => (item.id === Number(e.target.id)));

    if (!selectedItems.includes(startItem)) {
        selectedItems.push(startItem);
        document.getElementById(startItem.id).classList.add(SELECTED_ITEM_CLASS_NAME);
    }

    let maxTime, minTime, maxDay, minDay;
    maxTime = Math.max(relatedTargetItem.time, startItem.time);
    minTime = Math.min(relatedTargetItem.time, startItem.time);
    maxDay = Math.max(relatedTargetItem.day, startItem.day);
    minDay = Math.min(relatedTargetItem.day, startItem.day);

    let currentArea = items.filter(item => (item.time <= maxTime && item.time >= minTime
        && item.day <= maxDay && item.day >= minDay));

    if (deleteMode) {
        currentArea.forEach(item => {
            if (selectedItems.includes(item)) {
                selectedItems.splice(selectedItems.indexOf(item), 1);
                document.getElementById(item.id).classList.remove(SELECTED_ITEM_CLASS_NAME);
            }
        });
        updateTimeCoverResult();
        return;
    }

    maxTime = Math.max(targetItem.time, startItem.time);
    minTime = Math.min(targetItem.time, startItem.time);
    maxDay = Math.max(targetItem.day, startItem.day);
    minDay = Math.min(targetItem.day, startItem.day);

    let previousArea, itemsToModify;
    previousArea = items.filter(item => (item.time <= maxTime && item.time >= minTime
        && item.day <= maxDay && item.day >= minDay));

    if (currentArea.length > previousArea.length) {
        itemsToModify = currentArea.filter(item => !previousArea.includes(item));

        itemsToModify.forEach(item => {
            if (!selectedItems.includes(item)) {
                selectedItems.push(item);
                document.getElementById(item.id).classList.add(SELECTED_ITEM_CLASS_NAME);
            }
        });
    }
    else {
        itemsToModify = previousArea.filter(item => !currentArea.includes(item));

        itemsToModify.forEach(item => {
            if (selectedItems.includes(item)) {
                selectedItems.splice(selectedItems.indexOf(item), 1);
                document.getElementById(item.id).classList.remove(SELECTED_ITEM_CLASS_NAME);
            }
        })
    }
    updateTimeCoverResult();
};

document.getElementById(TABLE_CONTAINER_ID).onmouseup = function () {
    mouseDown = false;
};