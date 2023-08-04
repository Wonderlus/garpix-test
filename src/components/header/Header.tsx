"use client"

import Image from "next/image";
import styles from "./header.module.scss"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";


const Header = () => {

    const pathname = usePathname();
    
    return ( 
        <div className={styles.container}>
            <div className={styles.headerInner}>
                <Image src={"/sber.png"} alt="Sber logo" width={180} height={80}/>
                <nav className={styles.nav}>
                    <Link href={""}>Купоны и сертификаты</Link>
                    <Link href={""}>Впечатления</Link>
                    <Link href={""}>Авиабилеты</Link>
                    <Link href={""}>Ж/д билеты</Link>
                    <Link href={""}>Отели</Link>
                    <Link href={""}>Каршеринг</Link>
                    <Link href={""}>Театры</Link>
                    <Link href={""}>Страхование</Link>
                    <Link className={pathname === "/connection" ? "link active" : "link"} href={""}>Как подключиться</Link>
                    <Link className={pathname === "/partners" ? "link active" : "link"} href={"/partners"}>Партнеры</Link>
                </nav>
            </div>
        </div>
     );
}
 
export default Header;