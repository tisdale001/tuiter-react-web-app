import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useLocation } from "react-router-dom";




const MyExperiments = () => {

    return(
        <>
            <h1>Hello World!!!! From Lucian!!!!!</h1>
            <label>Hello</label>
            <textarea>Something</textarea>


            <h2>Radio Buttons: Mutually Exclusive</h2>
            <input type="radio" name="tenured" checked/>YES<br/>
            <input type="radio" name="tenured" />NO
            <h2>Checkboxes</h2>
            Checkboxes are NOT mutually exclusive by nature. You have to create functions to change them to checked=true or false<br/>
            <label><input type="checkbox" name="color" value="YELLOW"/>YELLOW</label><br/>
            <label><input type="checkbox" name="color" value="BLUE"/>BLUE</label><br/>
            <label><input type="checkbox" name="color" value="RED"/>RED</label><br/>
            <h2>Input Attributes</h2>
                title = "TITLE": hover over the input field....<br/>
                <input type="text" title="TITLE"/><br/>
            value = "Value"<br/>
            <input value="Value" type="text"/><br/>
            type = "text"<br/>
            <input type="text"/><br/>
            placeholder = "Placeholder"<br/>
            <input type="text" placeholder="Placeholder"/><br/>
            type = "date", value="2022-02-30"<br/>
            <input type="date" value="2022-02-30"/><br/>
            type = "date", no value<br/>
            <input type="date"/><br/>
            <h2>Select</h2>
            value="FEB" in select: won't display new choice<br/>
            <select value="FEB" name="month">
                <option value="JAN">January (01)</option>
                <option value="FEB">February (02)</option>
                <option value="MAR">March (03)</option>
            </select><br/>
            No value in select. Keyword "selected" in option: will display choice<br/>
            <select name="month">
                <option value="JAN">January (01)</option>
                <option value="FEB" selected>February (02)</option>
                <option value="MAR">March (03)</option>
            </select><br/>
            <h2>Different ways of using "label" and "checkbox"</h2>
            2 syntax for same thing: wrap input in label tags or make "for" and input "id" the same<br/>
            <label for="uname">Username</label><input id="uname" type="checkbox"/><br/>
            <label>Username<input type="checkbox"/></label><br/>
            <h2>Blocks: float-start (float left)</h2>
            Divs with float-start<br/>
            <div className="float-start bg-danger text-white">Block 1</div>
            <div className="float-start bg-warning text-white">Block 2</div>
            <div className="float-start bg-primary text-white">Block 3</div><br/>
            Divs with float-start and p-3<br/>
            <div className="row">
                <div>
                    <div className="float-start bg-danger text-white p-3">Block 1</div>
                    <div className="float-start bg-warning text-white p-3">Block 2</div>
                    <div className="float-start bg-primary text-white p-3">Block 3</div>
                </div>
            </div>
            Add ms-3<br/>
            <div className="row">
                <div>
                    <div className="float-start bg-danger text-white p-3 ms-3">Block 1</div>
                    <div className="float-start bg-warning text-white p-3 ms-3">Block 2</div>
                    <div className="float-start bg-primary text-white p-3 ms-3">Block 3</div>
                </div>
            </div>
            To create the above 2 separate rows of float-start boxes you have to wrap in a "row" div and then another div.
            When in doubt: start wrapping everything in divs!<br/>
            "Row" in bootstrap makes all child divs into separate rows, but inside those divs, functions behave normally<br/>
            <h2>Blocks: float-end</h2>
            Last block change to float-end<br/>
            <div className="row">
                <div>
                    <div className="float-start bg-danger text-white p-3">Block 1</div>
                    <div className="float-start bg-warning text-white p-3">Block 2</div>
                    <div className="float-end bg-primary text-white p-3">Block 3</div>
                </div>
            </div>
            <h2>Style: height</h2>
            {`Don't forget to add double curly brackets: style={{height:"100px"}}`}
            <div className="bg-primary text-white" style={{height:"100px"}}>Height 100px</div>
            <h2>Style: left</h2>
            {`style={{position:"relative", left:"100px", height:"100px"}}`}<br/>
            Without position:relative "left" doesn't work: I think it's because of the automatic container everything is placed in
            <div className="bg-danger text-white" style={{position: "relative", left: "100px", height:"100px"}}>Left 100px</div>
            This is without position:relative
            <div className="bg-warning text-white" style={{left:"100px", height:"100px"}}>Left 100px</div>
            <h2>Style: top</h2>
            This is top:50px. The red box that follows is position-relative and "draws over" blue box. Position-static would draw under blue box.
            <div className="bg-primary text-white" style={{position:"relative", top:"50px", height:"100px"}}>Top 50px</div>
            This is next box, position:static
            <div className="bg-danger text-white position-relative" style={{position:"static", height:"100px"}}>
                <div className="position-absolute bottom-0">Position relative with text(position-absolute bottom-0)</div>
            </div>

        </>
    );
}
export default MyExperiments;
