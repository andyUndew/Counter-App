import { useState } from "react";
import { CommonModal } from "./commonModal";
import { CounterBox } from "./counterBox";

export const Counter =()=>{
  const [isOpen,setIsOpen] = useState(false);
  const [nameArray,setNameArray] = useState<string[]>([]);
  const [buttonText,setButtonText] = useState<string>("Add Counter");
  const [nameText,setNameText] = useState<string>("");
  const [buttonState,setButtonState] = useState<boolean>(true);

  const handleAddCounter = (name:string):void => {
    setNameArray([...nameArray,name]);
    setIsOpen(false);
  }

  const handleChangeCounter = (name:string):void =>{
    const newNameArray = [...nameArray];
    newNameArray.forEach((item,index) => {
      if(item === nameText) {
        newNameArray[index] = name;
      }
    })
    setNameArray(newNameArray);
    setButtonState(true);
    setButtonText('Add Counter');
    setIsOpen(false);
  }

  const openModal = () =>{
    console.log(nameArray);
    setIsOpen(true)
  }

  const closeModal = () =>{
    setIsOpen(false);
  }
  
    return (
      <div>

        <header className="hero is-link">
          <div className="hero-body">
            <h1 className="title">Counter-App</h1>
            <p className="subtitle">training</p>
            <div>
              <button className="button is-primary has-text-light" id="modalOpen" onClick={openModal}>Add Counter</button>
              <div className="tag is-large is-link" id="total-container">Total: <span id="total-sum">{nameArray.length}</span></div>
            </div>
          </div>
          <CommonModal
            buttonState={buttonState}
            buttonText={buttonText}
            isOpen={isOpen}
            closeModal={closeModal}
            nameArray={nameArray}
            handleAddCounter={(name) => handleAddCounter(name)}
            handleChangeCounter={(name) =>handleChangeCounter(name)}
          />
        </header>

        <main className="section">
          <section className="ads-container columns is-multiline">
            {nameArray.map((name) => {
              return (
                <CounterBox
                  key={name}
                  setButtonText={setButtonText}
                  openModal={openModal}
                  counterName={name}
                  setNameArray={setNameArray}
                  nameArray={nameArray}
                  setButtonState={setButtonState}
                  setNameText={setNameText}
                />
              )
            })}
          </section>
        </main>

      </div>
    )
}