import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const AboutBanner = () => {
  const navigate = useNavigate();
  return (
    <div className='flex items-center justify-center mt-[150px] text-white'>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center p-5 md:p-0 w-auto h-auto md:h-[260px] md:w-[1040px] gap-6 bg-gradient-to-r from-primary to-very-light-primary xl:rounded-xl'>
            <div className='md:w-[600px] flex flex-col gap-5 ml-7'>
                <h2 className='font-bold text-[28px]' >Do You Own a Luxury Car?</h2>
                <p className='text-[16px] md:w-[300px] lg:w-[500px]'>Monetize your vehicle effortlessly by listing it on Qrental. We take care of insurance, driver verification, and secure payments -- so you can earn passive income, stress-free</p>
                <button className='text-primary bg-white rounded-xl h-[36px] w-[127.14px] text-[12px]' onClick={() => navigate('/owner/')}>List your car</button>
            </div>
            <img src={assets.banner_car_image} alt="car image" className='h-[60%] md:h-[70%] lg:ml-[70px]' />
        </div>
    </div>
  )
}

export default AboutBanner