import React from 'react';
import './App.css';
import {Button} from "./components/Button";

function App() {

    const Button1 = (subscriber: string, age: number, address: string) => {
        console.log(subscriber, age, address)
    }

    const Button2 = (subscriber: string) => {
        alert(subscriber)
    }

    const StupidButton = () => {
        alert("I'm stupid button")
    }

  return (
    <div className={"App"}>
        <Button name={"Button 1"} callback={() => Button1("Daniil", 25, "live in Astrakhan")}/>
        <Button name={"Button 2"} callback={() => Button2("Button 2!")}/>
        <Button name={"Button 3"} callback={StupidButton}/>
    </div>
  );
}

export default App;
