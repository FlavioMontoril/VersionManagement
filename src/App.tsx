import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AppLayout } from "./components/layout/app-layout";

export function App() {

  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout/>}>

        </Route>
      </Routes>
    </Router>
  )
}

