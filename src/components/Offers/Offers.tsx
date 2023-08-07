import Image from "next/image";
import styles from "./offers.module.scss";

const Offers = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                3 предложения в категории «Электроника и бытовая техника»
            </div>
            <div className={styles.offers}>
                <section>
                    <Image src={"/offers/1.png"} alt="offer 1" width={377} height={236}/>
                    <div className={styles.desc}>
                        <Image src={"/partners/holodilnik.png"} alt="Технопарк" width={50} height={50}/>
                        <div className={styles.info}>
                            <div className={styles.name}>Технопарк</div>
                            <div className={styles.text}>20% спасибо за технику Electrolux</div>
                        </div>
                    </div>
                </section>
                <section>
                    <Image src={"/offers/2.png"} alt="offer 1" width={377} height={236}/>
                    <div className={styles.desc}>
                        <Image src={"/partners/evroset.png"} alt="Евросеть" width={50} height={50}/>
                        <div className={styles.info}>
                            <div className={styles.name}>Технопарк</div>
                            <div className={styles.text}>10% спасибо за покупки в черную пятницу</div>
                        </div>
                    </div>
                </section>
                <section>
                    <Image src={"/offers/3.png"} alt="offer 1" width={377} height={236}/>
                    <div className={styles.desc}>
                        <Image src={"/partners/Mvideo.png"} alt="М.Видео" width={50} height={50}/>
                        <div className={styles.info}>
                            <div className={styles.name}>Технопарк</div>
                            <div className={styles.text}>15% спасибо для студентов</div>
                        </div>
                    </div>
                </section>
            </div>
            <button className={styles.button}>
                Еще 4 предложения
            </button>
        </div>
    );
};

export default Offers;
