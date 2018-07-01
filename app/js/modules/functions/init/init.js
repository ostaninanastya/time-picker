import createTable from "./createTable";
import getInitialData from "./getInitialData";

export default function init() {
    getInitialData().then(data => createTable(data));
}