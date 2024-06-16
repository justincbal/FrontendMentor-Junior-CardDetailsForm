import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <main>
        <section className="cardArea">
          <div className="backCard">
            <img src="/images/bg-card-back.png" alt="" />
            <p className="backText">000</p>
          </div>
          <div className="frontCard">
            <img src="/images/bg-card-front.png" alt="" />
            <img className="cardLogo" src="/images/card-logo.svg" alt="" />
            <p className="cardNum">0000 0000 0000 0000</p>
            <p className="cardName">JANE APPLESEED</p>
            <p className="cardDate">00/00</p>
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
              />
            </div>

            <div className="formRow">
              <label htmlFor="cardNumber">CARD NUMBER</label>
              <input type="number" name="cardNumber" id="cardNumber" placeholder="e.g. 1234 5678 9123 0000"/>
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
                    // size={4}
                  />
                  <input
                    type="text"
                    name="cardYY"
                    id="cardYY"
                    placeholder="YY"
                    // size={4}
                  />
                </div>
              </div>

              <div className="formRow">
                <label htmlFor="cardCVC">CVC</label>
                <input type="text" name="cardCVC" id="cardCVC" placeholder="e.g. 123"/>
              </div>

              
            </div>
            <button type="button" className="conBtn">Confirm</button>
          </form>

        </section>
      </main>
    </>
  );
}

export default App;
