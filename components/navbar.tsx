import Link from "next/link";

import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b fixed top-0 w-full bg-white z-10">
      <div className="grid-cols-3 flex h-16 items-center justify-between px-2">
        <Link href="/" >
          <p className="font-bold text-xl">Store</p>
        </Link>
        <MainNav data={categories} />
        
        <div className="flex justify-end">
          <NavbarActions />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
