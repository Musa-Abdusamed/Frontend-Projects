import {useState} from "react";
import ColorButton from "./components/ColorPreview.jsx";
import Card from "./components/Card.jsx"
function App(){
  const colors =[
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Purple",
    "Orange",
    "Pink",
    "Black",
  ];
  const [sellectedColor,setSellectedColor]=useState("");
  return(
    <div className="container">
      <Card>
        <h1>🎨 Color Palette Picker</h1>
        <div className="button-group">
          {colors.map((color)=>(
            <ColorButton
            key={color}
            color={color}
            onClick={()=>setSelected(color)}
            isSelected={setSelected==color}
            />
          ))}

        </div>
        {selectedColor ?(
          <ColorPreview color={selectedColor}/>
        ):(
          <p className="message">No color selected yet.</p>
         
        )}
         <btutton className="reset-btn"
          onClick={()=>setSellectedColor("")}>
            Reset
        </btutton>
      </Card>
    </div>
  );
}
export default App;