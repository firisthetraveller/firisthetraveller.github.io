function SocialLink(props) {
  const { logo, alt, href } = props;
  const size = 16;

  return (
    <>
      <a href={href}>
        <img src={`${logo}`} alt={`${alt}`} width={size} height={size} />
      </a>
    </>
  );
}

export default SocialLink;
