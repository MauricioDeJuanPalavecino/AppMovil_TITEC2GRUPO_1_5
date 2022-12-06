import * as React from 'react';
import { Text, View, Pressable, Image } from 'react-native';
import { Container, ContainerL } from '../css/wrapper'
import { styles } from '../css/styles';




function VistaSinElementos({ navigation }) {

  return (

    <View style={styles.itemError}>
      <View style={styles.subContainerVERR}>
        <Container>
          <Image
            style={styles.imagenVSE}
            source={require('../images/ic_empty_image.png')}
          />
        </Container>
      </View>
      <View style={styles.subContainerVERR}>
        <Container>
          <Text style={styles.errTitle}>No hay talleres disponibles por el momento, vuelva pronto!</Text>
          <Pressable style={styles.buttonError} onPress={() => navigation.navigate('Menú de Talleres')}>
            <Text style={styles.text}>Volver al inicio</Text>
          </Pressable>
        </Container>
      </View>
    </View>
  );
}



export { VistaSinElementos };