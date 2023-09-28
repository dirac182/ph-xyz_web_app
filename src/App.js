import Navbar from "./components/Misc/Navbar";
import Route from "./components/Misc/Route";
import About from "./pages/About";
import Landing from "./pages/Landing";
import Faq from "./pages/Faq";
import DemoSetup from "./pages/DemoSetup"
import DemoWorksheet from "./pages/DemoWorksheet";
import Footer from "./components/Misc/Footer";


function App() {
    return(
        <div className="font-sans flex flex-col min-h-screen">
            <Navbar />
            <Route path="/">
                <Landing/>
            </Route>
            <Route path="/demo/teacher">
                <DemoSetup/>
            </Route>
            <Route path="/demo/student">
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