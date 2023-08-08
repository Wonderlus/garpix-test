import Image from "next/image";
import styles from "./applelocation.module.scss";
import Link from "next/link";

const AppleLocation = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <Image
                    src={"/appleLocation/appleMusic.png"}
                    alt="Apple Music"
                    width={70}
                    height={70}
                />
                <div>Apple Music</div>
            </div>

            <div className={styles.locations}>
                <div className={styles.location}>
                    <Image
                        className={styles.marker}
                        src={"/appleLocation/marker.svg"}
                        alt="Marker"
                        width={30}
                        height={44}
                    />
                    <Image
                        src={"/appleLocation/appleMusic.png"}
                        alt="Apple Music"
                        width={30}
                        height={30}
                    />
                    <div className={styles.locationInfo}>
                        <div className={styles.address}>
                            Москва, ул. Большая Татарская, 21
                        </div>
                        <div className={styles.metros}>
                            <div className={styles.metro}>
                                <Image
                                    src={"/appleLocation/metro.svg"}
                                    alt="Metro icon"
                                    width={20}
                                    height={15}
                                />
                                <div>Маяковская</div>
                            </div>
                            <div className={styles.metro}>
                                <Image
                                    src={"/appleLocation/metro.svg"}
                                    alt="Metro icon"
                                    width={20}
                                    height={15}
                                />
                                <div>Лубянка</div>
                            </div>
                        </div>
                        <div className={styles.number}>+7 495 220-30-44</div>

                        <div className={styles.time}>
                            Ежедневно с 09:00 до 21:00
                        </div>
                        <Link className={styles.link} href={"apple.com"}>
                            apple.com
                        </Link>
                    </div>
                    <div className={styles.path}>Проложить маршрут</div>
                </div>

                <div className={styles.location}>
                    <Image
                        className={styles.marker}
                        src={"/appleLocation/marker.svg"}
                        alt="Marker"
                        width={30}
                        height={44}
                    />
                    <Image
                        src={"/appleLocation/appleMusic.png"}
                        alt="Apple Music"
                        width={30}
                        height={30}
                    />
                    <div className={styles.locationInfo}>
                        <div className={styles.address}>
                            Москва, ул. Большая Татарская, 21
                        </div>
                        <div className={styles.metros}>
                            <div className={styles.metro}>
                                <Image
                                    src={"/appleLocation/metro.svg"}
                                    alt="Metro icon"
                                    width={20}
                                    height={15}
                                />
                                <div>Маяковская</div>
                            </div>
                            <div className={styles.metro}>
                                <Image
                                    src={"/appleLocation/metro.svg"}
                                    alt="Metro icon"
                                    width={20}
                                    height={15}
                                />
                                <div>Лубянка</div>
                            </div>
                        </div>
                        <div className={styles.number}>+7 495 220-30-44</div>

                        <div className={styles.time}>
                            Ежедневно с 09:00 до 21:00
                        </div>
                        <Link className={styles.link} href={"apple.com"}>
                            apple.com
                        </Link>
                    </div>
                    <div className={styles.path}>Проложить маршрут</div>
                </div>

                <div className={styles.location}>
                    <Image
                        className={styles.marker}
                        src={"/appleLocation/marker.svg"}
                        alt="Marker"
                        width={30}
                        height={44}
                    />
                    <Image
                        src={"/appleLocation/appleMusic.png"}
                        alt="Apple Music"
                        width={30}
                        height={30}
                    />
                    <div className={styles.locationInfo}>
                        <div className={styles.address}>
                            Москва, ул. Большая Татарская, 21
                        </div>
                        <div className={styles.metros}>
                            <div className={styles.metro}>
                                <Image
                                    src={"/appleLocation/metro.svg"}
                                    alt="Metro icon"
                                    width={20}
                                    height={15}
                                />
                                <div>Маяковская</div>
                            </div>
                            <div className={styles.metro}>
                                <Image
                                    src={"/appleLocation/metro.svg"}
                                    alt="Metro icon"
                                    width={20}
                                    height={15}
                                />
                                <div>Лубянка</div>
                            </div>
                        </div>
                        <div className={styles.number}>+7 495 220-30-44</div>

                        <div className={styles.time}>
                            Ежедневно с 09:00 до 21:00
                        </div>
                        <Link className={styles.link} href={"apple.com"}>
                            apple.com
                        </Link>
                    </div>
                    <div className={styles.path}>Проложить маршрут</div>
                </div>
            </div>

            <iframe
                className={styles.map}
                src="https://yandex.ru/map-widget/v1/?ll=37.541994%2C55.789373&z=15.68"
            ></iframe>
        </div>
    );
};

export default AppleLocation;
