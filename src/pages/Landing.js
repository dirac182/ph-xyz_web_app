import landingBg from "../images/landing-bg4.png"
import Button from "../components/Misc/Button";
import Footer from "../components/Misc/Footer";
import { SiGoogleclassroom } from "react-icons/si";
import { FaUserGraduate } from "react-icons/fa";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";

function Landing() {
   
   const backgroundStyle = {
      backgroundImage: `url(${landingBg})`,
      backgroundSize: 'cover', // This ensures the image covers the whole area
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center', // This centers the image
      width: '' // Adjust the width as needed
  };

   return(
      <div style={backgroundStyle} className="min-h-screen">
            <main className="mainContent">
                <div className="flex md:flex-row flex-col justify-center bg-indigo-600 text-white mb-24">
                     <div className="md:w-2/5 h-full m-10 text-center">
                        <h1>Elevate Your Physics Teaching</h1>
                        <h2>Create Challenging and Engaging Assignments Tailored to the AP Physics Exam</h2>
                     </div>
                     <div className="flex flex-col md:w-4/12 h-full m-10 text-center p-5">
                        <div>
                           <p> <span className="">Tailor-Made for Success:</span> Our platform offers a diverse range of AP Physics questions, specifically designed to mirror the format and rigor of the AP exam. With these tools, students gain the confidence and competence needed to excel on their AP exam.</p>
                        </div>
                        <div className="flex justify-center pt-4">
                           <Button secondary rounded >Register Now!</Button>
                        </div>
                     </div>
                </div>
               <div className="h-24">

               </div>
                <div className="bg-white flex flex-col md:flex-row justify-around my-24">
                  <div className="md:w-1/5 h-1/5 text-center shadow-xl shadow-indigo-500/40 m-10 p-4 border">
                     <h3>Challenge Your Students</h3>
                     <div className="flex justify-center text-8xl text-indigo-600 text-center pb-6">
                     <FaUserGraduate />
                     </div>
                     <p>Every question is aligned with the essential knowledge and skills students need. Assignments are created using questions inspired by previous exams to ensure the proper allignment with the curriculum. </p>
                  </div>
                  <div className="md:w-1/5 h-1/5 text-center shadow-xl shadow-indigo-500/40 m-10 p-4 border">
                     <h3>Create Online Classrooms</h3>
                     <div className="flex justify-center text-9xl text-indigo-600 text-center pb-6">
                        <SiGoogleclassroom />
                     </div>
                     <p>Students create accounts using their Gmail. They can join classrooms and complete assignments through their own student dashboard.</p>
                  </div>
                  <div className="md:w-1/5 h-1/5 text-center shadow-xl shadow-indigo-500/40 m-10 p-4 border">
                     <h3>Stay Up-To-Date with Student Progress</h3>
                     <div className="flex justify-center text-9xl text-indigo-600 text-center pb-4">
                        <TbDeviceDesktopAnalytics />
                     </div>
                     <p>Teacher classrooms have gradebooks that keep track of every student in the class, which records their progress and grades for every assignment.</p>
                  </div>
                </div>
                <div className="h-24">

               </div>
                <div className="flex flex-col md:flex-row justify-around bg-white mt-24 mb-64">
                     <div className="p-3">
                        <h3>Ut Enim Ad Minim</h3>
                        <p>Lorem ipsum dolor sit amet. Consectetur adipiscing elit. Sed do eiusmod tempor incididunt. Ut labore et dolore magna aliqua</p>
                     </div>
                     <div className="m-3">
                        <img alt="books" src= {`https://picsum.photos/seed/564264515/600/400`} />
                     </div>
                </div>

            </main>
            <Footer/>
      </div>
   )   
}

export default Landing;