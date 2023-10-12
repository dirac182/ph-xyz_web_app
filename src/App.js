import { Routes, Route, Switch } from 'react-router-dom';
import MyNavbar from "./components/Misc/Navbar";
import About from "./pages/About";
import Landing from "./pages/Landing";
import Faq from "./pages/Faq";
import DemoSetup from "./pages/DemoSetup"
import DemoWorksheet from "./pages/DemoWorksheet";
import Footer from "./components/Misc/Footer";
import TeacherLanding from "./pages/TeacherLanding";


function App() {
    return(
        <div className="font-sans flex flex-col min-h-screen">
            <MyNavbar />
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/app/teacher" element={<TeacherLanding/>}/>
                <Route path="/app/teacher/create" element={<DemoSetup/>}/>
                <Route path="/app/teacher/edit" element={<DemoSetup/>}/>
                <Route path="/app/student" element={<DemoWorksheet/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/faq" element={<Faq />}/>
            </Routes>
            <Footer />
        </div>
    )
};

export default App;