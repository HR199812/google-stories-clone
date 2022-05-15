import HeroCollage from "../components/HeroCollage";
import HeroFooter from "../components/HeroFooter";
import HeroHeader from "../components/HeroHeader";
import HeroPhoneBlock from "../components/HeroPhoneBlock";
import HeroUsedBy from "../components/HeroUsedBy";
import HeroMidDiv from "../components/HeroMidDiv";
import style from "../styles/Home.module.css";
import SlidesIndex from "../components/SlidesIndex";

export default function Home() {
  return (
    <div className={style.heroContainer}>
      <HeroHeader />
      <div className={style.heroMedia}>
        <HeroCollage />
        <HeroPhoneBlock />
      </div>
      <HeroUsedBy />
      <HeroMidDiv />
      <SlidesIndex />
      <HeroFooter />
    </div>
  );
}
