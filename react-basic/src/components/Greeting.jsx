const Greeting = () => {
    const name = 'Reacter';
    const date = new Date();
  return (
    <div>
        <h1>name is: {name}</h1>
        <p>Current date is: {date.toLocaleDateString()}</p>
    </div>
  )
}

export default Greeting;