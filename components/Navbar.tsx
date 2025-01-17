import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/dynamo_vision_logo.jpg";

const Navbar = () => {
  return (
    <nav className="bg-[#1b3425] flex flex-row justify-between items-center px-5 py-5">
      <Link href="/">
        <Image src={Logo} alt="Logo" width={320} height={40} />
      </Link>
      <div className="flex flex-row gap-5 text-white">
        <Link href="/portfolio">Portfolio</Link>
        {/* <Link href="/packages">Packages</Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
