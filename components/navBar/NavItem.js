import Link from "next/link";

const NavItem = ({ name, href, active }) => {
  return (
    <li
      className={`px-3 py-1.5 font-normal text-xl transition-colors  ${
        active
          ? "text-white"
          : "text-gray-500 hover:text-white hover:bg-gray-700 rounded"
      }`}
    >
      <Link href={href}>{name}</Link>
    </li>
  );
};
export default NavItem;
