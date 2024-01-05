import React from "react";

function CreateArea(props) {


    const [inputText , setInputText]= React.useState({
        title : "",
        content : ""
    });

    function handleChange(event){
      const {name,value} = event.target;
    setInputText((prevValue)=>{
return {
    ...prevValue,
    [name]:value
}
    });
    }
    
    function handleClick(event){
        props.onAdd(inputText)
        setInputText({ title : "",
        content : ""})
        event.preventDefault();
    }

  return (
    <div>
      <form className="create-note">
        <input name="title" value={inputText.title}placeholder="Title" onChange={handleChange} />
        <textarea name="content" value={inputText.content} placeholder="Take a note..." rows="3" onChange={handleChange}/>
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
