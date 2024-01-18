function App() {
   return (
      <div className="workspace-container">
         <div
            className="fixed h-full w-full"
            style={{
               inset: '0px',
               transformOrigin: '50% 50%',
               translate: '0px 0px',
            }}>
            <div className="flex items-center justify-center h-full w-full">
               <div className="canvas">
                  <div className="container frame-landing-page">
                     <div className="greetings mb-10">
                        <h2 className="text-xl font-normal text-primary text-center">
                           You are invited to our wedding
                        </h2>
                        <h1 className="text-5xl font-bold text-primary text-center">
                           Marten & Mince
                        </h1>
                     </div>

                     <div className="wp-image-landing-page mb-[50px]">
                        <img
                           src="/images/img-landing-page.png"
                           alt="Image Landing Page"
                        />
                     </div>

                     <div className="flex justify-center">
                        <button className="text-lg font-normal text-white bg-primary uppercase px-[16px] py-[6px] rounded-full">
                           Buka
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default App
