import { Icon } from "../Icons";
import styles from "./Profiles.css";

const Profiles = () => {
  const SOCIAL_LINKS = [
    {
      name: "github",
      url: "https://github.com/Rahul869g"
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/rahull-gupta/"
    },
    {
      name: "mail",
      url: "mailto:rahul916g@gmail.com"
    },
    {
      name: "download",
      url: "/resume"
    }

    // {
    //   name: "instagram",
    //   url: "https://www.instagram.com/Rahul869g/"
    // },
    // {
    //   name: "twitter",
    //   url: "https://twitter.com/Rahul869g"
    // }
  ];
  return (
    <div className={`${styles.profile} flex gap-6 sm:gap-12 sm:pt-20 pt-10`}>
      {SOCIAL_LINKS &&
        SOCIAL_LINKS.map(({ name, url }) => (
          <a
            href={url}
            key={name}
            className="link"
            rel="noreferrer"
            target={name === "download" ? "_self" : "_blank"}
            aria-label={name}
          >
            <Icon name={name} />
          </a>
        ))}
    </div>
  );
};

export default Profiles;
