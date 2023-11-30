import featuredImg from '../assets/card.png'
import featuredImg2 from '../assets/card2.png'

const Features = () => {
    return (
        <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24"  id='projek'>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
                <div className="lg:w-1/4">
                    <h3 className="text-3xl text-primary font-bold  lg:w-full mb-3 ">Project Kami</h3>
                    <p className="text-base text-tartiary">Berikan bisnis Anda keunggulan digital dengan layanan pembuatan website khusus UMKM dari kami. Kami memahami kebutuhan unik Anda dan menyediakan solusi yang terjangkau dan efektif.</p>
                </div>
                {/* featured cards */}
                <div className="w-full lg:w-3/4">
                    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center md:gap-12 gap-8'>
                        <div className='bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer hover-container'>
                            <div >
                                <a href="http://manyarbuckets.shop/" target='_blank'><img src={featuredImg2} alt="" /></a>
                                <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>Manyar Bucket</h5>
                                <a class="overlay" href="http://manyarbuckets.shop/" target='_blank'>
                                    <p>Telusuri</p>
                                </a>
                            </div>
                        </div>
                        <div className='bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-16'>
                            <div>
                                <img src={featuredImg} alt="" />
                                <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>Akan datang!!</h5>
                            </div>
                        </div>
                        <div className='bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer'>
                            <div>
                                <img src={featuredImg} alt="" />
                                <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>Akan datang!!</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features