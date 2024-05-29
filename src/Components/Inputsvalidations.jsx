function InputsValidations() {
    return(
        <>
             {/*<!----------------------------Question No #01  ------------------------------>*/}
    <div>
    <h1>PY Checker Adder</h1>
    <input type="text" id="wordbar" placeholder="Enter Word"/><br/>
    <button className="Button1" onclick="string_check()">Submit</button>
    <div id="para1"></div>
    </div>
    {/*<!----------------------------Question No #01  ------------------------------>*/}
    <div>
        <h1>Position Remover</h1>
    <input type="text" id="wordbar2" placeholder="Enter Word"/><br/>
    <input type="text" id="wordbar3" placeholder="Enter Position"/><br/>
    <button id="Button2" onclick="removeCharHandler()">Remove</button>
    <div id="para2"></div>

    </div>
{/*<!----------------------------Question No #01  ------------------------------>*/}
    <div>
        <h1>Exchange Characters 1st and last</h1>
        <input type="text" id="wordbar4" placeholder="Enter Word"/><br/>
        <button className="Button3" onclick="exchange()">Exchange</button>
        <div id="para3"></div>
    </div>
    {/*<!----------------------------Question No #01  ------------------------------>*/}
    <div>
        <h1>Exchange Characters 1st and also add at the beganning</h1>
        <input type="text" id="wordbar5" placeholder="Enter Word"/><br/>
        <button className="Button4" onclick="exchange2()">Exchange</button>
        <div id="para4"></div>
    </div>
    {/*<!----------------------------Question No #01  ------------------------------>*/}
    <div>
        <h1>Exchange Characters 1st and also add at the beganning</h1>
        <input type="text" id="wordbar6" placeholder="Enter Word"/><br/>
        <button className="Button5" onclick="multiple()">Check</button>
        <div id="para5"></div>
    </div>

    {/*<!----------------------------Question No #01  ------------------------------>*/}
    <div>
        <h1>add last three Characters at front and back</h1>
        <input type="text" id="wordbar7" placeholder="Enter Word"/><br/>
        <button className="Button6" onclick="add3char()">Exchange</button>
        <div id="para6"></div>
    </div>
        </>
    )
}

export default InputsValidations;