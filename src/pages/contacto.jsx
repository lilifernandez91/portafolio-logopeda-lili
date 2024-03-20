import ContactoComponent from "@/components/components/contacto";
import Head from "next/head";

const ContactoPage = () => {
  return (
    <section className="container">
      <Head>
        <title>Mis estudios</title>
      </Head>
      <ContactoComponent />
    </section>
  );
};

export default ContactoPage;
