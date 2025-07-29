import Accordian from "./components/Accordian";
import accordianData from "./components/accordianData.js";
import Calculator from "./components/Calculator";
import CounterDisplay from "./components/CounterDisplay";
import Form from "./components/Form.jsx";
import HiddenSearchBar from "./components/HiddenSearchBar";
import Meals from "./components/Meals";
import Testimonials from "./components/Testimonials";
import TodoDisplay from "./components/TodoDisplay";
import ToggleBackground from "./components/ToggleBackground";


function App(){
  return (
    <div>
      {/* <CounterDisplay /> */}
      {/* <TodoDisplay/> */}
      {/* <Meals/> */}
      {/* <Calculator/> */}
      {/* <ToggleBackground /> */}
      {/* <HiddenSearchBar/> */}
      {/* <Testimonials/> */}
      {/* <div>
        {accordianData.map(({title,head,text}) => (
          <Accordian title={title} head={head} text={text} key={Math.random()}/>
        ))}
      </div> */}
      <Form/>
    </div>
  )
}

export default App;