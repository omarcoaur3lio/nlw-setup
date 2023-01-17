import { Habit } from "./components/Habit";
import './styles/global.css';

export function App() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <Habit completed={5}/>
      <Habit completed={1}/>
      <Habit completed={4}/>
    </div>
  )
}
