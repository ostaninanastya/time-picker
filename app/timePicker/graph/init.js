import {setTimeCoverResult, updateTimeCoverResult} from "../resultBox/resultBox";

const days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const ITEM_CLASS_NAME = 'item';
const SELECTED_ITEM_CLASS_NAME = 'selected';
const FRAME_ITEM_CLASS_NAME = 'frame';
const TD_STYLE_CLASS_NAME = 'td-style';
const TABLE_STYLE_CLASS_NAME = 'table-style';
const TABLE_CONTAINER_ID = 'table-container';

export const items = [];
export const selectedItems = [];

class timePickerItem {
    constructor(id, day, time) {
        this.id = id;
        this.day = day;
        this.time = time;
    }
}

/* инициализировать данные, полученные с сервера */
export function getInitialData() {
    return new Promise((resolve) => {
        /* формат данных : '[ { "id" : 4}, {"id" : 77}, {"id": 82} ]'; */

        let jsonString, initialData;

        jsonString = '\[\]';
        initialData = JSON.parse(jsonString);
        resolve(initialData);
    });
}

/* построить таблицу с учетом инициализированных данных */
export function createTable(initialData) {
    let table, tr, td, id = 0;

    table = document.createElement('table');
    table.classList.add(TABLE_STYLE_CLASS_NAME);
    tr = table.insertRow();
    td = tr.insertCell();
    td.classList.add(FRAME_ITEM_CLASS_NAME, TD_STYLE_CLASS_NAME);

    for (let j = 0; j < 24; j++) {
        let td = tr.insertCell();

        td.classList.add(FRAME_ITEM_CLASS_NAME, TD_STYLE_CLASS_NAME);
        td.appendChild(document.createTextNode((j / 10 < 1) ? '0' + j : String(j)));
        td.onclick = onFrameClick.bind({index: j, timeFlag: true});
    }

    for (let i = 1; i < 8; i++) {
        let tr = table.insertRow(),
            td = tr.insertCell();

        td.classList.add(FRAME_ITEM_CLASS_NAME, TD_STYLE_CLASS_NAME);
        td.appendChild(document.createTextNode(days[i - 1]));
        td.onclick = onFrameClick.bind({index: i});

        for (let j = 0; j < 24; j++) {
            let td = tr.insertCell();

            td.classList.add(ITEM_CLASS_NAME, TD_STYLE_CLASS_NAME);
            td.id = ++id;
            items.push(new timePickerItem(id, i, j));

            if (initialData.map(item => item.id).includes(Number(id))) {
                td.classList.add(style.SELECTED_ITEM_CLASS_NAME);
                selectedItems.push(new timePickerItem(id, i, j));
                setTimeCoverResult();
            }
            td.onclick = onTimePickerItemClick;
        }
    }

    document.getElementById(TABLE_CONTAINER_ID).appendChild(table);
}

/* выделить элемент таблицы */
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

/* выделить элементы, соответствующие выбранному дню недели или времени */
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