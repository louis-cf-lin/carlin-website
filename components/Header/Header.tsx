import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useRef, useState } from "react";
import { EMAIL } from "../../constants/email";

import classes from "./Header.module.scss";

const Header: FC = () => {
  const ref = useRef<HTMLHeadElement>(null);
  const [navShown, setNavShown] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (document.body.scrollTop > 50) {
        setNavShown(true);
      } else {
        setNavShown(false);
      }
    };
    document.body.addEventListener("scroll", onScroll);
    return () => document.body.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header ref={ref} className={classes.header}>
      <nav className={`${classes.nav} ${navShown ? classes.show : ""}`}>
        <a href="#top" className={classes.logo}>
          <div className={classes.horizontal}>
            <Image
              src="/logo-horizontal-dark.png"
              layout="fill"
              objectFit="contain"
              alt="Carlin Tech"
            />
          </div>
          <div className={classes.icon}>
            <Image src="/icon.png" height={20} width={20} alt="Carlin Tech" />
          </div>
        </a>
        <div className={classes.container}>
          <Link target="_blank" href="tel:+6493099919">
            <a title="Phone +6493099919">
              <i className="material-icons-outlined">phone</i>
              <p>+64 9 309 9919</p>
            </a>
          </Link>
          <Link target="_blank" href={`mailto:${EMAIL}`}>
            <a title={`Email ${EMAIL}`}>
              <i className="material-icons-outlined">email</i>
              <p>{EMAIL}</p>
            </a>
          </Link>
          <Link href="/contact">
            <a title="Contact Us">
              <i className="material-icons-outlined">send</i>
              <p>Contact Us</p>
            </a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
