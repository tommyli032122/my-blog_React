import { useState, useEffect } from 'react';

const Buttons2 = () => {
    const [name1, setName1] = useState("Morning");

    const click6 = () => {
        setName1("Night");
    }

    useEffect(() => {
        console.log("I");
    }, [name1]);

    return (  
        <div className="content1">
            <p>{name1}</p>
            <button onClick={click6}>Click6</button>
            <button onClick={() => setName1("Morning1")}>Click7</button>
            <button className="buttonDisabled" disabled>Disabled</button>
        </div>
    );
}
 
export default Buttons2;
