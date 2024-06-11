import Link from "next/link";

import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";

const Navbar = async () => {
  const categories = await getCategories();

  return ( 
    <div className="border-b">
        <div className="relative grid-cols-3 flex h-16 items-center  px-2">
        <div className="flex justify-start">
          <Link href="/" className="flex">
            <p className="font-bold text-xl">El Temach</p>
          </Link>
        </div>
        <div className="flex justify-end">
          <MainNav data={categories} />
        </div>
        <div className="flex justify-end ">
          <NavbarActions />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
