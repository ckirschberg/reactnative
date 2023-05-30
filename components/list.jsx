import {StatusBar, StyleSheet, View, FlatList, Text} from 'react-native';
import { useEffect, useState } from 'react';

const Item = (props) => (
    <View style={styles.item}>
      <Text style={styles.title}>{props.name} - {props.color}</Text>
    </View>
  );


export default function List() {
    const [cats, setCats] = useState([]);

    // https://reactnative.dev/docs/network
    const getCatsFromApi = async () => {
        return fetch('https://cats-68586-default-rtdb.europe-west1.firebasedatabase.app/cats.json')
          .then(response => response.json())
          .then(json => {
            console.log("json", json);
            // convert firebase object structure to array.
            const firebaseArray = Object.keys(json).map(function(key) {
                return {
                  id: key,
                  ...json[key]
                };
              });

            return firebaseArray;
          })
          .catch(error => {
            console.error(error);
          });
      };

    // https://react.dev/reference/react/useEffect
    useEffect(() => {
        // retrieve data from server
        getCatsFromApi().then(cats => {
            setCats(cats);
            // console.log("cats", cats);
        });
      }, []);

    return (
        <View>
            <FlatList
                data={cats}
                renderItem={({item}) => <Item name={item.name} color={item.color} />}
                keyExtractor={item => item.id}
            />
        </View>
    );

} 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
  