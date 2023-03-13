import NavBar from "./NavBar"

const Layout = (props: { children: any }) =>
{
    return (
        <div className="d-flex">
            <NavBar />
            <div className="w-100 my-4 me-4" style={{marginLeft: '110px'}}>
                {props.children}
            </div>
        </div>
    )
}

export default Layout;