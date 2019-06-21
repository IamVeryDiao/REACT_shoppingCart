import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import App from "./App.js";
import {createStore} from "redux";
import reducer from "./reducer.js";

let store = createStore(reducer);

render(
	<Provider store={store}>
		<App></App>
	</Provider>
	,
	document.getElementById("container")
)

