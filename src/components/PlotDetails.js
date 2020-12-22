import React from "react";
import "./ContactInfo.css";

function PlotDetails() {
 
  return (
    <div className="plot-container" >
      <div className="layout">
        <h2>
          <i class="fas fa-home"></i>&nbsp;Layout Plan
        </h2>
        <div className="div_1">
        <h3>Sizes of Resedential Plots:</h3>
        <li>"L" 80 sq.yds</li>
        <li>"R" 120 sq. yds</li>
        <li>"A" 240 sq. yds</li>
        <li>"B" 400 sq. yds</li>
        </div>

        <h3>Sizes of Commecial Plots</h3>
        <li>"LS" 66.66 sq.yds</li>
        <li>"Petrol Pump" 1194.96 sq. yds</li>
        <li>"SB" 400 sq. yds</li>

        <h3>Outer Development Charges</h3>
        <li>"L" 80 sq.yds</li>
        <li>"R" 120 sq. yds</li>
        <li>"A" 240 sq. yds</li>
        <li>"B" 400 sq. yds</li>
      </div>
      <div className="payment">
        <h2>
          <i class="fab fa-ethereum"></i>&nbsp;Payment
        </h2>
        <h3>Pay the SDECHS Charges :</h3>
        <p>The Members of SDECHS can deposite their Dues as follows</p>
        <br />
        <br />
        <p className="elem_1">
          Payment through UBL Cash Counter, Online Banking, ATM and Internet
          Banking
        </p>
        <li>UNITED BANK LTD</li>
        <li>Branch: SMCHS</li>
        <li>Branch Code: 0493</li>
        <li>
          Account Title: Statistics Division Employees Co-operative Housing
          Society
        </li>
        <li>Account Number: 049310045126</li>
        <br />
        <p>
          Deposit the Amount in any UBL Branch or Internet Banking and send
          original deposit slip to SDECHS Head office, Statistics Division
          Employees Co-operative Housing Society Limited, 1-B, SMCHS, Karachi
          and keep photocopy for your record.
        </p>
        <p>
          Please also mention your Name and Membership number on the back of
          Deposit Slip.
        </p>
        <br />
        <br />
        <p className="elem_2">Payment through Cheque, Pay Order and Bank Demand Draft</p>
        <p>
          Or You can send the Cheque, Pay Order or Bank Demand Draft in favour
          of SDECHS to SDECHS Head office Statistics Division Employees
          Co-operative Housing Society Limited, 1-B, SMCHS, Karachi and keep
          photocopy for your record.
        </p>
        <p>
          Please also mention your Name and Membership number on the back of
          Cheque, Pay Order or Bank Demand Draft.
        </p>
        <br />
        <br />
      </div>
    </div>
  );
}

export default PlotDetails;
