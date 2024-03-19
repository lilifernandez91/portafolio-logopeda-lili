import * as React from "react";
import Image from "next/image";

const AvatarComponent = () => {
  return (
    <section className="menu-container__avatar__img">
      <div>
        <Image src="/images/logo.png" alt="" width={50} height={50} />
      </div>
    </section>
  );
};

export default AvatarComponent;
