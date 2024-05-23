export default function AboutP () {
    return (
        <>
        <div className="px-10">
            <div className="hero min-h-96" style={{backgroundImage: 'url(../../public/AboutImage2.svg)'}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-5xl font-bold text-white">All About Us</h1>
                        <p className="mb-5 text-md text-white leading-relaxed">Welcome to Libera, your gateway to insightful discussions and transformative ideas. Founded with a mission to foster critical thinking and community engagement, Libera is a student think tank dedicated to exploring and addressing contemporary issues. Our members collaborate across disciplines to produce impactful research, host engaging events, and drive meaningful change. Join us as we create a platform where ideas thrive and futures are shaped.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 w-full px-10 rounded-none mt-4">
            <div className="grid-col-1 card bg-base-100 place-items-center rounded-none p-5">
                <img src="../../public/AboutImageSquare.svg" alt="Image description" className="h-full w-full object-cover rounded-box"/>
            </div>
            <div className="md:col-span-2 card bg-base-100 rounded-none place-items-center p-5 px-12 leading-loose">
                <h2 className="text-2xl font-semibold text-white mb-2">Our Story</h2>
                <p className="text-white text-justify">
                    Libera was born out of a shared vision to cultivate a vibrant community of thinkers and doers. Founded by a group of passionate students in their first semester, Libera has grown into a dynamic think tank that bridges diverse perspectives and fosters innovative solutions. Our journey began with small, thought-provoking discussions and has expanded into large-scale events, impactful research projects, and influential collaborations. We believe in the power of ideas to shape the future and are dedicated to creating a space where every voice can contribute to meaningful change. Join us as we continue to write our story, driven by curiosity, collaboration, and a commitment to excellence.
                </p>            
            </div>
        </div>
        </>

    )
}