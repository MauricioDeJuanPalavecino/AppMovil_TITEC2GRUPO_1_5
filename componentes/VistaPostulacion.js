//import * as React from 'react';
import React, { useCallback, useState } from "react";

import { Text, View, SafeAreaView, ScrollView, Pressable, TextInput, Button } from 'react-native';

import { styles } from '../css/styles';

import DateTimePicker from '@react-native-community/datetimepicker';
import { RadioButton } from 'react-native-paper';
import Dialog from "react-native-dialog";
import { VistaPostulacionConcretada } from '../componentes/VistaPostulacionConcretada';
import { setDatosPostulacion } from '../services/APIRequester';
import { useNavigation } from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Container, ContainerL } from '../css/wrapper'

function VistaPostulacion({ route, navigation }) {

    //-----ATRIBUTOS
    const { itemId, nombre_taller, edad_minima } = route.params;
    //console.log("idemID: "+itemId+", nombre: "+nombre_taller);

    //los cuatro forman el rut completo de la persona
    const [rutP1, onChangeRut1] = React.useState(null);
    const [rutP2, onChangeRut2] = React.useState(null);
    const [rutP3, onChangeRut3] = React.useState(null);
    const [rutP4, onChangeRut4] = React.useState(null);

    const [nombres, onChangeNombres] = React.useState(null);
    const [apellidos, onChangeApellidos] = React.useState(null);

    const [telefono_personal, onChangeTelefonoPersonal] = React.useState(null);
    const [telefono_contacto, onChangeTelefonoContacto] = React.useState(null);

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    //radio button
    const [sexoChecked, setSexoChecked] = React.useState(null);


    const [correo, setCorreo] = useState(null); //correos
    const [direccion, setDireccion] = useState(null); //barrio --> base de datos poblacion

    //dialogo
    const [visible, setVisible] = useState(false);

    //manejadores de errores
    const [rutError, setRutError] = useState("");

    const [nombreError, setNombreError] = useState("");
    const [apellidosError, setApellidosError] = useState("");

    const [telefonoPersonalError, setTelefonoPersonalError] = useState("");
    const [telefonoContactoError, setTelefonoContactoError] = useState("");

    const [dateError, setDateError] = useState("");

    const [sexoCheckedError, setSexoCheckedError] = useState("");


    const [correoError, setCorreoError] = useState("");
    const [direccionError, setDireccionError] = useState("");

    //------FUNCIONES O METODOS

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };


    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showDialog = () => {
        setVisible(true);
    };

    const showDialog2 = () => {
        setVisible(true)
    }
    const handleCancel = () => {
        setVisible(false);
    };

    const handleConfirm = async () => {
        // The user has pressed the "Delete" button, so here you can do your own logic.
        // ...Your logic
        var finalizacion = await getInfo(itemId, rutP1, rutP2, rutP3, rutP4, nombres, apellidos, telefono_personal, telefono_contacto, date, sexoChecked, correo, direccion)
        if (finalizacion == true) {
            setVisible(false);
            navigation.navigate("Postulación concretada")
        } else {

        }


    };


    const validForm = () => {
        let valid = true; // true no existe error, false existe error
        try {
            var listaValidacionCorreo = ["hotmail.com", "gmail.com", "live.com", "hotmail.es", "yahoo.es", "alumnos.uv.cl"];

            if (rutP1 == null || rutP2 == null || rutP3 == null || rutP4 == null || rutP1 == "" || rutP2 == "" || rutP3 == "" || rutP4 == "") {
                setRutError("Ingrese bien los datos en el rut");
                valid = false;
            } else {
                setRutError("");
            }
            if (nombres == null || nombres == "") {
                setNombreError("Ingrese los nombres");
                valid = false;
            } else {
                setNombreError("");
            }
            if (apellidos == null || apellidos == "") {
                setApellidosError("Ingrese los apellidos");
                valid = false;
            } else {
                setApellidosError("");
            }
            if (telefono_personal == null || telefono_personal == "") {
                setTelefonoPersonalError("Ingrese un teléfono personal");
                valid = false;
            } else {

                if (telefono_personal.length != 8) {
                    setTelefonoPersonalError("Ingrese un teléfono personal de 8 digitos");
                    valid = false;
                } else {

                    if (telefono_personal.includes(".") || telefono_personal.includes("-")) {
                        setTelefonoPersonalError("Su teléfono tiene un '-' o un '.', por favor ingréselo nuevamente");
                        valid = false;
                    } else {
                        setTelefonoPersonalError("");
                    }
                }
            }

            if (telefono_contacto == null || telefono_contacto == "") {
                onChangeTelefonoContacto("")
            } else {
                if (telefono_contacto.length != 8) {
                    setTelefonoContactoError("Ingrese un teléfono de contacto de 8 digitos");
                    valid = false;
                } else {
                    if (telefono_contacto.includes(".") || telefono_contacto.includes("-")) {
                        setTelefonoContactoError("Su teléfono tiene un '-' o un '.', por favor ingréselo nuevamente");
                        valid = false;
                    } else {
                        setTelefonoContactoError("");
                    }
                }
            }
            if (edad_minima <= 0) {
                var fechaActual = new Date();
                var fechaActual1 = new Date();
                fechaActual1.setDate(fechaActual.getDate() - 365);
                if (date.getTime() > fechaActual1.getTime()) {
                    setDateError("Ingrese una fecha de nacimiento mayor a un año del dia actual")
                    valid = false;
                } else {
                    setDateError("");
                }
            }
            else {
                var fecha_minima = new Date();
                var fecha_minima2 = new Date();
                fecha_minima2.setDate(fecha_minima.getDate() - 365 * edad_minima);
                if (date.getTime() > fecha_minima2.getTime()) {
                    setDateError("Ingrese una fecha de nacimiento mayor a " + String(edad_minima) + " años del dia actual")
                    valid = false;
                } else {
                    setDateError("");
                }
            }
            if (sexoChecked == null || sexoChecked == "") {
                setSexoCheckedError("Seleccione una opcion de este campo");
                valid = false;
            } else {
                setSexoCheckedError("");
            }
            if (correo == null || correo == "") {
                setCorreo("");
                //setCorreosError("Ingrese al menos un correo");
            } else {
                //validacion correo 2
                var regexEmail = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/; //expresion regular para validar
                var nuevoCorreo = correo.trim();
                var esValido = 0;

                if (regexEmail.test(nuevoCorreo)) { //tendra un arroba @ y sera valido? si lo es entra aqui    
                    for (var correoValido in listaValidacionCorreo) { // el ciclo para cuando encuentra un dominio valido para el correo
                        var dominio = nuevoCorreo.split("@");
                        //console.log("dominio ingresado: ", dominio[1]);
                        //console.log("validar: ", listaValidacionCorreo[correoValido]);
                        if (dominio[1] == listaValidacionCorreo[correoValido]) { //se encuentra el correo valido
                            setCorreoError("");
                            esValido = 1;
                            break;
                        }
                    }
                    if (esValido == 0) { //no se encontro un dominio de correo valido dentro de los que existen
                        setCorreoError("El correo no es valido");
                        valid = false;
                        return;
                    }
                } else { //en caso que hayan mas de un @
                    setCorreoError("El correo no es valido");
                    valid = false;
                    return;
                }
            }

            if (direccion == null || direccion == "") {
                setDireccionError("Ingrese la poblacion donde vive");
                valid = false;
            } else {
                setDireccionError("");
            }

            if (valid) {
                showDialog(); //recien muestro el dialogo para confirmar envio
            }
        } catch (error) {
            console.log(error);
        }
    };


    return (

        <SafeAreaView style={styles.containerVT}>

            <ScrollView>
                <View style={styles.subContainerVPS}>  
                <Container> 
                <View style={styles.hTituloPostulaciones}><Text style={{ fontSize: 28, fontWeight: 'bold', color: 'white', fontFamily: 'sans-serif', textAlign: 'justify' }}>Usted está postulando al taller: "{nombre_taller}"</Text></View>
                </Container> 
                </View>


                <View style={styles.itemVDT}>

                    <Text style={{ color: 'white', fontWeight: 'bold', fontFamily: 'sans-serif', fontSize: 15 }}>Ingrese su rut:  </Text>
                    <View style={styles.row}>

                        <TextInput
                            style={styles.inputCamposRut}
                            onChangeText={onChangeRut1}
                            value={rutP1}
                            placeholder="XX"
                            keyboardType="number-pad"
                        />
                        <Text style={styles.textRut}>.</Text>

                        <TextInput
                            style={styles.inputCamposRut}
                            onChangeText={onChangeRut2}
                            value={rutP2}
                            placeholder="XXX"
                            keyboardType="number-pad"
                        />
                        <Text style={styles.textRut}>.</Text>

                        <TextInput
                            style={styles.inputCamposRut}
                            onChangeText={onChangeRut3}
                            value={rutP3}
                            placeholder='XXX'
                            keyboardType='number-pad'
                        />
                        <Text style={styles.textRut}>-</Text>
                        <TextInput
                            style={styles.inputCamposRut}
                            onChangeText={onChangeRut4}
                            value={rutP4}
                            placeholder="X"
                            keyboardType="default"
                        />
                    </View>

                    {rutError.length > 0 && <Text style={{ color: 'red', fontWeight: "bold", textAlign: "center", fontSize: 20 }}>{rutError}</Text>}

                    <Text style={{ color: 'white', fontWeight: 'bold', fontFamily: 'sans-serif', fontSize: 15, fontFamily: 'sans-serif' }}>Ingrese sus nombres: </Text>
                    <TextInput
                        style={styles.inputNombreCompleto}
                        onChangeText={onChangeNombres}
                        value={nombres}
                        placeholder="Ejemplo: Maria Juana"
                        keyboardType="default"
                    />
                    {nombreError.length > 0 && <Text style={{ color: 'red', fontWeight: "bold", textAlign: "center", fontFamily: 'sans-serif', fontSize: 20 }}>{nombreError}</Text>}
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>Ingrese sus apellidos: </Text>
                    <TextInput
                        style={styles.inputNombreCompleto}
                        onChangeText={onChangeApellidos}
                        value={apellidos}
                        placeholder="Ejemplo: Gonzales Figueroa"
                        keyboardType="default"
                    />
                    {apellidosError.length > 0 && <Text style={{ color: 'red', fontWeight: "bold", textAlign: "center", fontFamily: 'sans-serif', fontSize: 20 }}>{apellidosError}</Text>}
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, fontFamily: 'sans-serif' }}>Ingrese su número telefónico personal (celular): </Text>

                    <View style={styles.row}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontFamily: 'sans-serif', fontSize: 15, top: 15, start: 10 }}>+569  </Text>
                        <TextInput
                            style={styles.inputNumeroContacto}
                            onChangeText={onChangeTelefonoPersonal}
                            value={telefono_personal}
                            placeholder="Ejemplo: 12345678"
                            keyboardType="number-pad"
                        />
                    </View>
                    {telefonoPersonalError.length > 0 && <Text style={{ color: 'red', fontFamily: 'sans-serif', fontWeight: "bold", textAlign: "center", fontSize: 20 }}>{telefonoPersonalError}</Text>}

                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, fontFamily: 'sans-serif' }}>Ingrese su número telefónico de contacto (celular y opcional): </Text>

                    <View style={styles.row}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontFamily: 'sans-serif', fontSize: 15, top: 15, start: 10 }}>+569  </Text>
                        <TextInput
                            style={styles.inputNumeroContacto}
                            onChangeText={onChangeTelefonoContacto}
                            value={telefono_contacto}
                            placeholder="Ejemplo: 12345678"
                            keyboardType="number-pad"
                        />
                    </View>
                    {telefonoContactoError.length > 0 && <Text style={{ color: 'red', fontFamily: 'sans-serif', fontWeight: "bold", textAlign: "center", fontSize: 20 }}>{telefonoContactoError}</Text>}


                    <Text style={{ color: 'white', fontWeight: 'bold', fontFamily: 'sans-serif', fontSize: 15, textAlign: 'justify' }}>Ingrese su fecha de nacimiento, presionando el botón blanco del calendario:</Text>

                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                        />
                    )}

                    <View style={styles.row}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontFamily: 'sans-serif', fontSize: 15, top: 15, start: 10 }}>Fecha seleccionada:  </Text>
                        <TextInput
                            style={styles.inputNumeroContacto}
                            onChangeText={setDate}
                            value={String(date.toISOString()).substring(0, 10)}
                            placeholder=" YYYY/MM/DD"
                            keyboardType="default"
                            editable={false}
                        />
                        <Ionicons onPress={showDatepicker} size={28} name="md-calendar" color="ghostwhite" style={{ top: 11, start: 2 }} />

                    </View>
                    {dateError.length > 0 && <Text style={{ color: 'red', fontWeight: "bold", fontFamily: 'sans-serif', textAlign: "center", fontSize: 20 }}>{dateError}</Text>}


                    <Text style={{ color: 'white', fontWeight: 'bold', fontFamily: 'sans-serif', fontSize: 15 }}>Seleccione su sexo:</Text>

                    <View style={styles.row}>
                        <RadioButton
                            value="Masculino"
                            status={sexoChecked === 'Masculino' ? 'checked' : 'unchecked'}
                            onPress={() => setSexoChecked('Masculino')}
                        />
                        <Text style={{ color: 'white', fontWeight: 'bold', fontFamily: 'sans-serif', fontSize: 14, top: 5 }}>Masculino</Text>

                        <RadioButton
                            value="Femenino"
                            status={sexoChecked === 'Femenino' ? 'checked' : 'unchecked'}
                            onPress={() => setSexoChecked('Femenino')}
                        />
                        <Text style={{ color: 'white', fontWeight: 'bold', fontFamily: 'sans-serif', fontSize: 14, top: 5 }}>Femenino</Text>

                        <RadioButton
                            value="Prefiero no decirlo"
                            status={sexoChecked === 'Prefiero no decirlo' ? 'checked' : 'unchecked'}
                            onPress={() => setSexoChecked('Prefiero no decirlo')}
                        />
                        <Text style={{ color: 'white', fontWeight: 'bold', fontFamily: 'sans-serif', fontSize: 13, top: 5 }}>Prefiero no decirlo</Text>


                    </View>
                    {sexoCheckedError.length > 0 && <Text style={{ color: 'red', fontFamily: 'sans-serif', fontWeight: "bold", textAlign: "center", fontSize: 20 }}>{sexoCheckedError}</Text>}

                    <View>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontFamily: 'sans-serif', fontSize: 15 }}>Ingrese su correo (opcional): </Text>
                        <TextInput
                            style={styles.inputPoblacion}
                            placeholder={"Ejemplo: juanito.alcachofa@gmail.com"}
                            onChangeText={setCorreo}
                            value={correo}
                        />
                    </View>
                    {correoError.length > 0 && <Text style={{ color: 'red', fontWeight: "bold", fontFamily: 'sans-serif', textAlign: "center", fontSize: 20 }}>{correoError}</Text>}

                    <Text style={{ color: 'white', fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: 15 }}>Ingrese su dirección: </Text>
                    <TextInput
                        style={styles.inputPoblacion}
                        placeholder={"Ejemplo: Calle falsa #412"}
                        onChangeText={setDireccion}
                        value={direccion}
                    />
                    {direccionError.length > 0 && <Text style={{ color: 'red', fontFamily: 'sans-serif', fontWeight: "bold", textAlign: "center", fontSize: 20 }}>{direccionError}</Text>}


                    <View>
                        <Dialog.Container visible={visible}>
                            <Dialog.Title>Confirmar formulario</Dialog.Title>
                            <Dialog.Description>
                                Usted al ingresar al taller, debe estar consciente de que no puede volver a registrarse con el  mismo RUT a éste , por lo cual debe verificar sus datos de forma correcta, ¿Está seguro/a de querer continuar?
                            </Dialog.Description>
                            <Dialog.Button label="Cancelar" onPress={handleCancel} />
                            <Dialog.Button label="Confirmar" onPress={() => handleConfirm()} />
                        </Dialog.Container>
                    </View>

                    <View style={styles.subContainerMS2}>
                        <Pressable style={styles.buttonPostular} onPress={validForm}>
                            <Text style={styles.text}>Postular</Text>
                        </Pressable>
                    </View>

                </View>

            </ScrollView>
        </SafeAreaView >
    );
}

