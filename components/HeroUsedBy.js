import style from "../styles/Home.module.css";
const HeroUsedBy = () =>{
    return(
    <>
    <div className={style.heroUsedBy} id="usedByDiv">
      <div className={style.heroUsedByCopy}>
        <p>
          The tappable story format has never been more accessible—to creators
          and readers alike. See what happens when Google brings stories to the
          open web.
        </p>
      </div>
      <div className={style.heroUsedByLogos}>
        <p>Making an impact at</p>
      </div>
    </div>
    </>
    )
}
export default HeroUsedBy;