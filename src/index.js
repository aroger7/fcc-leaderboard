import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import "normalize.css";

const theme = {
	breakpoints: {
		xs: 0,
		sm: 400,
		md: 768,
		lg: 992,
		xl: 1100
	}
};

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<App usersApiRoot="https://fcctop100.herokuapp.com/api/fccusers/" />
	</ThemeProvider>,
	document.getElementById("root")
);
registerServiceWorker();
