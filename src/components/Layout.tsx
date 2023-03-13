import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = (props: { children: any }) =>
{
    return (
        <>
            <NavBar />
            {props.children}
            <Footer />
        </>
    )
}

export default Layout;