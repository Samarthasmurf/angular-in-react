import React, { useState, useEffect } from "react";

import "./angular-files/runtime";
import "./angular-files/polyfills";

import "./angular-files/main";
import "./angular-files/styles.css";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const [angularInputValue, setAngularInputValue] = useState("");

  document.addEventListener(
    "angular-input-event",
    function (e) {
      setAngularInputValue(e.detail);
    },
    { capture: true }
  );

  return (
    <div className="app">
      <div className="react-app">
        <h1>React App</h1>
        <div class="input-group mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            aria-label="firstName"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            aria-describedby="basic-addon1"
          />
        </div>
        <div class="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            aria-label="lastName"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            aria-describedby="basic-addon1"
          />
        </div>
        <div class="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Phone Number"
            aria-label="phoneNumber"
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
            aria-describedby="basic-addon1"
          />
        </div>
        <div class="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            aria-label="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            aria-describedby="basic-addon1"
          />
        </div>
        <div class="input-group mb-3">
          <div className="d-flex flex-row">
            <span className="me-2">Approval Status:</span>
            <span>{angularInputValue}</span>
          </div>
        </div>
      </div>
      <div className="angular-app">
        <h1 className="mb-2">Angular App</h1>
        <angular-component
          first-name={firstName}
          last-name={lastName}
          phone-number={phoneNumber}
          email={email}
        />
      </div>
    </div>
  );
}
export default App;
