import NavBar from "./NavBar"

const Layout = (props: { children: any }) =>
{
    return (
        <div className="d-flex">
            <NavBar />
            <div className="w-100 my-4 me-5" style={{marginLeft: '115px'}}>
                {props.children}
            </div>
        </div>
    )
}

export default Layout;