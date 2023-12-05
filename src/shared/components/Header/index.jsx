import { Badge, Navbar, NavbarBrand } from "reactstrap"
import { useGloablProvider } from "../../store/globalProvider"

export const Header = () => {

    const { state } = useGloablProvider()

    return (
        <>
            <Navbar
                className=""
                color="dark"
                dark
            >
                <NavbarBrand href="/">
                    <span style={{marginRight:10}}>Blog App</span>
                    {/* <img
                        alt="logo"
                        src="https://cdn.wallpapersafari.com/98/19/HOSvek.png"
                        style={{
                            height: 40,
                            width: 40
                        }}
                    /> */}
                   <Badge color="warning">{state.posts.length}</Badge>
                </NavbarBrand>
            </Navbar>
        </>
    )
}
