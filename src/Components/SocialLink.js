function SocialLink(props) {
  const { logo, alt } = props;
  // if (logo) {
  //   ;
  // } // logo exists => image; if not => alt text

  return (
    <>
      <img src={logo} alt={alt} />
    </>
  );
}

export default SocialLink;
