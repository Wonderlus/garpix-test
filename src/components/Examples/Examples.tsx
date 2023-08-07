import Image from "next/image";
import styles from "./examples.module.scss"

const Examples = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.blockSmall}>
                <div className={styles.imgContainer}>
                    <Image src={"/examples/colls2.png"} alt="" width={120} height={120}/>
                    <Image src={"/examples/colls3.png"} alt="" width={120} height={120}/>
                    <Image src={"/examples/colls4.png"} alt="" width={120} height={120}/>
                    <Image src={"/examples/colls5.png"} alt="" width={120} height={120}/>
                    <Image src={"/examples/colls1.png"} alt="" width={120} height={120}/>
                </div>
                <div className={styles.name}>
                    Скидки за бонусы
                </div>
            </div>
            <div className={styles.blockBig}>
                <div className={styles.blockSmall}>
                    <div className={styles.imgContainer}>
                        <Image src={"/examples/colls6.png"} alt="" width={120} height={120}/>
                        <Image src={"/examples/colls7.png"} alt="" width={120} height={120}/>
                        <Image src={"/examples/colls8.png"} alt="" width={120} height={120}/>
                    </div>
                    <div className={styles.name}>
                        Большие накопления
                    </div>
                </div>
                <div className={styles.blockSmall}>
                    <div className={styles.imgContainer}>
                        <Image src={"/examples/colls9.png"} alt="" width={120} height={120}/>
                        <Image src={"/examples/colls10.png"} alt="" width={120} height={120}/>
                        <Image src={"/examples/colls11.png"} alt="" width={120} height={120}/>
                    </div>
                    <div className={styles.name}>
                        Большие накопления
                    </div>
                </div>
            </div>
            <div className={styles.blockSmall}>
                <div className={styles.imgContainer}>
                    <Image src={"/examples/colls12.png"} alt="" width={120} height={120}/>
                    <Image src={"/examples/colls13.png"} alt="" width={120} height={120}/>
                    <Image src={"/examples/colls14.png"} alt="" width={120} height={120}/>
                    <Image src={"/examples/colls15.png"} alt="" width={120} height={120}/>
                    <Image src={"/examples/colls16.png"} alt="" width={120} height={120}/>
                </div>
                <div className={styles.name}>
                    Персональное исходя из трат
                </div>
            </div>
        </div>
     );
}
 
export default Examples;