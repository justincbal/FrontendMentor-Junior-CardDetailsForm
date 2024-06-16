import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [cardNum, setCardNum] = useState("0000 0000 0000 0002");
  const [cardName, setCardName] = useState('JOHN SMITH');
  const [cardMM, setCardMM] = useState('00');
  const [cardYY, setCardYY] = useState('00');
  const [cardCVC, setCardCVC] = useState('000');
 
  const updateNum = (e) => {
    // console.log(e.target.value);
    if (e.target.value == "") {
      setCardNum("0000 0000 0000 0000");
    } else {
      const format = formatCardNum(e.target.value);

      setCardNum(format);
    }
  };

  const formatCardNum = (num) => {
    return num.replace(/(\d{4})(?=\d)/g, "$1 ");
  };

  const updateName = (e) => {
    if (e.target.value == "") {
      setCardName('JOHN SMITH');
    }
    else {
    let format = e.target.value.toUpperCase();
    setCardName(format);
    }
  }

  const updateMM = (e) => {
    if(e.target.value == '') {
      setCardMM('00');
      blankError(e);
    }
    else {
      if(e.target.value.length == 1) {
        setCardMM('0' + e.target.value);
      }
      else {
        setCardMM(e.target.value);
      }
    }
  }

  const updateYY = (e) => {
    if(e.target.value == '') {
      setCardYY('00');
    }
    else {
      if(e.target.value.length == 1) {
        setCardYY('0' + e.target.value);
      }
      else {
        setCardYY(e.target.value);
      }
    }
  }

  const updateCVC = (e) => {
    if (e.target.value == '') {
      setCardCVC('000');
    }
    else {
      setCardCVC(e.target.value);
    }
  }

  const blankError = (e) => {
    console.log(e.target.id);
  }

  return (
    <>
      <main>
        <section className="cardArea">
          <div className="backCard">
            <img src="/images/bg-card-back.png" alt="" />
            <p className="backText">{cardCVC}</p>
          </div>
          <div className="frontCard">
            <img src="/images/bg-card-front.png" alt="" />
            <img className="cardLogo" src="/images/card-logo.svg" alt="" />
            <p className="cardNum">{cardNum}</p>
            <p className="cardName">{cardName}</p>
            <p className="cardDate">{cardMM}/{cardYY}</p>
          </div>
        </section>
        <section className="form">
          <form action="">
            <div className="formRow">
              <label htmlFor="cardHolder">CARDHOLDER NAME</label>
              <input
                type="text"
                name="cardHolder"
                id="cardHolder"
                placeholder="e.g Jane Appleseed"
                onChange={(e) => updateName(e)}
                maxLength={30}
              />
            </div>

            <div className="formRow">
              <label htmlFor="cardNumber">CARD NUMBER</label>
              <input
                type="text"
                name="cardNumber"
                id="cardNumber"
                placeholder="e.g. 1234 5678 9123 0000"
                onChange={(e) => updateNum(e)}
                maxLength={16}
              />
            </div>

            <div className="formCol">
              <div className="formRow">
                <label htmlFor="">EXP. DATE (MM/YY)</label>
                <div className="expInputs">
                  <input
                    type="text"
                    name="cardMM"
                    id="cardMM"
                    placeholder="MM"
                    maxLength={2}
                    onChange={(e) => updateMM(e)}
                  />
                  <input
                    type="text"
                    name="cardYY"
                    id="cardYY"
                    placeholder="YY"
                    maxLength={2}
                    onChange={(e) => updateYY(e)}
                  />
                </div>
              </div>

              <div className="formRow">
                <label htmlFor="cardCVC">CVC</label>
                <input
                  type="text"
                  name="cardCVC"
                  id="cardCVC"
                  placeholder="e.g. 123"
                  maxLength={3}
                  onChange={(e) => updateCVC(e)}
                />
              </div>
            </div>
            <button type="button" className="conBtn">
              Confirm
            </button>
          </form>
        </section>
      </main>
    </>
  );
}

export default App;
