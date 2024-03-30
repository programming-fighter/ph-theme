import { bannerImg } from '@/app/site-settings/siteUrl'
import React from 'react'

const DefaultPromo = ({banner}: any) => {
    return (
        <div className='bg-white py-8'>
            <div className='container'>
                <div className='flex flex-wrap justify-between mx-4 md:mx-0  items-center gap-4 px-6'>
                    {banner?.map((ban: any) => <div key={ban.id} className='w-full sm:w-[45%] md:w-[30%] h-[200px] sm:h-[300px] md:h-[350px] overflow-hidden'>
                        <a href="https://admin.ebitans.com/design/homepage/banner" target="_blank" rel="noopener noreferrer"><img className='w-full h-full hover:scale-[1.03] transition-all duration-200 ease-in' src={bannerImg + ban.image} alt="" /></a>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default DefaultPromo