import HomePage from './page/home/Home.page'

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
                  <HomePage />
               </div>
            </div>
         </div>
      </div>
   )
}

export default App
