import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Page } from "./Page";

export function App() {

  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Page/>}>

        </Route>
      </Routes>
    </Router>
  )
}

