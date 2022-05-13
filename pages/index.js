import Head from "next/head";
import Image from "next/image";
import HeroCollage from "../components/hero/HeroCollage";
import HeroFooter from "../components/hero/HeroFooter";
import HeroHeader from "../components/hero/HeroHeader";
import HeroUsedBy from "../components/hero/HeroUsedBy";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="hero-container">
      <HeroHeader />
      <div className="hero-media">
        <HeroCollage />
      </div>
      <HeroUsedBy />
      <HeroFooter />
    </div>
  );
}
