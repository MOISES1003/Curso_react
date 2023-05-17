import { JobsDetails } from "../components/JobsDetails";
import {JobsList} from "../components/JobsLits";
import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom";
export function MyRoutes(){
    return(
       <Router>
        <Routes>
            <Route exact path="/" element={<JobsList/>} /> 
            <Route exact path="/jobs" element={<JobsList/>} /> 
            <Route exact path="/jobs/:position" element={<JobsDetails/>} /> 
        </Routes>
       </Router>
    )
}