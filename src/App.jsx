import Navbar from "./Components/Navbar.jsx"
import Content from "./Components/Content.jsx"
import './App.css'

function App() {

  return (
    <>
      <div className="background fixed w-[100vw] h-[100vh] 
                    bg-[url('https://img.freepik.com/free-photo/dark-blue-wall-shadow-background-with-flower_53876-105707.jpg?t=st=1749834124~exp=1749837724~hmac=230fd4f1e7518a06498ab0e299069a8f7638a925975ee821c5d83e4cce1ce5c7&w=1380')]
                    bg-cover -z-10">
      </div>
      <Navbar />
      <h1 className="mx-auto pt-10 w-fit font-[1000] text-[#ffffff78] text-[58px]">To-Do List App</h1>
      <div className="content mx-auto p-11 w-fit mt-[8px]  flex flex-col  rounded-xl min-h-[60vh]">
        <Content />
      </div>
      

    </>
  )
}

export default App