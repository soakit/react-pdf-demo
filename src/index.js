import React from "react";
import ReactDOM from "react-dom";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./MyDocument";

const App = () => (
  <PDFViewer width="100%" height={window.innerHeight - 24}  >
    <MyDocument />
  </PDFViewer>
);

ReactDOM.render(<App />, document.getElementById("root"));
