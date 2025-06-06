import React from 'react';
import styles from './reviewItem.module.scss';

interface IReviews {
    text: string;
}

const ReviewItem = ({text}: IReviews) => {
    return (
        <div className={styles.review}>
            {text}
        </div>
    );
};

export default ReviewItem;