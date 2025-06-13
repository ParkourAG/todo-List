import Navbar from "./Components/Navbar.jsx"
import Content from "./Components/Content.jsx"
import './App.css'

function App() {

  return (
    <>
      <div className="background fixed w-[100vw] h-[100vh] 
                    bg-[url('public/dark-blue-wall-shadow-background-with-flower.jpg')]
                    bg-cover -z-10">
      </div>
      <Navbar />
      <h1 className="mx-auto pt-10 w-fit font-[1000] text-[#ffffff78] text-[58px]">To-Do List App</h1>
      <div className="content mx-auto p-11 w-fit mt-5  flex flex-col  rounded-xl min-h-[60vh]">
        <Content />
      </div>
      

    </>
  )
}

export default App