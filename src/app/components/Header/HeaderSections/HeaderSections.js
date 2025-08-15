import React from 'react';
import {
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";

const menuStyles = "gap-3 px-4 py-2 rounded-md transition-colors duration-200 hover:bg-blue-500 hover:text-white";

const HeaderSections = () => (
  <NavbarContent className="font-orbitron mr-5 hidden flex gap-10">
     {/* Community Dropdown */}
    <Dropdown>
      <div className="relative group">
        <NavbarItem>
          <DropdownTrigger>
            <Button
              disableRipple
              className="font-extrabold px-3 py-2 rounded-md hover:bg-blue-500 hover:text-white transition-colors"
              radius="sm"
              variant="light"
            >
              Home
            </Button>
          </DropdownTrigger>
        </NavbarItem>
        <div className="absolute left-0 top-full mt-0 hidden group-hover:block z-[9999]">
          <DropdownMenu
            aria-label="Community Menu"
            className="bg-white text-gray-400 font-extrabold rounded-xl shadow-xl p-2 w-[200px]"
            itemClasses={{ base: menuStyles }}
          >
            <DropdownItem key="all-posts" onClick={() => window.location.href = '/signup'}>
                Login
            </DropdownItem>
            <DropdownItem key="my-posts" onClick={() => window.location.href = '/signup'}>
                Create an account
            </DropdownItem>
            <DropdownItem key="create-post" onClick={() => window.location.href = '/store'}>
                Our Kitchen
            </DropdownItem>
             <DropdownItem key="who-are-we" onClick={() => window.location.href = '/'}>
                Who are we
            </DropdownItem>
          </DropdownMenu>
        
        
        
        </div>
      </div>
    </Dropdown>





    {/* Community Dropdown */}
    <Dropdown>
      <div className="relative group">
        <NavbarItem>
          <DropdownTrigger>
            <Button
              disableRipple
              className="font-bold px-3 py-2 rounded-md hover:bg-blue-500 hover:text-white transition-colors"
              radius="sm"
              variant="light"
            >
              Community
            </Button>
          </DropdownTrigger>
        </NavbarItem>
        <div className="absolute left-0 top-full mt-0 hidden group-hover:block z-[9999]">
          <DropdownMenu
            aria-label="Community Menu"
            className="bg-white text-gray-400 font-extrabold rounded-xl shadow-xl p-2 w-[200px]"
            itemClasses={{ base: menuStyles }}
          >
            <DropdownItem key="all-posts" onClick={() => window.location.href = '/community'}>
                All Posts
            </DropdownItem>
            <DropdownItem key="my-posts"  onClick={() => window.location.href = '/community'}>
              My Posts
            </DropdownItem>
            <DropdownItem key="create-post"  onClick={() => window.location.href = '/community'}>
              Create a Post
            </DropdownItem>
          </DropdownMenu>
        </div>
      </div>
    </Dropdown>

    {/* Order Now Dropdown */}
    <Dropdown>
      <div className="relative group">
        <NavbarItem>
          <DropdownTrigger>
            <Button
              disableRipple
              className="font-bold px-3 py-2 rounded-md hover:bg-blue-500 hover:text-white transition-colors"
              radius="sm"
              variant="light"
            >
              Order Now
            </Button>
          </DropdownTrigger>
        </NavbarItem>
        <div className="absolute left-0 top-full mt-0 hidden group-hover:block z-[9999]">
          <DropdownMenu
            aria-label="Order Now Menu"
            className="bg-white text-gray-400 font-extrabold rounded-xl shadow-xl p-2 w-[200px]"
            itemClasses={{ base: menuStyles }}
          >
            <DropdownItem key="instant-order">
              Instant Order (soon)
            </DropdownItem>
            <DropdownItem key="classic-order"  onClick={() => window.location.href = '/store'}>

              Classic Order
            </DropdownItem>
          </DropdownMenu>
        </div>
      </div>
    </Dropdown>
     {/* Order Now Dropdown */}
    <Dropdown>
      <div className="relative group">
        <NavbarItem>
          <DropdownTrigger  onClick={() => window.location.href = '/contactus'}>

            <Button
              disableRipple
              className="font-bold px-3 py-2 rounded-md hover:bg-blue-500 hover:text-white transition-colors"
              radius="sm"
              variant="light"
            >
              Contact Us
            </Button>
          </DropdownTrigger>
        </NavbarItem>
        <div className="absolute left-0 top-full mt-0 hidden group-hover:block z-[9999]">
       
        </div>
       
       </div>
      
    </Dropdown>
    

  </NavbarContent>
);

export default HeaderSections;
