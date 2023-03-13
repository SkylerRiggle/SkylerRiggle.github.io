import NavBar from "./NavBar"

const Layout = (props: { children: any }) =>
{
    return (
        <div className="d-flex">
            <NavBar />
            <div style={{marginLeft: '125px'}}>
                {props.children}
            </div>
        </div>
    )
}

export default Layout;