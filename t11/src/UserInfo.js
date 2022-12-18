import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
export default function UserInfo() {
    const [userInfo, setUserInfo] = useState(null);
    const {id} = useParams();
    const {user} = useParams();
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/users`).then((res) => res.json())
            .then((res) => {
                setUserInfo(res)
            })
    }, [])

    return (
        <div>
            <h2>{userInfo.username}</h2>
            <p>{userInfo.email}</p>
        </div>
    )
}
