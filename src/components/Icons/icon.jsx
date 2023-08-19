import {
  IconMail,
  IconLinkedin,
  IconInstagram,
  IconTwitter,
  IconGithub,
  IconExternal,
  IconFileDownload // Import your custom download icon component
} from ".";

const Icon = ({ name }) => {
  switch (name) {
    case "mail":
      return <IconMail />;
    case "github":
      return <IconGithub />;
    case "linkedin":
      return <IconLinkedin />;
    case "instagram":
      return <IconInstagram />;
    case "twitter":
      return <IconTwitter />;
    case "download": // Handle the "download" case
      return <IconFileDownload />;
    default:
      return <IconExternal />;
  }
};

export default Icon;
