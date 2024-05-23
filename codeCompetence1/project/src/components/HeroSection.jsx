import { Link } from 'react-router-dom';
export default function HeroS () {
    return(
        <>
        <div className="hero min-h-screen" style={{backgroundImage: 'url(../../public/HeroImageFilter.svg)'}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Welcome to Libera!</h1>
                <p className="mb-5">Join a community of passionate thinkers and change-makers. Together, we drive innovation, foster meaningful discussions, and shape a brighter future. Be a part of Libera and make your mark!</p>
                <Link className="btn btn-primary" to="/contact-us">Join Us</Link>
                </div>
            </div>
        </div>
        </>
    )
}
