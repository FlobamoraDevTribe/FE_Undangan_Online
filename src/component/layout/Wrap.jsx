import ImgWaveTop from '../../asset/image/content/motif-top.png'
import ImgWaveBottom from '../../asset/image/content/motif-bottom.png'
import ImgFlowerTopRight from '../../asset/image/content/flower-top-right.png'
import ImgFlowerBottomLeft from '../../asset/image/content/flower-bottom-left.png'
import FloatingButton from '../general/FloatingButton'

const Wrap = ({
   hasWave = false,
   hasOptionalBG = false,
   hasDefaultContainer = true,
   children
}) => {
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
                  {hasWave ? (
                     <>
                        <div
                           className={
                              (hasDefaultContainer ? 'container' : '') +
                              ' padding-wave h-full overflow-y-auto scrollbar-hide'
                           }>
                           {children}
                        </div>

                        <div className="wp-wave-frame">
                           <img
                              src={ImgWaveTop}
                              className="frame-wave-top"
                              alt="motif-top"
                           />
                           <img
                              src={ImgWaveBottom}
                              className="frame-wave-bottom"
                              alt="motif-bottom"
                           />
                        </div>
                     </>
                  ) : (
                     children
                  )}

                  {hasOptionalBG ? (
                     <div className="wp-wave-frame">
                        <img
                           src={ImgFlowerTopRight}
                           className="frame-bg-tr"
                           alt="bg-tr"
                        />
                        <img
                           src={ImgFlowerBottomLeft}
                           className="frame-bg-bl"
                           alt="bg-bl"
                        />
                     </div>
                  ) : null}

                  {/* Example Floating Button Start */}
                  {hasWave ? (
                     <>
                        <div className="absolute bottom-[53px] z-30 w-full">
                           <div className="flex justify-center items-center w-full">
                              <FloatingButton iconSource={"/images/schedule-nav.png"} linkTo={"/schedule"} />
                              <FloatingButton iconSource={"/images/bride-nav.png"} linkTo={"/bride"} />
                              <FloatingButton iconSource={"/images/date-nav.png"} linkTo={"/direction"} />
                              <FloatingButton iconSource={"/images/gallery-nav.png"} linkTo={"/galery"} />
                              <FloatingButton iconSource={"/images/gift-nav.png"} linkTo={"/surprise"} />
                           </div>
                        </div>
                     </>
                  ) : null}
                  {/* Example Floating Button End */}
               </div>
            </div>
         </div>
      </div>
   )
}

export default Wrap
