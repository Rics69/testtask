'use client';

import styles from "./page.module.scss";
import {useEffect, useState} from "react";
import ReviewItem from "@/components/Reviews/ReviewItem";

interface IReviews {
    id: number;
    text: string;
}

export default function Home() {
    const [reviews, setReviews] = useState<IReviews[]>([])
    const [bag, setBag] = useState([])

    useEffect(() => {
        const fetchReview = async () => {
            try {
                const request = await fetch("http://o-complex.com:1337/reviews")
                const data = await request.json()
                setReviews(data)
            }catch (e) {
                console.log(e)
            }
        }

        fetchReview()
    }, []);

    return (
        <main className={styles.home}>
            <div className='container'>
                <h1 className={styles.home__title}>Тестовое задание</h1>
                <div className={`${styles.home_reviews} ${styles.reviews}`}>
                    {reviews.map(item => (
                        <ReviewItem key={item.id} text={item.text} />
                    ))}
                </div>
                <form className={styles.home__form}>
                    <h2>Добавленные товары</h2>
                    <div className={styles.home__form_products}>
                        {bag.map(product => (
                            <div key={product.id} className={styles.home__form_product}>
                                <p className={styles.home__form_product_name}>{product.name}</p>
                                <p className={styles.home__form_product_count}>{product.count}</p>
                                <p className={styles.home__form_product_price}>{product.price}</p>
                            </div>
                        ))}
                    </div>
                    <div className={styles.home__form_fields}>
                        <input className={styles.home__form_input} type="tel" placeholder="+7 (___) ___ __-__"/>
                        <button>Заказать</button>
                    </div>
                </form>

                <div className={styles.products}>

                </div>
            </div>
        </main>
    );
}
