import { Routes, Route, Switch } from 'react-router-dom';
import MyNavbar from "./components/Misc/Navbar";
import About from "./pages/About";
import Landing from "./pages/Landing";
import Faq from "./pages/Faq";
import DemoSetup from "./pages/DemoSetup"
import DemoWorksheet from "./pages/DemoWorksheet";
import Footer from "./components/Misc/Footer";
import TeacherLanding from "./pages/TeacherLanding";
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';


function App() {
    return(
        <div className="flex flex-col min-h-screen">
            <MyNavbar />
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/app/teacher" element={<TeacherLanding/>}/>
                <Route path="/app/teacher/create" element={<DemoSetup/>}/>
                <Route path="/app/teacher/edit/:userId/:assignmentId" element={<DemoSetup/>}/>
                <Route path="/app/student/:assignmentId" element={<DemoWorksheet/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/dashboard/:userId" element={<Dashboard/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/faq" element={<Faq />}/>
            </Routes>
        </div>
    )
};

export default App;