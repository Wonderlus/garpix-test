"use client";

import { useState } from "react";
import styles from "./partners.module.scss";
import Image from "next/image";

const Partners = () => {
    const [active, setActive] = useState<number>(6);
    const [checker, setChecker] = useState("give")

    return (
        <div className={styles.container}>
            <div className={styles.title}>Партнеры и предложения</div>
            <div className={styles.categories}>
                <div onClick={() => {setActive(0)}} className={active === 0 ? styles.active : ""}>
                    Все партнеры
                </div>
                <div onClick={() => {setActive(1)}} className={active === 1 ? styles.active : ""}>
                    Популярные
                </div>
                <div onClick={() => {setActive(2)}} className={active === 2 ? styles.active : ""}>
                    Супермаркеты
                </div>
                <div onClick={() => {setActive(3)}} className={active === 3 ? styles.active : ""}>
                    Кафе и рестораны
                </div>
                <div onClick={() => {setActive(4)}} className={active === 4 ? styles.active : ""}>Такси</div>
                <div onClick={() => {setActive(5)}} className={active === 5 ? styles.active : ""}>Красота</div>
                <div onClick={() => {setActive(6)}} className={active === 6 ? styles.active : ""}>
                    Электроника и бытовая техника
                </div>
                <div onClick={() => {setActive(7)}} className={active === 7 ? styles.active : ""}>
                    Зоотовары
                </div>
                <div onClick={() => {setActive(8)}} className={active === 8 ? styles.active : ""}>
                    Кино и театр
                </div>
                <div>...</div>
            </div>
            <div className={styles.sliderContainer}>
                <div onClick={() => {setChecker("give")}} style={checker === "give" ? {"color": "#000"} : {"color": "#00D36D"}}>Начисляют <br/> спасибо</div>

                <div onClick={() => {checker === "give" ? setChecker("receive") : setChecker("give")}} className={styles.slider}>
                    <div className={styles.ball} style={checker === "give" ? 
                    {"left": "2px"} : {"right" : "2px"}}>

                    </div>
                </div>

                <div onClick={() => {setChecker("receive")}} style={checker === "receive" ? {"color": "#000"} : {"color": "#00D36D"}}>Принимают <br/> спасибо</div>
            </div>
            <div className={styles.partnersContainer}>
                <div className={styles.partners}>
                    <section>
                        <div className={styles.percent}>1,5%</div>
                        <div className={styles.desc}>
                            Спасибо от суммы покупки
                        </div>
                        <Image src={"/partners/Mvideo.png"} alt="М Видео" width={120} height={120}/>
                        <div className={styles.name}>М. Видео</div>
                    </section>
                    <section>
                        <div className={styles.percent}>3%</div>
                        <div className={styles.desc}>
                            Спасибо от суммы покупки
                        </div>
                        <Image src={"/partners/BK.png"} alt="Бургер Кинг" width={120} height={120}/>
                        <div className={styles.name}>Бургер Кинг</div>
                    </section>
                    <section>
                        <div className={styles.percent}>4,5%</div>
                        <div className={styles.desc}>
                            Спасибо от суммы покупки
                        </div>
                        <Image src={"/partners/Holodilnik.png"} alt="Технопарк" width={120} height={120}/>
                        <div className={styles.name}>Холодильник.ру</div>
                    </section>
                    <section>
                        <div className={styles.percent}>От 1,5%</div>
                        <div className={styles.desc}>
                            Спасибо от суммы покупки
                        </div>
                        <Image src={"/partners/BORK.png"} alt="BORK" width={120} height={120}/>
                        <div className={styles.name}>BORK</div>
                    </section>
                    <section>
                        <div className={styles.percent}>1,5%</div>
                        <div className={styles.desc}>
                            Спасибо от суммы покупки
                        </div>
                        <Image src={"/partners/Evroset.png"} alt="Евросеть" width={120} height={120}/>
                        <div className={styles.name}>Евросеть</div>
                    </section>
                </div>
                <button className={styles.button}>Еще 4 партнера</button>
            </div>
        </div>
    );
};

export default Partners;
