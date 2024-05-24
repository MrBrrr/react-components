import Link from "./Link";

function Sidebar() {
  const links = [
    { label: "Dropdown", url: "/" },
    { label: "Accordion", url: "/accordion" },
    { label: "Buttons", url: "/buttons" },
    { label: "Modal", url: "/modal" },
    { label: "Table", url: "/table" },
    { label: "Counter", url: "/counter" },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link
        key={link.label}
        url={link.url}
        className="mb-3"
        activeClassName="font-bold border-l-4 border-blue-500 pl-2"
      >
        {link.label}
      </Link>
    );
  });
  return (
    // overflow-y-scroll
    <div className="sticky top-0 flex flex-col items-start">
      {renderedLinks}
    </div>
  );
}

export default Sidebar;
