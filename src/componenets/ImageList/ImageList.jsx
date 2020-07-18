import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import styles from './ImageList.module.css'

const ImageList = (props) => {
    console.log(props);
    const imgs = props.imageList.map((img) => {
        return <ImageCard  key={img.id} Image={img}></ImageCard>
    })
    return <div className={styles.imageList}>{imgs}</div>
}

export default ImageList