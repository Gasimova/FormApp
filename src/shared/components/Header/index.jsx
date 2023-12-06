import { Button } from "antd"
import { useLocation, useNavigate } from "react-router-dom"
import { Badge, Navbar, NavbarBrand } from "reactstrap"
import { useGloablProvider } from "../../store/globalProvider"
import { PoweroffOutlined, PlusOutlined } from '@ant-design/icons';
import { useState } from "react";
import { Router } from "../../constant/router";

export const Header = () => {
    const [loadings, setLoadings] = useState([]);
    const { state } = useGloablProvider()
    const  navigate  = useNavigate()

    const {pathname} = useLocation()
    const isAdd = Router.ADD === pathname

    const enterLoading = (index) => {
        setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = true;
            return newLoadings;
        });

        setTimeout(() => {
            setLoadings((prevLoadings) => {
                const newLoadings = [...prevLoadings];
                newLoadings[index] = false;
                return newLoadings;
            });
        }, 1000);
    };

    return (
        <>
            <Navbar
                className="header-custom"
                color="dark"
                dark
            >
                <NavbarBrand onClick={() => navigate("/")}>
                    <span style={{ marginRight: 10 }}>Blog App</span>
                    {/* <img
                        alt="logo"
                        src="https://cdn.wallpapersafari.com/98/19/HOSvek.png"
                        style={{
                            height: 40,
                            width: 40
                        }}
                    /> */}
                    <Badge className="bg-custom" color="#00e4ea">{state.posts.length}</Badge>
                </NavbarBrand>
                {
                    !isAdd ? 
                    <Button
                    type="primary"
                    icon={<PlusOutlined />}
                    loading={loadings[1]}
                    onClick={() => {enterLoading(1); navigate(Router.ADD)}}
                    className="bg-custom"
                >
                </Button> : ''
                }
                
            </Navbar>

        </>
    )
}
