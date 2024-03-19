import Link from "next/link";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";

const FooterComponent = () => {
  return (
    <footer className="footer-container">
      <div className="footer-container__content container">
        <Link
          href={"tel://+34660942023"}
          className="footer-container__content__link"
        >
          <PhoneInTalkIcon className="footer-container__content__link__icon" />
        </Link>
        <Link
          href={"mailto:lilibetfdez@gmail.com"}
          target="_blank"
          className="footer-container__content__link"
        >
          <EmailIcon className="footer-container__content__link__icon" />
        </Link>
      </div>
    </footer>
  );
};

export default FooterComponent;
