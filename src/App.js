import MyNavbar from "./components/Misc/Navbar";
import Route from "./components/Misc/Route";
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
            <Route path="/">
                <Landing/>
            </Route>
            <Route path="/app/teacher">
                <TeacherLanding/>
            </Route>
            <Route path="/app/teacher/create">
                <DemoSetup/>
            </Route>
            <Route path="/app/teacher/edit">
                <DemoSetup/>
            </Route>
            <Route path="/app/student">
                <DemoWorksheet/>
            </Route>
            <Route path="/about">
                <About/>
            </Route>
            <Route path="/faq">
                <Faq />
            </Route>
            <Footer />
        </div>
    )
};

export default App;