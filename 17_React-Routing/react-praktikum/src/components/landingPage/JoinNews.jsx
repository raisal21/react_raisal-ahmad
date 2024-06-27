// import Hero from '../../assets/images/Hero.png';

export default function HeroSection() {
    return (
        <section className="flex flex-col justify-center text-center bg-[#F3F5FA] py-12 gap-3">
            <h2 className="text-2xl text-[#0a8494] font-semibold">Join Our Newsletter</h2>
            <p className="text-[#444444]">Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            <div>
                <div className="join md:w-[660px] shadow rounded-full">
                    <input className="rounded-l-full input input-bordered join-item "/>
                    <button className="btn join-item rounded-r-full font-lg bg-[#109FE3] text-white border-none">Subscribe</button>
                </div>
            </div>


            
        </section>
    )
}