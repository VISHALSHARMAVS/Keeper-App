import React from "react";
import Header from "./Header";
import Footer from "./footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
const [notes, setNotes]=React.useState([]);
function submitClick(inputText){
setNotes((prevValue)=>{
return [...prevValue,inputText]
})
}
function deleteNote(id){
setNotes((prevValue)=>{
return prevValue.filter((noteItem,index)=>{
return index !== id;
})
})
}
  return (
    <div>
      <Header />
      <CreateArea 
     onAdd ={submitClick}
      />
      {
        notes.map((noteItem,index)=>{
          return  <Note
           key={index}
           id={index}
            title={noteItem.title}
             content={noteItem.content} 
             onDelete ={deleteNote}/>
    
        })
      }
      <Footer />
    </div>
  );
}

export default App;
