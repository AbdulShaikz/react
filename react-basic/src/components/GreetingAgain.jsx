const GreetingAgain = ({timeOfDay}) => {
  return timeOfDay === 'morning' ? <p>Good Morning</p> : 
  timeOfDay === 'afternoon' ? <p>Good Afternoon</p> :null;
}

export default GreetingAgain;