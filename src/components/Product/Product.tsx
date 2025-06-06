import Image from "next/image";
import styles from './product.module.scss';

interface IProduct {
    img: string;
    title: string;
    text: string;
    price: string;
}

const Product = ({img, title, text, price}: IProduct) => {
    return (
        <div className={styles.product}>
            <Image className={styles.product__img} src={img} alt={title} width={280} height={300} />
            <h4 className={styles.product__title}>{title}</h4>
            <p className={styles.product__text}>{text}</p>
            <p className={styles.product__price}>{price}</p>
            <button className={styles.product__btn}>Купить</button>
        </div>
    );
};

export default Product;