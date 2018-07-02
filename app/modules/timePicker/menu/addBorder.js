import {LEFT_BORDER_CLASS_NAME} from "./const/style/quickMenu";

export default function addBorder(id) {
    [...document.getElementsByClassName(LEFT_BORDER_CLASS_NAME)]
        .forEach(item => item.classList.remove(LEFT_BORDER_CLASS_NAME));
    document.getElementById(id).classList.add(LEFT_BORDER_CLASS_NAME);
}