const ProfileCard = ({title, description}) => {
    const style = {
        backgroundColor: "lightgreen",
        padding: "20px",
        borderRadius: "10px",
        color: "darkgreen",
    };

    return (
        <div style={style}>
            <h1>Title: {title}</h1>
            <p>Description: {description}</p>
        </div>
    );
};

export default ProfileCard;