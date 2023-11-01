import NavItem from "./NavItem";

const NavList = ({ list }) => {
  return (
    <ul className="prevent-select mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {list.map((item) => (
        <NavItem
          key={item.name}
          name={item.name}
          href={item.href}
          active={item.active}
        />
      ))}
    </ul>
  );
};
export default NavList;
