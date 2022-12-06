import * as React from 'react';
import { Text, View, Pressable, Image } from 'react-native';
import { Container, ContainerL } from '../css/wrapper'
import { styles } from '../css/styles';


function VistaError({ navigation }) {
    return (
        
        <View style={styles.itemError}>
            <View style={styles.subContainerVERR}>
            <Container>
            <Image
                style={styles.imagenVSE}
                source={require('../images/ic_error_loading.png')}
            />
            </Container>
            </View>
            <View style={styles.subContainerVERR}>
            <Container>
            <Text style={styles.errTitle}>No se pueden obtener los datos por un error en la conexión de la aplicación!</Text>
            <Pressable style={styles.buttonError} onPress={() => navigation.navigate('Menú Talleres')}>
                <Text style={styles.text}>Volver al inicio</Text>
            </Pressable>
            </Container>
            </View>
        </View>
    );
}



export { VistaError };