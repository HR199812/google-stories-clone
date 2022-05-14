import HeroCollage from "../components/hero/HeroCollage";
import HeroFooter from "../components/hero/HeroFooter";
import HeroHeader from "../components/hero/HeroHeader";
import HeroPhoneBlock from "../components/hero/HeroPhoneBlock";
import HeroUsedBy from "../components/hero/HeroUsedBy";
import style from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={style.heroContainer}>
      <HeroHeader />
      <div className={style.heroMedia}>
        <HeroCollage />
        <HeroPhoneBlock />
      </div>
      <HeroUsedBy />
      <HeroFooter />
    </div>
  );
}
