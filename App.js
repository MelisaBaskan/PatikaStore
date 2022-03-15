import React ,{ useState }  from 'react';
import { Text, View, FlatList, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import StoreCard from './src/components/StoreCard';
import product_data from "./src/PatiStore_data.json"
import { Dimensions } from 'react-native';
import { TextInput } from "react-native-paper";

 function App() {
  const [search, setSearch] = useState("");
   const renderProduct = ({item}) => <StoreCard product={item} />

  return (
   <SafeAreaView style={styles.container}>
     <Text style={styles.headerText}>PATIKASTORE</Text>
     <TextInput
        label="Search"
        style={{ marginTop: 12 }}
        value={search}
        onChangeText={(text) => setSearch(text)}
      />
      
       <FlatList
          data={product_data}
          renderItem={renderProduct} 
          numColumns={2}
     />   
  
    </SafeAreaView> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eceff1",
  },
  banner_image:{
    height: Dimensions.get("window").height / 5,
    width: Dimensions.get("window").width /2,
  },
  headerText:{
    fontWeight:'bold',
    color: "#660066",
    fontSize: 50,
  }
})


export default App;