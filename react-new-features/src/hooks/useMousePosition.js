import { useState, useEffect } from "react";

const useMousePosition = () => {
    const [ position, setPosition ] = useState({ x : 0, y : 0 });

    useEffect(() =>{

        const handleMOuseMove = (e) => {
            setPosition({
                x: e.pageX,
                y: e.pageY
            })
        };

        document.addEventListener('mousemove', handleMOuseMove );

        return () => {
            document.removeEventListener('mousemove', handleMOuseMove )
        }
    }, []);

    return position
};

export { useMousePosition as default}