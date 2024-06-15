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
        <section className="form">form</section>
      </main>
      
    </>
  );
}

export default App;
