import Circle from '../assets/icons/Circle.svg'

export default function Footer() {
    return (
        <>
        <footer className="footer bg-white py-10 px-[80px] grid-cols-4">
            <nav>
                <h6 className="footer-title text-[#0a8494]">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title text-[#0a8494]">Useful Links</h6>
                <a className="link link-hover">Home</a>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Services</a>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
            </nav>
            <nav>
                <h6 className="footer-title text-[#0a8494]">Our Service</h6>
                <a className="link link-hover">Web Design</a>
                <a className="link link-hover">Web Development</a>
                <a className="link link-hover">Product Management</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Graphic Design</a>
            </nav>
            <nav>
                <h6 className="footer-title text-[#0a8494]">Our Social Network</h6>
                <p className="text-[#444444]">Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                <div className="flex gap-1 mt-1">
                    <img src={Circle} alt="circle" />
                    <img src={Circle} alt="circle" />
                    <img src={Circle} alt="circle" />
                    <img src={Circle} alt="circle" />
                    <img src={Circle} alt="circle" />
                </div>
            </nav>
        </footer>
        <footer className="footer bg-[#0a8494] border-t px-10 py-4 flex text-white justify-between">
                <p>
                © Copyright Arsha. All Rights Reserved
                </p>
                <p className='flex'>
                Designed by <span className='text-[#00ACC1]'>Tailwind Made</span>
                </p>
        </footer>
        </>
    )
}