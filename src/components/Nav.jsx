import { headerLogo } from "../assets/images";
import { navLinks } from "../constants/data";
import { Button, Menu} from "../components";
import { GithubIcon } from "../assets/allIcons";

const Nav = () => {
  return (
    <header className='fixed padding-x py-6 z-40 w-full shadow-lg backdrop-blur-xl bg-white/30'> {/* fixed ensures the navbar remains ontop while scrolling, if not wanted "absolute" can be used instead "fixed" */}
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
            className='m-0 w-[129px] h-[29px]'
          />
        </a>
        {/* NavLinks (Large Screens): Shows on Large screens only */}
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray py-1 px-2 rounded hover:bg-coral-red hover:text-white'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Buttons (Large Screens): Shows on Large screens only */}
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <Button label='Source codes' onClick={() => window.open("https://github.com/igbokwe-chibueze/nike_shoe_hub")}>
            <GithubIcon className={"w-8 h-8 fill-white"}/>
          </Button>
        </div>
        <div className='hidden max-lg:block'>
          {/* <img src={hamburger} alt='hamburger icon' width={25} height={25} /> */}
          <Menu />
        </div>
      </nav>
    </header>
  );
};

export default Nav;