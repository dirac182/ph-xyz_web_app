import { Routes, Route } from 'react-router-dom';
import MyNavbar from "./components/Misc/Navbar";
import About from "./pages/About";
import Landing from "./pages/Landing";
import Faq from "./pages/Faq";
import DemoSetup from "./pages/DemoSetup"
import DemoWorksheet from "./pages/DemoWorksheet";
import TeacherLanding from "./pages/TeacherLanding";
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import ClassPage from './pages/ClassPage';
import { useSelector } from 'react-redux';


function App() {
    const user = useSelector(state => state.user.userId);

    return(
        <div className="flex flex-col min-h-screen">
            <MyNavbar />
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/app/teacher" element={<TeacherLanding/>}/>
                <Route path="/app/teacher/create" element={<DemoSetup/>}/>
                <Route path="/app/teacher/edit/:userId/:assignmentId" 
                element={user ? <DemoSetup/> : <Landing/>}/>
                <Route path="/app/student/:assignmentId" element={<DemoWorksheet/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/dashboard/:userId" 
                element={user ? <Dashboard/> : <Landing/>}/>
                <Route path="/class/:userId/:classId" 
                element={user ? <ClassPage/> : <Landing/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/faq" element={<Faq />}/>
            </Routes>
        </div>
    )
};

export default App;