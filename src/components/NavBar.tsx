import Logo from "../images/logo.webp";

const NavBar = () =>
{
    return (
        <div className="navbar y-auto px-4">
            <a href="/portfolio" className="text-decoration-none">
                <h3 className="fst-italic">
                    <img
                        src={Logo}
                        alt="Logo"
                        height="50rem"
                        style={{
                            filter: 'drop-shadow(0 0 5px green)'
                        }}
                    />
                    &ensp;Skyler Riggle
                </h3>
            </a>
        </div>
    );
}

export default NavBar;