import Image from "next/image";

const HomeComponent = () => {
  return (
    <div className="home-container__content">
      <Image
        src="/images/banner.png"
        alt=""
        width={500}
        height={250}
        className="home-container__content__img"
      />
      <div>
        <h3 className="home-container__content__text">
          {" "}
          Hola, soy Lili Fernández
        </h3>
        <p className="home-container__content__rol">
          Licenciada en Fonoaudiología / Logopedia
        </p>
      </div>
    </div>
  );
};

export default HomeComponent;
