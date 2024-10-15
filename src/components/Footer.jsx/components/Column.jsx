const Column = ({ title, links }) => {
  return (
    <article className="flex flex-col gap-3 basis-56 md:basis-auto">
      <h3 className="text-spacecadet font-extrabold text-lg pb-2">{title}</h3>
      {links.map((link, index) => (
        <a key={index} href={link.href} className="text-primary">
          {link.text}
        </a>
      ))}
    </article>
  );
};

export default Column;
