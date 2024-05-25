
import React from "react";
import {createRoot} from "react-dom/client";
import Title from "./title.js";
import Main from "./main.js";

function App() {
    return  <>
                <Title></Title>
                <Main></Main>
            </>;
} 
let root=createRoot(document.body);
root.render(<App></App>);