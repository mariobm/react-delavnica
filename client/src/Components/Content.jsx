import { useEffect, useState } from "react";
import useMousePosition from "../hooks/useMousePosition"
import User from "./User";

export default function Content({ name, age, children }) {
    const {x,y} = useMousePosition();
    const [userData, setUserData] = useState({loading: true, data: {}})

    useEffect(() => {
        let controller = new AbortController();
        let signal = controller.signal;
        
        fetch('https://randomuser.me/api/', { signal })
            .then(response => response.json())
            .then(json => setUserData({ loading: false, data: json.results }));
        
        return () => controller.abort();
    }, []);


    const { loading, data } = userData;
    return (
        <>
            <h1>Hello {name}. You are {age} years old</h1>
            <p>Mouse position: x: {x} y: {y}</p>
            <div>
                {loading ? 'loading ...' : 
                data.map((obj, idx) => <User key={idx} name={obj.name} image={obj.picture} />)}
            </div>
            {children}
        </>
    )
};