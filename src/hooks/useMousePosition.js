import { useEffect, useState } from "react";


export default function useMousePosition() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e) => {
        setMousePosition({ x: e.pageX, y: e.pageY });
    };
    
    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);

        return () => window.removeEventListener("mouseMove", handleMouseMove);
    }, []);

    return mousePosition
}