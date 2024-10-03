import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "../pages/Signup";
import Preview from "../pages/Preview";

const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Signup />} />
                <Route path="/preview" element={<Preview />} />
            </Routes>
        </Router>
    )
}

export default Routing