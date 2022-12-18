import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Home() {
    const navigate = useNavigate();
    const [id, setId] = useState("");
    const[user, setUser] = useState(false);
    function handleFormSubmit(e) {
        e.preventDefault();
        if (setUser(true)) {
            navigate(`/posts/${id}/users`);
        }
        else{
             navigate(`/posts/${id}/comments`);}
    }
    function handleInput(e) {
        setId(e.target.value);
    }
   
    return (
        <form onSubmit={handleFormSubmit}>

            <input onChange={handleInput} />

            <label htmlFor="com">comments</label>
            <input id="com" type='radio' name="post"/>

            <label htmlFor="user">users</label>
            <input id="user" type='radio' name="post"/>

            <button  type="submit">Submit</button>

        </form>
    )
}