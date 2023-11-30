import { useState } from "react";
import green from "../assets/dot.png"
import red from "../assets/dotred.png"
const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false);

    const packages = [
        { name: "Silver", monthlyPrice: 50, yearlyPrice: 500, description: "Mulailah dengan paket silver untuk melangkah ke arah digitalasasi UMKM", green: "/src/assets/dot.png" },
        { name: "Gold", monthlyPrice: 75, yearlyPrice: 750, description: "Nikmati pelayanan paket Gold yang akan memudahkan anda dalam mengurus website UMKM", green: "/src/assets/dot.png" },
        { name: "Platinum", monthlyPrice: 100, yearlyPrice: 1000, description: "Duduk manis dan uang akan terus berjalan ke walet anda dengan pemasaran paket paltinum", green: "/src/assets/dot.png" },
    ]




    return (
        <div className="md:px-14 p-4 max-w-s mx-auto py-10" id="penawaran">
            <div className="text-center">
                <h2 className="md:text-5xl text-3xl font-extrabold text-primary mb-2">Penawaran Kami</h2>
                <p className="text-tartiary md:w-1/3 mx-auto px-4">Mulailah digitalisasikan bisnis anda dari penawaran menarik kami, mulai dari landing page hingga e-commerce website</p>
                {/* toggle pricing */}
                <div className="mt-16">
                    <label htmlFor="toggle" className="inline-flex items-center cursor-pointer">
                        <span className="mr-8 text-2xl font-semibold">Bulanan</span>
                        <div className="w-14 h-6 bg-gray-300 rounded-full transition duration-200 ease-in-out">
                            <div className={`w-6 h-6 rounded-full transition duration-200 ease-in-out ${isYearly ? "bg-primary ml-8" : "bg-gray-500"}`}></div>
                        </div>
                        <span className="ml-8 text-2xl font-semibold">Tahunan</span>
                    </label>
                    <input type="checkbox" id="toggle" className="hidden" checked={isYearly} onChange={() => setIsYearly(!isYearly)} />

                </div>
            </div>
            {/* pricing cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto">
                {
                    packages.map((pkg, index) => <div key={index} className="border py-10 md:px-6 px-4 rounded-lg shadow-3xl">
                        <h3 className="text-3xl font-bold text-center text-primary">{pkg.name}</h3>
                        <p className="text-tartiary text-center my-5 ">{pkg.description}</p>
                        <p className="mt-5 text-center text-secondary text-4xl font-bold">
                            {isYearly ? `Rp.${pkg.yearlyPrice}K` : `Rp.${pkg.monthlyPrice}K`} <span className="text-base text-tartiary font-medium">/{isYearly ? 'year' : 'month'}</span>
                        </p>

                        {
                            pkg.name == "Silver" ?

                                <ul className="mt-4 space-y-2 px-4">
                                    <li className="flex gap-3 items-center"><img src={pkg.green} alt="" className="w-4 h-4" />Desain website</li>
                                    <li className="flex gap-3 items-center"><img src={pkg.green} alt="" className="w-4 h-4" />Custom domain</li>
                                    <li className="flex gap-3 items-center"><img src={pkg.green} alt="" className="w-4 h-4" />Konsultasi </li>
                                    <li className="flex gap-3 items-center"><img src={pkg.green} alt="" className="w-4 h-4" />Perawatan bulanan</li>
                                    <li className="flex gap-3 items-center"><img src={pkg.green} alt="" className="w-4 h-4" />Perubahan konten</li>
                                </ul>

                                :

                                pkg.name == "Gold" ?

                                    <ul className="mt-4 space-y-2 px-4">
                                        <li className="flex gap-3 items-center"><img src={pkg.green} alt="" className="w-4 h-4" />Desain website interaktif</li>
                                        <li className="flex gap-3 items-center"><img src={pkg.green} alt="" className="w-4 h-4" />Custom domain</li>
                                        <li className="flex gap-3 items-center"><img src={pkg.green} alt="" className="w-4 h-4" />Konsultasi</li>
                                        <li className="flex gap-3 items-center"><img src={pkg.green} alt="" className="w-4 h-4" />Perawatan mingguan</li>
                                        <li className="flex gap-3 items-center"><img src={pkg.green} alt="" className="w-4 h-4" />Perubahan konten</li>
                                    </ul>

                                    :

                                    <ul className="mt-4 space-y-2 px-4">
                                        <li className="flex gap-3 items-center"><img src={pkg.green} alt="" className="w-4 h-4" />Desain website interaktif</li>
                                        <li className="flex gap-3 items-center"><img src={pkg.green} alt="" className="w-4 h-4" />Custom domain</li>
                                        <li className="flex gap-3 items-center"><img src={pkg.green} alt="" className="w-4 h-4" />Konsultasi</li>
                                        <li className="flex gap-3 items-center"><img src={pkg.green} alt="" className="w-4 h-4" />Perawatan mingguan</li>
                                        <li className="flex gap-3 items-center"><img src={pkg.green} alt="" className="w-4 h-4" />Perubahan konten</li>
                                    </ul>


                        }

                        <div className="w-full mx-auto mt-8 flex items-center justify-center">
                            <button className="btnPrimary">Mulai</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Pricing