import "./App.css";


function Sidebar({text1,text2,text3,side1,side2,side3}){
    return(
        <div className='sidebar'>
<a className='a' href={side1}>{text1}</a>
<br/>
<a className='a' href={side2}>{text2}</a>
<br/>
<a className='a' href={side3}>{text3}</a>
        </div>
    )
}
export default Sidebar;