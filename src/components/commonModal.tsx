//モーダル制御をする機能

// import { MouseEventHandler } from "react"
import { useState } from "react";
import Modal from "react-modal"

interface CommonModalProps {
  isOpen :boolean,
  nameArray:string[],
  buttonText:string,
  buttonState:boolean,
  closeModal:() => void
  handleAddCounter:(name:string) => void
  handleChangeCounter:(name:string) => void
}

export const CommonModal = ({isOpen,nameArray,buttonText,buttonState,closeModal,handleAddCounter,handleChangeCounter}: CommonModalProps) => {
  const [name,setName] = useState<string>("");
  const [errTxt,setErrTxt] = useState<string>("");
  const [disable,setDisable] = useState<boolean>(true);

  const handleNameCheck = (newName:React.ChangeEvent<HTMLInputElement>) => {
    const newNameMirror:string = newName.target.value;
    setName(newNameMirror);
    if(newNameMirror == ""){
      setDisable(true)
    }else if(nameArray.includes(newNameMirror)){
      setErrTxt('既に使われている名前です。ほかの名前を使用してください。');
      setDisable(true);
    }else{
      setErrTxt("");
      setDisable(false);
    }
  }

  const addCounter = () => {
    setDisable(true);
    if(buttonState){
      handleAddCounter(name)
    }else{
      handleChangeCounter(name);
    }
  }

  const handleCloseModal = () => {
    setDisable(true);
    closeModal();
  }

    return (
        <Modal isOpen={isOpen} onRequestClose={closeModal} className="modal is-active" overlayClassName="overlay" ariaHideApp={false}>
        <div className="modal-background" onClick={handleCloseModal}></div>
          <div className="modal-content">
            <div className="box">
              <div className="field">
                <label className="label">Counter Name</label>
                <div className="control">
                  <input type="text" className="input" id="counter-name" placeholder="Enter Counter Name"  onChange={handleNameCheck}/>
                </div>
                <p className="help is-danger pt-2">{errTxt}</p>
              </div>
              <button className="button is-primary has-text-light" id="trigger-button" disabled={disable} onClick={addCounter}>{buttonText}</button>
            </div>
          </div>
        
          <button className="modal-close is-large" aria-label="close"></button>
          </Modal>
    )
}
