import { BrowserRouter, Routes, Route } from "react-router-dom"
import Task from "./components/tasks/Task"
import Login from "./components/Login/Login"

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}>
          </Route>
          <Route path="/Task" element={<Task />}>
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
