import * as React from 'react';
import { Text, View, Pressable, Image } from 'react-native';
import { Container, ContainerL } from '../css/wrapper'
import { styles } from '../css/styles';
//import DateTimePicker from '@react-native-community/datetimepicker';
//import { RadioButton } from 'react-native-paper';
//import Dialog from "react-native-dialog";

//import { setDatosPostulacion } from '../services/APIRequester';

function VistaPostulacionConcretada({ navigation }) {
    return (
        <View style={styles.itemError}>
        <View style={styles.subContainerVERR}>
        <Container>
            <Image
            style={styles.imagenVSE}
            source={require('../images/imagenFelicidades.png')}
            />
        </Container>
        </View>
        <View style={styles.subContainerVERR}>
        <Container>
            <Text style={styles.errTitle}>Felicidades!! su postulación ha sido enviada!! debe esperar a que lo contacten</Text>
            <Pressable style={styles.buttonError} onPress={() => navigation.navigate('Menú de Talleres')}>
            <Text style={styles.text}>Volver al inicio</Text>
            </Pressable>
        </Container>
        </View>
        </View>
    );
}

export { VistaPostulacionConcretada };