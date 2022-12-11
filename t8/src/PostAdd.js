import { useState } from "react";
import'./App.css';

function PostAdd({onPostSubmitted}){
    const [valueOnvanPer, setValueOnvanPer] = useState('')
    const [valueOnvanEng, setValueOnvanEng] = useState('')
    const [valueAge, setValueAge] = useState('')
    const [valueDate, setValueDate] = useState('')
    const [valueWriter, setValueWriter] =useState('')
    const [valueTextArea, setValueTextArea] = useState('')
    const [valueCat , setValueCat] = useState('')


    const [isTextAreaIncludesError, setIsTextAreaIncludesError] = useState(false)
    const [isOnvanPerIncludesError, setIsOnvanPerIncludesError] = useState(false)
    const [isOnvanEngIncludesError, setIsOnvanEngIncludesError] = useState(false)
    const [isWriterIncludesError, setIsWriterIncludesError] = useState(false)
    const [isDateIncludesError, setIsDateIncludesError] = useState(false)
    const [isCatIncludesError, setIsCatIncludesError] = useState(false)
    
    function handleSubmit(e){
        e.preventDefault();
        if(valueTextArea === '' && valueOnvanEng==='' && valueOnvanPer==='' && valueDate==='' && valueWriter==='' && valueCat==='') {
            setIsTextAreaIncludesError(true);
            setIsOnvanEngIncludesError(true);
            setIsOnvanPerIncludesError(true);
            setIsDateIncludesError(true);
            setIsWriterIncludesError(true);
            setIsCatIncludesError(true);
            
            
            return;
       }

        onPostSubmitted(valueTextArea, valueOnvanPer , valueOnvanEng , valueAge, valueWriter , valueDate)
    }

    function handleOnvanChangePer(e){
        setValueOnvanPer(e.target.value);
    }

    function handleOnvanChangeEng(e){
        setValueOnvanEng(e.target.value);
    }

let now = new Date()

    function handleDateChange(e){
        if(valueDate > now.getDate()){}
        setValueDate(e.target.value);
    }
    function handleCatChange(e){
        setValueCat(e.target.value);
    }

    function handleAgeChange(e){
        if(Number(e.target.value) >= 18 && Number(e.target.value) < 100) {
            setValueAge(e.target.value);
        }
    }

    function handleTAChange(e){
        if(e.target.value.length <= 1000) {
            setValueTextArea(e.target.value);
        }
    }

    function handleWriterChange(e){
            
            if(e.target.value.length >= 5){

            setValueWriter(e.target.value)

        }
    }

    return (<form onSubmit={handleSubmit}>
        <label className="item" htmlFor="onvanPer">Onvan (per) </label>
        <input value={valueOnvanPer} onChange={handleOnvanChangePer} name="onvanPer" id="onvanPer" type="text" />
        {isOnvanPerIncludesError ? <span className="spn">*</span> : null}

<br/>
        <label className="item" htmlFor="onvanEng">Onvan (eng)</label>
        <input value={valueOnvanEng} onChange={handleOnvanChangeEng} name="onvanEng" id="onvanEng" type="text" />
        {isOnvanEngIncludesError ? <span className="spn">*</span> : null}

<br/>
        <label className="item" htmlFor="age">Age</label>
        <input value={valueAge} onChange={handleAgeChange} name="age" id="age" type="text" />
<br/>
        <label className="item" htmlFor="date">Date</label>
        <input value={valueDate} onChange={handleDateChange} name="date" id="date" type="date" />
        {isDateIncludesError ? <span className="spn">*</span> : null}

<br/>
        <label className="item" htmlFor="Writer">Writer</label>
        <input value={valueWriter} onChange={handleWriterChange} name="Writer" id="Writer" type="text" />
        {isWriterIncludesError ? <span className="spn">*</span> : null}
    
<br/>
<label className="item" htmlFor="cat" >Category</label>
        <select id="cat" onChange={handleCatChange} value={valueCat}>
            <option>item1</option>
            <option>item2</option>
            <option>item3</option>
        </select>
        {isCatIncludesError ? <span className="spn">*</span> : null}



<br/>
        <textarea className="item" value={valueTextArea} onChange={handleTAChange} name="ta" />
        <span>{valueTextArea.length} / 1000</span>
        {isTextAreaIncludesError ? <span className="spn">*</span> : null}
<br/>  
        <button className="item" type="submit">
            Submit post
        </button>
    </form>);
}

export default PostAdd;