import "babel-polyfill";

import "./modules/timePicker/css/common.css";
import "./modules/timePicker/entity/css/timePicker.css";
import "./modules/timePicker/graph/css/graph.css";
import "./modules/timePicker/menu/css/menu.css";
import "./modules/timePicker/resultBox/css/resultBox.css";

import * as quickMenu from "./modules/timePicker/menu";
import * as mouseEvents from "./modules/timePicker/graph/mouseEvents/mouseEvents"
import createTable from "./modules/timePicker/graph/init/createTable";
import getInitialData from "./modules/timePicker/graph/init/getInitialData";

getInitialData().then(data => createTable(data));