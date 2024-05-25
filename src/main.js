import React, {useState} from "react";
import "./main.scss";
   
let curFood = "ice";
let showed = {"ice":false, "burger":false};
let memoFood = {"ice":0, "burger":0};
let totalNum = "";

function Main() {
    let [iceBtnText, setIceBtnText] = useState("購買");
    let [burgerBtnText, setBurgerBtnText] = useState("購買");
    let btnText = {"ice": iceBtnText, "burger": burgerBtnText};
    let setBtnText = {"ice": setIceBtnText, "burger": setBurgerBtnText};
    
    let [iceBorderColor, setIceBorderColor] = useState("green");
    let [burgerBorderColor, setBurgerBorderColor] = useState("green");
    
    let borderColor = {"ice": iceBorderColor, "burger": burgerBorderColor};
    let setBorderColor = {"ice": setIceBorderColor, "burger": setBurgerBorderColor};
    
    let [showBtns, setShowBtns] = useState("none");
    let [result, setResult] = useState("");
    let [figure, setFigure] = useState("0");

    function buying() {
        if (showed[curFood] == false) {
            setShowBtns("block");
            setBorderColor[curFood]("orange");
            setBtnText[curFood]("取消");
            showed[curFood] = true;
        } else {
            setShowBtns("none");
            setBorderColor[curFood]("green");
            setBtnText[curFood]("購買");
            showed[curFood] = false;
            memoFood[curFood] = 0;
            totalNum = "";
            showSummary();
        }     
    }

    function finishBtn(){
        setShowBtns("none");
        memoFood[curFood] = totalNum;
        totalNum = "";
        setFigure(totalNum);
        showSummary();
    }
    function showSummary (){
        let summaryString = "";
        for (const key in memoFood) {
            if (memoFood[key] != 0) {
                summaryString += key;
                summaryString += (" x"+memoFood[key]);
                summaryString += "; ";
            }
        }
        setResult(summaryString); 
    }
    return  <div className="main">
                <div className="option">
                    <div className="ice" style={{borderColor:borderColor["ice"]}}>
                        <div>
                            <img src="./ice.jpg"></img>
                        </div>
                        <div>
                            <button className="iceBtn" 
                                    onClick={function(){curFood="ice"; buying()}}
                            >{btnText["ice"]}</button>
                        </div>
                    </div>
                    <div className="burger" style={{borderColor:borderColor["burger"]}}>
                        <div>
                            <img src="./burger.jpg"></img>
                        </div>
                        <div>
                            <button className="burgerBtn" 
                                    onClick={function(){curFood="burger"; buying()}}
                            >{btnText["burger"]}</button>
                        </div>
                    </div>
                    
                </div>
                <div className="btns" style={{display:showBtns}}>
                    <div>
                        <button className="btn1" onClick={function(){totalNum+="1"; setFigure(totalNum)}}>1</button>
                        <button className="btn2" onClick={function(){totalNum+="2"; setFigure(totalNum)}}>2</button>
                        <button className="btn3" onClick={function(){totalNum+="3"; setFigure(totalNum)}}>3</button>
                    </div>
                    <div>
                        <button onClick={function(){totalNum+="0"; setFigure(totalNum)}}>0</button>
                        <button onClick={function(){totalNum=""; setFigure(totalNum)}}>X</button>
                        <button className="btnFinish" onClick={finishBtn}>確認</button>
                    </div>
                    <div className="total">
                        <div>個數:<span className="num">{figure}</span></div>
                    </div>
                </div>
                <div className="summary">{result}</div>   
            </div>
}

export default Main;