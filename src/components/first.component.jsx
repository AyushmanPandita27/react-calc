import { useState } from "react";
import './first.css'; 
const Calculator=()=>{
 
    const [state, setState] = useState("");
    const [ans, setAns] = useState("");
    const [color, setColor]=useState("");
    const [col, setCol]=useState("");
    const textStyle = {
        color: `${col}`
    }
    document.body.style.background=color;
       const handler= (e)=>{
             setState(state.concat(e.target.value));
    }
    const clear = ()=>{
        setState("");
    }
    const result =(e)=>{
        try {
            setAns(eval(state).toString());
        } catch (err) {
            setState("error");
        }
    }
    const dark = ()=>{
        setColor("black");
        setCol("white");
    }
    return(
        <div>
           <h1 style={textStyle}>Calc without styles</h1>
            <h1 style={textStyle} className="display">ans: {ans}</h1>
            <div >
                <h3 style={textStyle}>value: {state} </h3> 
                </div>

                <div className="numbers" >
            < input type = "button" onClick={handler} value="1" />
            < input type = "button" onClick={handler} value="2"/>
            < input type = "button" onClick={handler} value="3"/>
            < input type = "button" onClick={handler} value="4"/>
            < input type = "button" onClick={handler} value="5"/>
            < input type = "button" onClick={handler} value="6"/>
            < input type = "button" onClick={handler} value="7"/>
            < input type = "button" onClick={handler} value="8"/>
            < input type = "button" onClick={handler} value="9"/>
            < input type = "button" onClick={handler} value="0"/>
            </div>
        
            <div className="bottom">
            < input type = "button" onClick={handler} value="+"/>
            < input type = "button" onClick={handler} value="-"/>
            < input type = "button" onClick={handler} value="/"/>
            < input type = "button" onClick={handler} value="*"/>
            < input type = "button" onClick={result} value="="/>
            < input type = "button" onClick={clear} value="C"/>
            </div>
            <div>
                <button onClick={dark}>Dark Mode</button>
                </div>
        </div>
    );
}

export default Calculator;