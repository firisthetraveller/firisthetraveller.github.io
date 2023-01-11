import SocialLink from "./SocialLink";
import useFetch from "./useFetch";

function Socials() {
  const { data: socials, error } = useFetch("http://localhost:8000/socials");

  return (
    <>
      {error && <p>{error}</p>}
      {socials &&
        socials.map((social) => (
          <SocialLink logo={social.imagePath} alt={social.name} href={social.to} key={social.id}></SocialLink>
        ))
      }
    </>
  );
}

export default Socials;
