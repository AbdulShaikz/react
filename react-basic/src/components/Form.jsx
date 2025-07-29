import { useState } from "react";

const cardStyle = {
  maxWidth: "400px",
  margin: "40px auto",
  padding: "24px",
  borderRadius: "8px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  background: "#fff",
};

const cardImageStyle = {
  height: "120px",
  background: "#eee",
  borderRadius: "8px 8px 0 0",
  marginBottom: "16px",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "8px 0",
  borderRadius: "4px",
  border: "1px solid #ccc",
  fontSize: "16px",
  boxSizing: "border-box",
};

const errorStyle = {
  color: "red",
  fontSize: "14px",
  margin: "0 0 8px 0",
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  background: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  fontSize: "16px",
  cursor: "pointer",
  marginTop: "12px",
};

const successStyle = {
  color: "green",
  fontSize: "16px",
  margin: "12px 0",
};

const Form = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [success, setSuccess] = useState("");

  const validate = () => {
    let valid = true;

    if (!userName.trim()) {
      setErrorUserName("Username is required");
      valid = false;
    } else {
      setErrorUserName("");
    }

    if (!email.trim()) {
      setErrorEmail("Email is required");
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorEmail("Email is invalid");
      valid = false;
    } else {
      setErrorEmail("");
    }

    if (!password) {
      setErrorPassword("Password is required");
      valid = false;
    } else if (password.length < 6) {
      setErrorPassword("Password must be at least 6 characters");
      valid = false;
    } else {
      setErrorPassword("");
    }

    if (!confirmPassword) {
      setErrorConfirmPassword("Please confirm your password");
      valid = false;
    } else if (confirmPassword !== password) {
      setErrorConfirmPassword("Passwords do not match");
      valid = false;
    } else {
      setErrorConfirmPassword("");
    }

    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSuccess("Registration successful!");
      setUserName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } else {
      setSuccess("");
    }
  };

  return (
    <section style={cardStyle}>
      <div style={cardImageStyle}></div>
      <form>
        <input
          type="text"
          value={userName}
          placeholder="Enter Name"
          onChange={(e) => setUserName(e.target.value)}
          style={inputStyle}
        />
        <p style={errorStyle}>{errorUserName}</p>
        <input
          type="text"
          value={email}
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
        <p style={errorStyle}>{errorEmail}</p>
        <input
          type="password"
          value={password}
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />
        <p style={errorStyle}>{errorPassword}</p>
        <input
          type="password"
          value={confirmPassword}
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={inputStyle}
        />
        <p style={errorStyle}>{errorConfirmPassword}</p>
        {success && <p style={successStyle}>{success}</p>}
        <button style={buttonStyle} onClick={handleSubmit}>Submit</button>
      </form>
    </section>
  );
};

export default Form;