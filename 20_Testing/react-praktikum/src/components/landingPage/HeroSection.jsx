import Hero from '../../assets/images/Hero.png';

export default function HeroSection() {
    return (
        <section className="flex justify-center bg-[#0a8494]">
            <article className="flex mx-[80px] space-x-6 mt-[153px] mb-[80px]">
                <div className='w-1/2 flex flex-col my-28 mx-3 text-white'>
                    <h1 className='text-5xl font-bold leading-[56px]'>Better Solution For Your Business</h1>
                    <p className='opacity-80 font-medium text-2xl'>We are team of talented designers making websites with Tailwind</p>

                    <div className="space-x-6 flex justify-start mt-10">
                        <button className='btn rounded-3xl lg:px-7 text-white bg-[#109FE3] border-none lg:py-1'>Get Started</button>
                        <button>Watch Video</button>
                    </div>
                </div>
                <img src={Hero} alt="Hero" className='lg:w-1/2'/>
            </article>
        </section>
    )
}