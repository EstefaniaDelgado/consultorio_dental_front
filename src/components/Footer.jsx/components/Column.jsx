const Column = ({ title, links }) => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-spacecadet font-extrabold text-lg pb-2">{title}</h3>
      {links.map((link, index) => (
        <a key={index} href={link.href} className="text-primary">
          {link.text}
        </a>
      ))}
    </div>
  );
};

export default Column;
