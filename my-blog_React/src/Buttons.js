import { useState } from 'react';

const Button = () => {

    const [name, setName] = useState('Mario');
    const [age, setAge ] = useState('25');

    const click1 = () => {
        setName('Luigi');   
    }
    
    const click2 = () => {
        setAge('30');
    }

    const click4 = () => {
        document.getElementById("Hi").innerHTML = "Hi.123";
    }

    const click5 = () => {
        document.getElementById("Hi").innerHTML = "GOOD.123";
    }
    

    return ( 
    <div className="content">
        <p>{name} is {age} years old.</p>
        <button onClick={click1}>Click me</button>
        <button onClick={click2}>Click me</button>
        <button onClick={() =>setAge("60")}>Click3</button>
        <br />
        <p id="Hi"></p>
        <button onClick={click4}>Click4</button>
        <button onClick={click5}>Click5</button>
        <br />
        <br />
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <br />
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </div>
    
    );
}
 
export default Button;