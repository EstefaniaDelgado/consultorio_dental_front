const FooterIcon = ({ img, link, altText }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img
        className="bg-white dark:bg-spacecadet dark:border dark:border-robineggblue p-2 rounded-lg w-8 h-8"
        src={img}
        alt={altText}
      />
    </a>
  );
};

export default FooterIcon;
