import Image from "next/image";
import styles from "./footer.module.scss";
import Link from "next/link";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.number}>900</div>
                <div className={styles.desc}>По России бесплатно</div>
                <Image
                    src="/footer/sberbank.png"
                    alt="sberbank"
                    width={159}
                    height={40}
                />
                <div className={styles.copyright}>
                    © 1997—2019 ПАО Сбербанк.
                </div>
            </div>

            <div className={styles.main}>
                <nav>
                    <Link href={""}>Купоны и сертификаты</Link>
                    <Link href={""}>Впечатления</Link>
                    <Link href={""}>Авиабилеты</Link>
                    <Link href={""}>Ж/д билеты</Link>
                    <Link href={""}>Отели</Link>
                    <Link href={""}>Каршеринг</Link>
                    <Link href={""}>Театры</Link>
                    <Link href={""}>Страхование</Link>
                    <Link href={"/connection"}>Как подключиться</Link>
                    <Link href={"/partners"}>Партнеры</Link>
                </nav>
                <div className={styles.apps}>
                    <div className={styles.download}>
                        <Image
                            src={"/footer/google-play.svg"}
                            alt="google play"
                            width={130}
                            height={40}
                        />
                        <Image
                            src={"/footer/app-store.svg"}
                            alt="google play"
                            width={130}
                            height={40}
                        />
                    </div>
                    <div className={styles.media}>
                        <Image
                            src={"/footer/ok.svg"}
                            alt="ok"
                            width={40}
                            height={40}
                        />
                        <Image
                            src={"/footer/fb.svg"}
                            alt="fb"
                            width={40}
                            height={40}
                        />
                        <Image
                            src={"/footer/vk.svg"}
                            alt="vk"
                            width={40}
                            height={40}
                        />
                        <Image
                            src={"/footer/inst.svg"}
                            alt="inst"
                            width={40}
                            height={40}
                        />
                    </div>
                </div>
                <div className={styles.info}>
                    <span>Политика</span> АО «ЦПЛ» в отношении обработки
                    персональных данных и <span>Согласие</span> на обработку
                    данных участника Программы «Спасибо от Сбербанка»
                </div>
            </div>
        </div>
    );
};

export default Footer;