async function getInfo(codigo_Taller, rutP1, rutP2, rutP3, rutP4, nombres, apellidos, telefono_personal, telefono_contacto, date, sexoChecked, correo, direccion) {

    var jsonPostulacionInfo = {};
    var rut = String(rutP1) + "." + String(rutP2) + "." + String(rutP3) + "-" + String(rutP4);
    var telefono_personal_final = "+569" + String(telefono_personal);
    var telefono_contacto_final = ""
    if(telefono_contacto != ""){
        telefono_contacto_final = "+569" + String(telefono_contacto);
    }
    var fecha_nac = String(date.toISOString()).substring(0, 10);
    
    jsonPostulacionInfo.rut = rut;
    jsonPostulacionInfo.nombres = nombres;
    jsonPostulacionInfo.apellidos = apellidos;
    jsonPostulacionInfo.telefono_personal_final = telefono_personal_final;
    jsonPostulacionInfo.telefono_contacto_final = telefono_contacto_final;    
    jsonPostulacionInfo.fecha_nac = fecha_nac;
    jsonPostulacionInfo.sexoChecked = sexoChecked;
    jsonPostulacionInfo.correo = correo;
    jsonPostulacionInfo.direccion = direccion;
    jsonPostulacionInfo.codigo_Taller = codigo_Taller;


    var res = await setDatosPostulacion(jsonPostulacionInfo);
    var checked = false;
    if (res.res == "concretado") {
        checked = true
        return checked;

    } else {
        return checked;
    }



}


export { VistaPostulacion };