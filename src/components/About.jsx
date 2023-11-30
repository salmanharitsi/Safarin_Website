import aboutimg from "../assets/about.png"
import aboutimg2 from "../assets/about2.jpg"

const About = () => {
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-14" id="about">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="md:w-1/3">
                <img src={aboutimg} alt="" />
            </div>
            <div className="md:w-2/3">
                <h2 className="md:text-5xl text-3xl text-primary font-bold mb-5 leading-normal">Kami selalu mengikuti perkembangan zaman <span className="text-secondary">sesuai kebutuhan dan keinginan.</span></h2>
                <p className="text-tartiary text-lg mb-7">Bangun keberadaan digital bisnis UMKM Anda. Layanan pembuatan website kami menawarkan solusi desain yang menarik dan efektif.. </p>
                <button className="btnPrimary">Ayo mulai!!</button>
            </div>
            
        </div>
  
        {/* second part */}
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
            <div className="md:w-1/3">
                <img src={aboutimg2} alt="" />
            </div>
            <div className="md:w-2/3">
                <h2 className="md:text-5xl text-3xl text-primary font-bold mb-5 leading-normal">Bisnis UMKM Anda layak<span className="text-secondary">diperhitungkan online.</span></h2>
                <p className="text-tartiary text-lg mb-7">Dapatkan website kustom dari kami untuk meningkatkan visibilitas dan daya saing. </p>
                <button className="btnPrimary">Ayo mulai!!</button>
            </div>
            
        </div>
    </div>

    // {2nd part}


  )
}

export default About