

export default function Header() {
  return (
    <header className="navbar md:h-[60px] p-2 shadow sticky top-0 bg-white z-50 font-roboto">
      <div className="lg:navbar-start">
        <div className="dropdown block lg:hidden">
          <div role="button" aria-label="sm-menu" tabIndex="0" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box">
            <li><a href="#" className="btn btn-primary w-full">Home</a></li>
            <li><a href="#" className="btn btn-ghost">Features</a></li>
            <li><a href="#" className="btn btn-ghost">Pricing</a></li>
            <li><a href="#" className="btn btn-ghost">FAQs</a></li>
            <li><a href="#" className="btn btn-ghost">About</a></li>
          </ul>
        </div>
        <a href="#" className="btn btn-ghost sm:text-lg md:text-2xl font-semibold text-[#212529]">
          Simple Header
        </a>
      </div>
      <div className="navbar-end">
        <nav className="gap-2 text-base sm:hidden lg:block" id="lg-menu">
          <a href="#" className="btn btn-primary">Home</a>
          <a href="#" className="btn btn-ghost">Features</a>
          <a href="#" className="btn btn-ghost">Pricing</a>
          <a href="#" className="btn btn-ghost">FAQs</a>
          <a href="#" className="btn btn-ghost">About</a>
        </nav>
      </div>
    </header>
  )
}
