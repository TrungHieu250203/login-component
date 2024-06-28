import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/default";
import SignIn from "./pages/sign-in/sign-in";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={ <DefaultLayout><SignIn /></DefaultLayout> } />
        </Routes>
      </div>
    </Router>
  )
}

export default App
