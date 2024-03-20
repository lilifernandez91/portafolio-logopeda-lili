import Link from "next/link";
import EmailIcon from "@mui/icons-material/Email";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import PlaceIcon from "@mui/icons-material/Place";
import { Map, Marker } from "pigeon-maps";

const ContactoComponent = () => {
  return (
    <div className="contact">
      <h1>Contacto</h1>
      <div className="contact__list">
        <span>Si quieres contactarme, puedes hacerlo a través de:</span>
        <Link href={"mailto:lilibetfdez@gmail.com"} target="_blank">
          <span className="contact__list__link">
            <EmailIcon className="contact__list__link__icon" />
            <p>lilibetfdez@gmail.com</p>
          </span>
        </Link>
        <Link href={"tel://+34660942023"}>
          <span className="contact__list__link">
            <PhoneInTalkIcon className="contact__list__link__icon" />
            <p>+34 660 942 023</p>
          </span>
        </Link>
        <span className="contact__list__link">
          <PlaceIcon className="contact__list__link__icon" />
          Ubicación
        </span>
        <Map height={300} defaultCenter={[38.2699, -0.7126]} defaultZoom={11}>
          <Marker width={50} anchor={[50.879, 4.6997]} />
        </Map>
      </div>
    </div>
  );
};

export default ContactoComponent;
