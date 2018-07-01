import {days} from "../../const/days";
import {FRAME_ITEM_CLASS_NAME, ITEM_CLASS_NAME, SELECTED_ITEM_CLASS_NAME} from "../../const/styles/item";
import {items, selectedItems} from "../../const/items";
import timePickerItem from "../../structure/timePickerItem";
import setTimeCoverResult from "../timeCoverResult/set";
import * as styles from "../../const/styles/common";
import updateTimeCoverResult from "../timeCoverResult/update";

export default function createTable(initialData) {
    let table = document.createElement('table');
    table.classList.add(styles.TABLE_STYLE_CLASS_NAME);
    let tr = table.insertRow();
    let td = tr.insertCell();
    td.classList.add(FRAME_ITEM_CLASS_NAME, styles.TD_STYLE_CLASS_NAME);
    for (let j = 0; j < 24; j++) {
        let td = tr.insertCell();
        td.classList.add(FRAME_ITEM_CLASS_NAME, styles.TD_STYLE_CLASS_NAME);
        td.appendChild(document.createTextNode((j / 10 < 1) ? '0' + j : String(j)));
        td.onclick = onFrameClick.bind({index: j, timeFlag: true});
    }
    let id = 0;
    for (let i = 1; i < 8; i++) {
        let tr = table.insertRow(),
            td = tr.insertCell();
        td.classList.add(FRAME_ITEM_CLASS_NAME, styles.TD_STYLE_CLASS_NAME);
        td.appendChild(document.createTextNode(days[i - 1]));
        td.onclick = onFrameClick.bind({index: i});
        for (let j = 0; j < 24; j++) {
            id++;
            let td = tr.insertCell();
            td.classList.add(ITEM_CLASS_NAME, styles.TD_STYLE_CLASS_NAME);
            td.id = id;
            items.push(new timePickerItem(id, i, j));
            if (initialData.map(item => item.id).includes(Number(id))) {
                td.classList.add(SELECTED_ITEM_CLASS_NAME);
                selectedItems.push(new timePickerItem(id, i, j));
                setTimeCoverResult();
            }
            td.onclick = onTimePickerItemClick;
        }
    }
    document.getElementById(styles.TABLE_CONTAINER_ID).appendChild(table);
}

function onTimePickerItemClick() {
    let clickedItem = items.find(item => (item.id === Number(this.id)));
    if (this.classList.contains(SELECTED_ITEM_CLASS_NAME)) {
        selectedItems.splice(selectedItems.indexOf(clickedItem), 1);
        this.classList.remove(SELECTED_ITEM_CLASS_NAME);
    }
    else {
        selectedItems.push(clickedItem);
        this.classList.add(SELECTED_ITEM_CLASS_NAME);
    }
    updateTimeCoverResult();
}

function onFrameClick() {
    items.filter(item => (this.timeFlag === true ? item.time : item.day) === Number(this.index))
        .forEach(item => {
            if (!selectedItems.includes(item)) {
                selectedItems.push(item);
                document.getElementById(item.id).classList.add(SELECTED_ITEM_CLASS_NAME);
            }
        });
    updateTimeCoverResult();
}
