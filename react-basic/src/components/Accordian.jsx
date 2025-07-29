import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Accordian = ({ title, head, text }) => {
  const [active, setIsActive] = useState(false);

  const accordianContainer = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '400px',
    margin: '20px auto',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    background: '#f9f9f9',
  };

  const header = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: '16px',
    cursor: 'pointer',
    borderRadius: '8px 8px 0 0',
    fontWeight: 'bold',
    fontSize: '18px',
  };

  const content = {
    width: '100%',
    padding: '16px',
    // backgroundColor: '#fff',
    borderRadius: '0 0 8px 8px',
    borderTop: '1px solid #ddd',
    fontSize: '16px',
    color: '#333',
  };

  return (
    <section style={accordianContainer}>
      <div style={header} onClick={() => setIsActive(!active)}>
        <span>{title}</span>
        <span>{active ? <FaMinus /> : <FaPlus />}</span>
      </div>
      {active && (
        <div style={content}>
          <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>{head}</div>
          <div>{text}</div>
        </div>
      )}
    </section>
  );
};

export default Accordian;