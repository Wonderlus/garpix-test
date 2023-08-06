"use client";

import Image from "next/image";
import styles from "./header.module.scss";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const pathname = usePathname();

  const [isSearch, setSearch] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.headerInner}>
        <Image src={"/sber.png"} alt="Sber logo" width={180} height={80} />
        <nav className={styles.nav}>
          <Link href={""}>Купоны и сертификаты</Link>
          <Link href={""}>Впечатления</Link>
          <Link href={""}>Авиабилеты</Link>
          <Link href={""}>Ж/д билеты</Link>
          <Link href={""}>Отели</Link>
          <Link href={""}>Каршеринг</Link>
          <Link href={""}>Театры</Link>
          <Link href={""}>Страхование</Link>
          <Link
            className={pathname === "/connection" ? styles.active : ""}
            href={"/connection"}
          >
            Как подключиться
          </Link>
          <Link
            className={pathname === "/partners" ? styles.active : ""}
            href={"/partners"}
          >
            Партнеры
          </Link>
        </nav>

        <div className={styles.utilsContainer}>
            <div className={styles.cityContainer}>
                <Image src={"/city.svg"} alt="arrow" width={17} height={17} />
                <div className={styles.city}>Санкт-Петербург</div>
            </div>
            <div className={styles.searchContainer}>
                <div  className={styles.searchInner}>
                    {isSearch ? (<input className={styles.search} />) : (
                        <input placeholder="Поиск" className={styles.searchActive} />
                    )}
                    
                    <Image onClick={() => setSearch(prev => !prev)} src={"/search.svg"} alt="search" width={24} height={24} />
                </div>
                <button className={styles.button}>Войти</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
