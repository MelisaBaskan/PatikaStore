import React from 'react';
import {View, Text, Image} from 'react-native'
import styles from './StoreCard.style'

const StoreCard = ({product}) => {
    return (
        <View style={styles.container}>
          <Image style={styles.image} source={{url: product.imgURL}} />
          <View style= {styles.inner_container}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>{product.price}</Text>
            <Text style={styles.stock} styles={{ color: product.inStock ? "black" :  "red"}} >
                        {product.inStock ?  "STOKTA VAR" : "STOKTA YOK"}   
            </Text>                   
          </View>
        </View>
    )
}

export default StoreCard;