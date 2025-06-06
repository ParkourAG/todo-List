import Navbar from "./Components/Navbar.jsx"
import Content from "./Components/Content.jsx"

function App() {

  return (
    <>
      <Navbar/>
      <div className="mx-auto mt-5 container flex flex-col bg-violet-100 rounded-xl min-h-[80vh]">
          <Content />
      </div>
    </>
  )
}

export default App
