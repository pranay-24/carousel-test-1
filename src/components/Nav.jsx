import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export default function Nav() {
  return (
    <div>
      <Navbar>
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <p className="font-bold text-inherit">Carousel Using AI</p>
      </NavbarBrand>

      <NavbarContent className="flex gap-4" justify="center">
      <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Download Carousel
          </Button>
        </NavbarItem>

      <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      </Navbar>
    </div>
  )
}
