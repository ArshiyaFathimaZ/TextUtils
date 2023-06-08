import React,{useState} from 'react'

// React hooks
// State belongs to components
// Hooks are used for components state managment
// React Hook "useState" cannot be called at the top level. React Hooks must be called in a React function component or a custom React Hook function
// Hooks by using it without creating a class we can access or use the class functionalities with the help hooks
// To update the text variable we use state function we cant directly update the variables in hooks
// React hooks variables rerender when updated (normal variables will not rerender)

const TextForm = (props) => {
 console.log(props.mode);
    const handleUpClick=()=>{
        // console.log('handle up click'+text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!","success")
    }
    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!","success")
    }
    const handleOnChange=(event)=>{
        // console.log('handle on change');
        setText(event.target.value);
    }
    const handleClear=()=>{
      setText('');
      props.showAlert("Text Cleared!","success")
    }
    const handleCopy=()=>{
      var copyText=document.getElementById("myBox");
      copyText.select();//select text filed
      copyText.setSelectionRange(0, 99999); // For mobile devices
        // Copy the text inside the text field
      navigator.clipboard.writeText(copyText.value)
      props.showAlert("Copied to Clipboard!","success")
     }

     const handleExtraSpace=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Removed Extra Spaces!","success")
     }

     const showFile=(e)=>{
      e.preventDefault()
      const reader=new FileReader()
      reader.onload=async(e)=>{
        setText(e.target.result)
       }
      reader.readAsText(e.target.files[0]) 
      props.showAlert("File read successfly!","success")
     }

     
    const [text,setText]=useState('');
    // text="new tect";//wrong way to update the state
    // setText("new text");//correct way to update the state
    // console.log(text);
  return (
    <>
      <div className='container' >
        <h1 >{props.heading}</h1>
        <div className="mb-3" >
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"  style={{backgroundColor:props.mode==='light'?'white':'#042743',color:props.mode==='light'?'#042743':'white'}}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Conver to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Conver to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Data</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy To Clipboard</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-2 my-2" ><input type="file" onChange={(e) => showFile(e)} placeholder='Choose file'/></button>
    </div>
    <div className="container my-2" >
        <h1>Your text summary</h1>
        <p>{text.split(' ').filter(str=>str!='').length} word, {text.length} chars</p>
        <p>{0.008*text.split(' ').length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:'Enter text to preview'}</p>
    </div>
    </>
  
  )
}

export default TextForm;
