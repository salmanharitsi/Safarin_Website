

const Footer = () => {
  return (
    <div className="bg-[#010851] md:px-14 p-4 max-w-screen-3xl mx-auto text-white">
        <div className="my-12 flex flex-col md:flex-row gap-10">
        <div className="md:-1/2 space-y-8">
        <a href="" className='text-2xl font-semibold flex items-center space-x-3 text-white'> <img src="#" alt="" className='w-10 inline-block items-center' /> SAFARIN</a>
        <p className="md:w-1/2 ">ayo kapan lagi, mulailah digitalisasi UMKM anda dengan pelayanan kami. untuk memudahkan pemasaran produk anda</p>
        <div>
            <input type="email" name="email" id="email" placeholder="Your email"  className="bg- py-2 px-4 rounded-md focus:outline-none"/>
            <input type="submit" value="Subscribe" className="px-4 py-2 bg-secondary rounded-md -ml-2 cursor-pointer hover:bg-white hover:text-primary duration-300 transition-all" />
        </div>
        </div>
        {/* footer navigation */}
        <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-center">
            <div className="space-y-4 mt-5">
                <h4 className="text-xl">Platform</h4>
                <ul className="space-y-3">
                    <a href="/" className="block hover:text-gray-300">Overview</a>
                    <a href="/" className="block hover:text-gray-300">Featured</a>
                    <a href="/" className="block hover:text-gray-300">About</a>
                    <a href="/" className="block hover:text-gray-300">Pricing</a>
                </ul>
            </div>
            <div className="space-y-4 mt-5">
                <h4 className="text-xl">Help</h4>
                <ul className="space-y-3">
                    <a href="/" className="block hover:text-gray-300">How does it work</a>
                    <a href="/" className="block hover:text-gray-300">where to as question</a>
                    <a href="/" className="block hover:text-gray-300">How to play?</a>
                    <a href="/" className="block hover:text-gray-300">wha is needed for this</a>
                </ul>
            </div>
            <div className="space-y-4 mt-5">
                <h4 className="text-xl">Contact</h4>
                <ul className="space-y-3">
                    <p href="/" className=" hover:text-gray-300">0823443221</p>
                    <p href="/" className=" hover:text-gray-300">123 xyzz</p>
                    <p href="/" className=" hover:text-gray-300">alsdafsad</p>
                    <p href="/" className=" hover:text-gray-300">28784</p>
                </ul>
            </div>
        </div>
        </div>

        <hr />
        <div>
            <p>SAFARIN all right deserved</p>
        </div>
    </div>
  )
}

export default Footer