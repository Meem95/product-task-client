import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import { NavLink } from "react-router-dom";


export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "Products",
    "Contact",
    "Login",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}  className=" max-w-full h-20  sticky top-0 z-10 backdrop-blur-xl bg-gray-100">
      <NavbarContent>
        {/* <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        /> */}
        <NavbarBrand>
          <NavLink to='/'>
          <img className="h-20 w-20" src="https://i.ibb.co/tHR5Xps/logo.webp" alt="" />
          </NavLink>
       
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "sm:block font-bold  text-[#D9AF47]"
              : "sm:block"
          }
        >
          Products
        </NavLink>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className=" lg:flex">
        <Button as={Link}   variant="flat">
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive
              ? "font-bold  text-[#D9AF47]"
              : "font-bold "
          }
        >
          Login
        </NavLink>
        </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link}  variant="flat">
          <NavLink
          to="/signup"
          className={({ isActive }) =>
            isActive
              ? "font-bold  text-[#D9AF47]"
              : "font-bold "
          }
        >
          SignUp
        </NavLink>
          </Button>
        </NavbarItem>
      </NavbarContent>
      {/* <NavbarMenu className="mt-4">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu> */}
    </Navbar>
  );
}
