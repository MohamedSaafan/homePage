import React from "react";
import FirstNavBar from "../components/FirstNavBar";
import Footer from "../components/Footer";
import MainNavBar from "../components/MainNavBar";
import "./Guides.css";

const Guides = (props) => {
  return (
    <div className="guides">
      <FirstNavBar />
      <MainNavBar color="blue" shouldManipulate={false} />
      <div className="guides-content container">
        <h4>Cardano StakePool Delegation AltsTogether</h4>
        <br />
        <br />
        <div className="step1 step">
          <h6>Step 1: Update your hardware wallet </h6> <br />
          <br />
          <p>
            Update your Hardware wallet to the latest firmware version using the
            tool provided by the manufacturer! For Ledger it’s “Ledger Live”.
            This will automatically update the Cardano app to the latest version
            as well!
          </p>
        </div>
        <div className="step2 step">
          <h6>Step 2: Connect with AdaLite </h6>
          <p>
            Visit the <a>​AdaLite​</a> website directly through the{" "}
            <a href="https://adalite.io" target="_blank">
              http://adalite.io
            </a>
            <br />
            <br />
            <p>Choose the option “Hardware Wallet” :</p>​
          </p>
          <img
            className="center"
            src="http://placehold.it/150x150"
            alt="instruction"
          />
          <p>
            Then choose the model you use (We will proceed with Ledger Nano S as
            it is the one we use ourselves):
          </p>
        </div>
        <div className="step3 step">
          <h6>Step 3: Export Public keys </h6>
          <br />
          <p>
            Click “Unlock with Ledger”, and start the Cardano app on the Ledger
            device itself. On the Ledger you will be asked to “Export public
            key” which you confirm by pressing both buttons simultaneously and
            confirm pressing the right button. This needs to be done twice!
          </p>
          <img
            className="center"
            src="http://placehold.it/150x150"
            alt="instruction"
          />
        </div>
        <div className="step4 step">
          <h6>Step 4: Convert stake to “stakeable” </h6>
          <br />
          <p>
            You should now see your “Non-staking” balance reflect the full
            amount of ADA on your Ledger. In order to stake them klick “Convert
            to stakable” on the right side:
          </p>
          <img
            className="center"
            src="http://placehold.it/150x150"
            alt="instructions"
          />
        </div>
        <div className="step5 step">
          <h6>Step 5: Choose stakepool and delegate </h6>
          <br />
          <p>
            Change the default stake pool on the right to our Altstogether Pool
            ID. Choose the stakepool you wish to delegate to by using the
            Pool-ID and delegate your stake
          </p>
          <br />
          <p>Delegate Stake</p>

          <br />
          <p>937880739bd2192976d34ec245e6bac4053cf0e6e8f4e96b157413d0</p>

          <br />
          <p>Pool ID: AltsTogether</p>
          <p>Ticker: ALTS</p>
          <p>Tax: 2%</p>
          <p>Fixed Cost: 340.00000</p>
          <p>
            HomePage:{" "}
            <a href="https://altstogether.com">Https://altstogether.com</a>
          </p>
        </div>
        <p>
          we are looking forward to your delegations and if you have questions
          reach out to us.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Guides;
