import landingBg from "../images/landing-bg4.png"
import Button from "../components/Misc/Button";
import Footer from "../components/Misc/Footer";

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
                     <div className="md:w-2/5 h-full m-10">
                        <h2>Lorem Ipsum Dolor Sit Amet</h2>
                     </div>
                     <div className="flex flex-col md:w-4/12 h-full m-10 text-center p-5">
                        <div>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="flex justify-center">
                           <Button secondary rounded >Register Now!</Button>
                        </div>
                     </div>
                </div>
               <div className="h-24">

               </div>
                <div className="bg-white flex flex-col md:flex-row justify-around my-24">
                  <div className="md:w-1/5 h-1/5 text-center shadow-xl m-10 p-4 border">
                     <h3>Ut Enim Ad Minim</h3>
                     <img alt="books" src= {`https://picsum.photos/seed/56423215/600/400`} />
                     <p>Lorem ipsum dolor sit amet. Consectetur adipiscing elit. Sed do eiusmod tempor incididunt. Ut labore et dolore magna aliqua</p>
                  </div>
                  <div className="md:w-1/5 h-1/5 text-center shadow-xl m-10 p-4 border">
                     <h3>Ut Enim Ad Minim</h3>
                     <img alt="books" src= {`https://picsum.photos/seed/56429645/600/400`} />
                     <p>Lorem ipsum dolor sit amet. Consectetur adipiscing elit. Sed do eiusmod tempor incididunt. Ut labore et dolore magna aliqua</p>
                  </div>
                  <div className="md:w-1/5 h-1/5 text-center shadow-xl m-10 p-4 border">
                     <h3>Ut Enim Ad Minim</h3>
                     <img alt="books" src= {`https://picsum.photos/seed/5648724/600/400`} />
                     <p>Lorem ipsum dolor sit amet. Consectetur adipiscing elit. Sed do eiusmod tempor incididunt. Ut labore et dolore magna aliqua</p>
                  </div>
                </div>
                <div className="h-24">

               </div>
                <div className="flex flex-col md:flex-row justify-around bg-white my-24">
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