import React from 'react'
import banner from '../assets/banner.png'
import Banner from '../shared/Banner'

function Home() {
  return (
    <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-24' id='beranda'>
        <Banner banner ={banner} heading="Buat Website Anda" subheading="mulailah digitalisasikan UMKM anda untuk kemudahan pemasaran" btn1={'Ayo mulai!!'} btn2={'Penawaran'}/>
    </div>
  )
}

export default Home