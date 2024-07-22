import React, {useState} from "react";

function ColourPicker() {
  const [colour, setColour] = useState("#FFFFFF");

  function handleColourChange(event) {
    setColour(event.target.value);
  }

    return (
        <div className="colour-picker-container">
            <h1>Colour Picker</h1>
            <div>
                <p style={{backgroundColor: colour}}>Selected colour: {colour}</p>
                <label >Select a colour: </label>
                <input type="color" value={colour} onChange={handleColourChange} />
            </div>
        </div>
    );
}

export default ColourPicker;