import { Component } from 'react'
import Wrap from '../../component/layout/Wrap'
import { withNavigation } from '../../component/layout/Navigation'

class BridePage extends Component {
    render() {
        return (
            <Wrap hasWave hasOptionalBG>
                <div className="padding-wave h-full overflow-y-auto scrollbar-hide">
                    <div className="content relative z-10 h-full">
                        <div className="flex flex-col justify-between">
                            <div className="container">
                                <h1 className="w-full text-center uppercase font-normal">Mempelai</h1>
                                <p className="text-center mt-[2vh]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente harum sint porro.</p>
                            </div>


                            <div className="mt-10 w-full">
                                <img
                                    src="/images/img-bride-page.png"
                                    alt="Images Bride"
                                    className="w-full rounded-[30px]"
                                />
                            </div>

                            <div className="container text-center bg-[url('/images/img-shape-wave.png')] bg-auto bg-no-repeat w-full bg-center -mt-60 pb-20 pt-48 text-white">
                                <h4>Marten Delacrona</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est minima accusamus dicta sint</p>

                                <img
                                    className="my-5 m-auto"
                                    src="/images/img-ring.png"
                                    alt="Ring Images"
                                />

                                <h4>Mince Saputri</h4>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque fugit architecto quaerat</p>
                            </div>

                        </div>

                    </div>
                </div>

            </Wrap>
        )
    }
}

export default withNavigation(BridePage)
