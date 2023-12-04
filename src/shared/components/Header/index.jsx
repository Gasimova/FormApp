import { Navbar, NavbarBrand } from "reactstrap"

export const Header = () => {
    return (
        <>
            <Navbar
                className=""
                color="dark"
                dark
            >
                <NavbarBrand href="/">
                    <img
                        alt="logo"
                        src="https://cdn.wallpapersafari.com/98/19/HOSvek.png"
                        style={{
                            height: 40,
                            width: 40
                        }}
                    />
                    Reactstrap
                </NavbarBrand>
            </Navbar>
        </>
    )
}
