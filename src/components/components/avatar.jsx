import * as React from "react";
import Image from "next/image";
import Link from "next/link";

const AvatarComponent = () => {
  return (
    <section className="menu-container__avatar__img">
      <Link href="/">
        <Image src="/images/logo.png" alt="" width={50} height={50} />
      </Link>
    </section>
  );
};

export default AvatarComponent;
