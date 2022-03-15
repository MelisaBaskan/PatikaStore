import {Dimensions, StyleSheet,flex } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: "#CCE5FF",
        marginTop: 15,
        marginHorizontal: 10,
        width: 160,
        marginRight: 10,
        height: 250,
        alignItems:"center",
        display: flex,
        flex:2,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 13,

    },
    image: {height: Dimensions.get("window").height / 4,
      width: Dimensions.get("window").width / 3,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      
      margin: 5,
      flex: 1,
    },

    price: {
        marginTop: 3,
    },
    stock : {
        color: "black",
        fontSize : 16,
        fontWeight: '500',
    },
    inner_container: {
        padding: 5,
    },
  
})