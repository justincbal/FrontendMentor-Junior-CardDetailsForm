import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [cardNum, setCardNum] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardMM, setCardMM] = useState("");
  const [cardYY, setCardYY] = useState("");
  const [cardCVC, setCardCVC] = useState("");

  const cont = () => {
    const form = document.querySelector(".form");
    const success = document.querySelector(".success");

    success.style.display = "none";
    form.style.display = "flex";

    setCardCVC('');
    setCardName('');
    setCardNum('');
    setCardYY('');
    setCardMM('');
  };

  const validate = () => {
    const nameError = document.querySelector(".nameError");
    const nameInput = document.querySelector("#cardHolder");

    const numberError = document.querySelector(".numberError");
    const cardInput = document.querySelector("#cardNumber");

    const dateError = document.querySelector(".dateError");
    const mmInput = document.querySelector("#cardMM");
    const yyInput = document.querySelector("#cardYY");

    const cvcError = document.querySelector(".cvcError");
    const cvcInput = document.querySelector("#cardCVC");

    if (!cardNum || !cardName || !cardMM || !cardYY || !cardCVC) {
      // card name validation
      if (!cardName) {
        nameError.textContent = "Can't be blank";
        nameInput.classList.add("errorBorder");
      } else {
        nameError.textContent = "";
        nameInput.classList.remove("errorBorder");
      }
      // card number validation
      if (!cardNum) {
        numberError.textContent = "Can't be blank";
        cardInput.classList.add("errorBorder");
      } else if (!/^[0-9\s]+$/.test(cardNum)) {
        numberError.textContent = "Wrong format, numbers only";
        cardInput.classList.add("errorBorder");
      } else {
        numberError.textContent = "";
        cardInput.classList.remove("errorBorder");
      }

      if (!cardMM || !cardYY) {
        dateError.textContent = "Can't be blank";
        if (!cardYY) {
          yyInput.classList.add("errorBorder");
        } else {
          yyInput.classList.remove("errorBorder");
        }

        if (!cardMM) {
          mmInput.classList.add("errorBorder");
        } else {
          mmInput.classList.remove("errorBorder");
        }
      } else if (!/^[0-9]+$/.test(cardYY) || !/^[0-9]+$/.test(cardMM)) {
        dateError.textContent = "Wrong format, numbers only";
        if (!/^[0-9]+$/.test(cardYY)) {
          yyInput.classList.add("errorBorder");
        } else {
          yyInput.classList.remove("errorBorder");
        }
        if (!/^[0-9]+$/.test(cardMM)) {
          mmInput.classList.add("errorBorder");
        } else {
          mmInput.classList.remove("errorBorder");
        }
      } else {
        mmInput.classList.remove("errorBorder");
        yyInput.classList.remove("errorBorder");
        dateError.textContent = "";
      }

      // cvc validation
      if (!cardCVC) {
        cvcError.textContent = "Can't be blank";
        cvcInput.classList.add("errorBorder");
      } else if (!/^[0-9]+$/.test(cardCVC)) {
        cvcError.textContent = "Wrong format, numbers only";
        cvcInput.classList.add("errorBorder");
      } else {
        cvcError.textContent = "";
        cvcInput.classList.remove("errorBorder");
      }
    } else {
      const inputs = document.querySelectorAll("input");
      inputs.forEach((input) => {
        input.classList.remove("errorBorder");
        input.value = '';
      });


     

      const errors = document.querySelectorAll(".error");
      errors.forEach((error) => (error.textContent = ""));

      cvcError.textContent = "";
      dateError.textContent = "";

      const form = document.querySelector(".form");
      form.style.display = "none";

      const success = document.querySelector(".success");
      success.style.display = "flex";
    }
  };

  const updateNum = (e) => {
    // console.log(e.target.value);
    if (e.target.value == "") {
      setCardNum("");
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
      setCardName("");
    } else {
      let format = e.target.value.toUpperCase();
      setCardName(format);
    }
  };

  const updateMM = (e) => {
    if (e.target.value == "") {
      setCardMM("");
      // blankError(e);
    } else {
      if (e.target.value.length == 1) {
        setCardMM("0" + e.target.value);
      } else {
        setCardMM(e.target.value);
      }
    }
  };

  const updateYY = (e) => {
    if (e.target.value == "") {
      setCardYY("");
    } else {
      if (e.target.value.length == 1) {
        setCardYY("0" + e.target.value);
      } else {
        setCardYY(e.target.value);
      }
    }
  };

  const updateCVC = (e) => {
    if (e.target.value == "") {
      setCardCVC("");
    } else {
      setCardCVC(e.target.value);
    }
  };

  const blankError = (e) => {
    console.log(e.target.id);
  };

  return (
    <>
      <main>
        <section className="cardArea">
          <div className="backCard">
            <img src="/images/bg-card-back.png" alt="" />
            <p className="backText">{cardCVC ? cardCVC : "000"}</p>
          </div>
          <div className="frontCard">
            <img src="/images/bg-card-front.png" alt="" />
            <img className="cardLogo" src="/images/card-logo.svg" alt="" />
            <p className="cardNum">
              {cardNum ? cardNum : "0000 0000 0000 0000"}
            </p>
            <p className="cardName">{cardName ? cardName : "JOHN SMITH"}</p>
            <p className="cardDate">
              {cardMM ? cardMM : "00"}/{cardYY ? cardYY : "00"}
            </p>
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
                // className="errorBorder"
                placeholder="e.g Jane Appleseed"
                onChange={(e) => updateName(e)}
                maxLength={30}
              />
              <p className="error nameError"></p>
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
              <p className="error numberError"></p>
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
                <p className="dateError"></p>
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
                <p className="cvcError"></p>
              </div>
            </div>
            <button type="button" className="conBtn" onClick={() => validate()}>
              Confirm
            </button>
          </form>
        </section>
        <section className="success">
          <img src="/images/icon-complete.svg" alt="" />
          <h1>THANK YOU!</h1>
          <p>We've added your card details</p>
          <button className="conBtn" onClick={() => cont()}>
            Continue
          </button>
        </section>
      </main>
    </>
  );
}

export default App;
