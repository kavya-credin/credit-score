import React from "react";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import "../styles/CreditScoreForm.css";
// import { FiFolderPlus } from "react-icons/fi";
import { useRef } from "react";
import states from "../Data";
import Cookies from "js-cookie";
import axios from "axios";
import { toast } from "react-toastify";
function CreditScoreForm() {
  const token = Cookies.get("Token");
  const [formData, setFormData] = useState({
    token: token,
    email: "darshan.patel@credin.in",
    firstName: "",
    middleName: "",
    phoneNumber: [],
    emailAddress: [],
    addressDetails: [],
    referenceNumber: "",
    voterId: "",
    aadharNumber: "",
    panNumber: "",
    customerGender: "",
    customerDob: "",
  });
  const mobileRef = useRef(null);
  const [email, setEmail] = useState({
    SeqEmail: "",
    EmailType: "",
  });
  const [address, setAddress] = useState({
    Seq: "",
    AddressType: "",
    AddressLine1: "",
    AddressLine2: "",
    Locality: "",
    City: "",
    State: "",
    Postal: "",
  });
  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleModelInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setAddress((prevData) => ({ ...prevData, [name]: value }));
  };
  // console.log(address);
  const addMobileNumber = () => {
    if (!mobileRef.current || !mobileRef.current.value) {
      return; // Handle potential empty input
    }
    const newMobileNumber = mobileRef.current.value;
    mobileRef.current.value = "";
    if (newMobileNumber.length < 10) {
      toast.error("Invalid mobile number");
      // console.log("Invalid mobile number");
      return;
    }
    if (formData.phoneNumber.includes(newMobileNumber)) {
      toast.error("Mobile number already exists");
      // console.log("Mobile number already exists");
      return;
    }
    setFormData((prevData) => ({
      ...prevData,
      phoneNumber: [...prevData.phoneNumber, newMobileNumber],
    }));

    toast.success("Mobile number added successfully");
  };
  const addEmail = () => {
    if (!email.SeqEmail || !email.EmailType) {
      toast.error("Email is required");
      setEmail({
        SeqEmail: "",
        EmailType: "",
      });
      return;
    }
    setFormData((prevData) => ({
      ...prevData,
      emailAddress: [...prevData.emailAddress, email],
    }));
    toast.success("Email added successfully");
    setEmail({
      SeqEmail: "",
      EmailType: "",
    });
  };
  const handleFormData = async (event) => {
    event.preventDefault();
    if (!formData.token) {
      toast.error("Login First");
      return;
    }
    if (!formData.email) {
      toast.error("Email is required");
      return;
    }

    if (!formData.firstName) {
      toast.error("First Name is required");
      return;
    }
    if (formData.phoneNumber.length === 0) {
      toast.error("Add Atleast One Phone Number");
      return;
    }
    if (!formData.panNumber) {
      toast.error("Pan Number is required");
      return;
    }
    console.log(formData);
    try {
      const res = await axios.post(
        "http://staging.console.api.credin.in/credin/equifax/api",
        formData
      );
      if (res.status === 200) {
        console.log(res.data);
        toast.success(res.data.message);
      }
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    }

    setFormData({
      firstName: "",
      phoneNumber: [],
      emailAddress: [],
      addressDetails: [],
      referenceNumber: "",
      voterId: "",
      aadharNumber: "",
      panNumber: "",
      customerGender: "",
      customerDob: "",
    });
  };
  const handleModelOpen = () => {
    const background = document.querySelector(".inner");
    background.classList.add("blur");
    const model = document.querySelector(".model_div");
    model.classList.remove("hide");
  };
  const handleModelClose = () => {
    setFormData((prevData) => ({
      ...prevData,
      addressDetails: [...prevData.addressDetails, address],
    }));
    toast.success("Address added successfully");
    setAddress({
      Seq: "",
      AddressType: "",
      AddressLine1: "",
      AddressLine2: "",
      Locality: "",
      City: "",
      State: "",
      Postal: "",
    });

    const background = document.querySelector(".inner");
    background.classList.remove("blur");
    const model = document.querySelector(".model_div");
    model.classList.add("hide");
  };
  return (
    <div className="outer">
      <div className="inner">
        <h1 className="heading">Search Credit Score</h1>
        <div style={{ padding: "20px" }}>
          <form className="form" onSubmit={handleFormData}>
            <div className="form-div">
              <input
                type="text"
                placeholder="Name"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleInput}
                className="input"
              ></input>
              <input
                type="number"
                placeholder="Reference Number"
                name="referenceNumber"
                value={formData.referenceNumber}
                onChange={handleInput}
                className="input"
              ></input>
            </div>
            <div className="form-div">
              <div className="input-box">
                <input
                  placeholder="mobile"
                  ref={mobileRef}
                  className="inp"
                  type="number"
                />

                <button
                  className="add-btn"
                  type="button"
                  onClick={addMobileNumber}
                >
                  Add
                </button>
              </div>
              <input
                type="string"
                placeholder="Voter ID"
                name="voterId"
                value={formData.voterId}
                onChange={handleInput}
                className="input"
              ></input>
            </div>
            <div className="form-div">
              <input
                type="number"
                placeholder="Aadhar Number"
                name="aadharNumber"
                pattern="[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}"
                value={formData.aadharNumber}
                onChange={handleInput}
                className="input"
              ></input>
              <input
                type="text"
                pattern="[A-Za-z]{5}[0-9]{4}[A-Za-z]"
                placeholder="*Pan Number(AAAAA1111A)"
                name="panNumber"
                required
                value={formData.panNumber}
                onChange={handleInput}
                className="input"
              ></input>
            </div>
            <div className="form-div">
              <input
                type="date"
                placeholder="Date of Birth"
                name="dateOfBirth"
                onChange={handleInput}
                className="input"
                value={formData.customerDob}
              ></input>
              <div className="input-box">
                <select
                  className="input-select"
                  name="gender"
                  onChange={handleInput}
                  value={formData.customerGender}
                >
                  <option>Select Gender</option>
                  <option value="MALE">Male</option>
                  <option value="FEMALE">Female</option>
                </select>
              </div>
            </div>
            <div className="form-div-1">
              <div className="input-box">
                <select
                  className="input-select"
                  name="EmailType"
                  value={email.EmailType}
                  onChange={(e) =>
                    setEmail({ ...email, EmailType: e.target.value })
                  }
                >
                  <option>Email Type</option>
                  <option value="Office Email">Office Email</option>
                  <option value="Personal Email">Personal Email</option>
                </select>
              </div>

              <div className="input-box">
                <input
                  placeholder="email"
                  type="email"
                  name="SeqEmail"
                  value={email.SeqEmail}
                  onChange={(e) =>
                    setEmail({ ...email, SeqEmail: e.target.value })
                  }
                  className="inp"
                />
                <button className="add-btn" type="button" onClick={addEmail}>
                  <FaPlus />
                </button>
              </div>
            </div>
            <div className="form-div-1">
              <span
                style={{
                  color: "#004ba4",
                  textAlign: "center",
                  margin: "auto",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
                onClick={handleModelOpen}
              >
                Add Address
              </span>
            </div>
            <div>
              <button type="submit" className="button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="model_div hide">
        <div className="model_div_inner">
          <div className="model_form-div">
            <input
              type="text"
              placeholder="Seq"
              className="input"
              name="Seq"
              value={address.Seq}
              onChange={handleModelInput}
            />
            <div className="input">
              <select
                className="input-select"
                name="AddressType"
                value={address.AddressType}
                onChange={handleModelInput}
              >
                <option>Address Type</option>
                <option value="Home address">Home Address</option>
                <option value="Office address">Office Address</option>
                <option value=" Other address"> Other Address</option>
              </select>
            </div>
          </div>
          <div className="model_form-div">
            <textarea
              placeholder="Address Line 1....."
              className="input"
              value={address.AddressLine1}
              name="AddressLine1"
              onChange={handleModelInput}
            />
            <textarea
              placeholder="Address Line 2....."
              className="input"
              value={address.AddressLine2}
              name="AddressLine2"
              onChange={handleModelInput}
            />
          </div>
          <div className="model_form-div">
            <input
              type="text"
              placeholder="Locality"
              name="Locality"
              className="input"
              value={address.Locality}
              onChange={handleModelInput}
            />
            <input
              type="text"
              placeholder="City"
              name="City"
              className="input"
              value={address.City}
              onChange={handleModelInput}
            />
          </div>
          <div className="model_form-div">
            <div className="input">
              <select
                className="input-select"
                value={address.State}
                onChange={handleModelInput}
                name="State"
              >
                <option>Select State</option>
                {states.map((state) => (
                  <option key={state.stateCode} value={state.stateCode}>
                    {state.stateName}
                  </option>
                ))}
              </select>
            </div>
            <input
              type="number"
              placeholder="Pincode"
              className="input"
              name="Postal"
              value={address.Postal}
              onChange={handleModelInput}
            />
          </div>

          <button className="button" onClick={handleModelClose}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreditScoreForm;
