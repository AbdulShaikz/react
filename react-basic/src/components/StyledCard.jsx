const StyledCard = ({title, description}) => {
  return (
    <div style={{
      backgroundColor: "lightblue",
      padding: "20px",
      borderRadius: "10px",
      color: "darkblue",
    }}>
      <h1>Title: {title}</h1>
      <p>Description: {description}</p>
    </div>
  );
};

export default StyledCard;