import Rate from './Components/Rate/Rate'
import './App.css'
import "./Components/Rate/Rate.module.css"

function App() {
  return (
    <>
      <div className="container">
        <div className="inner">
          <Rate color="#00CED1" cost="300" speed="10" />
          <Rate color="#3CB371" cost="450" speed="50" />
          <Rate color="#FA8072" cost="550" speed="100" scale />
          <Rate color="black" cost="1000" speed="200" />
        </div>
      </div>
    </>
  )
}

export default App