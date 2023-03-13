import NavBar from "./NavBar"

const Layout = (props: { children: any }) =>
{
    return (
        <div className="d-flex">
            <NavBar />
            {props.children}
        </div>
    )
}

export default Layout;