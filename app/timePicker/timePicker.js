import "babel-polyfill";
import "./timePicker.css";

import * as quickMenu from "./menu/menu";
import * as mouseEvents from "./graph/mouseEvents"
import {getInitialData, createTable} from "./graph/init";

getInitialData().then(data => createTable(data));