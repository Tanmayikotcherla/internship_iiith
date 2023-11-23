import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import '../styles/main.css';
import { Link } from 'react-scroll';


function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<img
				src="/images/aaharam.jpeg" 
				alt="Logo"
				className="logo-image"
				style={{ maxWidth: "50px", height: "auto" }} 
			/>
			<nav ref={navRef}>
			<Link to=" video" spy={true} smooth={true} className="v">
            Home
          </Link>
		  <Link to="Menu" spy={true} smooth={true} className="Menu">
          Menu
        </Link>
        <Link to="cat" spy={true} smooth={true} className="cat">
          Catering
        </Link>
        <Link to="fav" spy={true} smooth={true} className="fav">
          Favorite recipes
        </Link>
        <Link to="con" spy={true} smooth={true} className="con">
          Contact Us
        </Link>

				
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
