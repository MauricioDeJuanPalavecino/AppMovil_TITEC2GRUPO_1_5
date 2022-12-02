import * as React from 'react';
//import { useState, useEffect } from "react";
import { Text, View, SafeAreaView, Image, Pressable, FlatList, ScrollView } from 'react-native';
import { getDetallesTaller } from '../services/APIRequester';
import { Suspense } from "react";
import { Container, ContainerL } from '../css/wrapper'
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../css/styles';
//import { style } from 'react-native-div/helpers/Styler';


function VistaDetallesTaller({ route, navigation }) {
  const { itemId } = route.params;
  //const [posts, setPosts] = useState([]); //retorna el estado de un valor de variable (posts) y una funcion (setPosts) para actualizar esta data
  //var correoid = 0;

  const resource = getDetallesTaller(itemId); //consulta a API

  /*
  const fetchPost = async () => {
    data = await getDetallesTaller(itemId);
    setPosts(data); //se actualiza la data de posts
  };

  useEffect(() => {
    fetchPost();
  }, []);
*/

  function RenderVistaDetalles(props) {
    //Esto funciona para comprobar si llegaron o no los 
    //datos para poder renderizar, sino están aún, vuelve hacia atrás 
    //y renderiza lo que esta en suspend mientras tanto 
    const posts = resource.detallesTaller.read();


    return (
      <SafeAreaView style={styles.containerVT}>
        <ScrollView>


          <View style={styles.itemVDT}>

            <View style={styles.itemTittle}>
              <Text style={styles.title}>{posts[0].nombre_taller}</Text>
            </View>

            <View style={styles.contenedorImagen}>
              {posts[0].fotos[0] == "SIN FOTOS" ? <Image
                style={styles.imagen}
                source={require('../images/sinFoto.png')}
              /> : <Image
                style={styles.imagen}
                source={{ isStatic: true, uri: "http://10.100.6.6:3000/api/images/" + posts[0].fotos[0] }}
              />}

            </View>

            <View style={styles.detalles1}>
              <View style={styles.subContainerMS}>
                <ContainerL>
                  <Text style={styles.infoVDT}>
                    <Icon name="clipboard" size={20} color="white" />
                    {"\t\t"}Cupos:
                  </Text>
                </ContainerL>

                <Container>
                  <Text style={styles.infoVDT}>{posts[0].personas_aceptadas}/{posts[0].cupos}</Text>
                </Container>
              </View>

              <View style={styles.subContainerMS}>
                <ContainerL>
                  <Text style={styles.infoVDT}>
                    <Icon name="help-circle" size={20} color="white" />
                    {"\t\t"}Estado actual:
                  </Text>

                </ContainerL>
                <Container>
                  <Text style={styles.infoVDT}>{posts[0].estado_taller}</Text>
                </Container>
              </View>

              <View style={styles.subContainerMS}>
                <ContainerL>
                  <Text style={styles.infoVDT}>
                    <Icon name="calendar" size={20} color="white" />
                    {"\t\t"}Fecha inicio:
                  </Text>
                </ContainerL>

                <Container>
                  <Text style={styles.infoVDT}>{posts[0].fecha_inicio}</Text>
                </Container>
              </View>

              <View style={styles.subContainerMS}>
                <ContainerL>
                  <Text style={styles.infoVDT}>
                    <Icon name="calendar" size={20} color="white" />
                    {"\t\t"}Fecha término:
                  </Text>
                </ContainerL>
                <Container>
                  <Text style={styles.infoVDT}>{posts[0].fecha_termino}</Text>
                </Container>
              </View>

              <View style={styles.subContainerMS}>
                <ContainerL>
                  <Text style={styles.infoVDT}>
                    <Icon name="basketball" size={20} color="white" />
                    {"\t\t"}Área:
                  </Text>
                </ContainerL>

                <Container>
                  <Text style={styles.infoVDT}>{posts[0].area}</Text>
                </Container>
              </View>

              <View style={styles.subContainerMS}>
                <ContainerL>
                  <Text style={styles.infoVDT}>
                    <Icon name="megaphone" size={20} color="white" />
                    {"\t\t"}Modalidad:
                  </Text>
                </ContainerL>

                <Container>
                  <Text style={styles.infoVDT}>{posts[0].modalidad}</Text>
                </Container>
              </View>

              <View style={styles.subContainerVDT}>
                <ContainerL>
                  <Text style={styles.infoVDT}>
                    <Icon name="time" size={20} color="white" />
                    {"\t\tFecha de inicio de la \n\t\t\tpostulación al taller:"}
                  </Text>
                </ContainerL>

                <Container>
                  <Text style={styles.infoVDT}>{posts[0].fecha_inicio_postulacion}</Text>
                </Container>
              </View>

              <View style={styles.subContainerVDT}>
                <ContainerL>
                  <Text style={styles.infoVDT}>
                    <Icon name="time" size={20} color="white" />
                    {"\t\tFecha de término de \n \t\t\t la postulación al taller:"}
                  </Text>
                </ContainerL>

                <Container>
                  <Text style={styles.infoVDT}>{posts[0].fecha_termino_postulacion}</Text>
                </Container>
              </View>

              <View style={styles.subContainerVDT}>
                <ContainerL>
                  <Text style={styles.infoVDT}>
                    <Icon name="compass" size={20} color="white" />
                    {"\t\t"}Dirección:
                  </Text>
                </ContainerL>

                <Container>
                  <Text style={styles.infoVDT}>{posts[0].direccion}</Text>
                </Container>
              </View>
              
              <View style={styles.subContainerVDT}>
                <ContainerL>
                  <Text style={styles.infoVDT}>
                    <Icon name="list-circle" size={20} color="white" />
                    {"\t\t"}Descripción:
                  </Text>
                </ContainerL>

                <Container>
                  <Text style={styles.infoVDT}>{posts[0].descripcion} </Text>
                </Container>
              </View>

              <View style={styles.subContainerVDT}>
                <ContainerL>
                  <Text style={styles.infoVDT}>
                    <Icon name="checkmark-done-circle" size={20} color="white" />
                    {"\t\t"}Requisitos:
                  </Text>
                </ContainerL>

                <Container>
                  <Text style={styles.infoVDT}>{posts[0].requisitos}</Text>
                </Container>
              </View>
              
              <View style={styles.subContainerVDT}>
                <ContainerL>
                  {posts[0].edad_minima > 0 ?
                    <Text style={styles.infoVDT}>
                      <Icon name="person-remove" size={20} color="white" />
                      {"\t\tEdad minima para\n\t\t\tpostular:"}
                    </Text>
                    : <Text style={styles.infoVDT}>La edad minima para postular es de un año</Text>
                  }
                </ContainerL>

                <Container>
                  <Text style={styles.infoVDT}>{posts[0].edad_minima} años</Text>
                </Container>
              </View>
              <View style={styles.subContainerVDT}>
                <ContainerL>

                <Text style={styles.infoVDT}>
                  <Icon name="calendar" size={20} color="white" />
                  {"\t\t"}Horarios del taller:
                </Text>
                </ContainerL>
                  <Container>
                {posts[0].horarios.map((horario) => <Text style={styles.infoVDT}>• {horario}</Text>)}
                  </Container>

              </View>
            </View>

            <View style={styles.datosprofesor}>

              <View style={styles.subContainerVDTP}>
                <Container>
              <Text style={styles.tittleDatosProfesor}>
              <Icon name="person" size={18.5} color="white" />
              {"\t\t"}-Datos profesor/a encargado/a-:</Text>
                </Container>
              </View>



              <View style={styles.subContainerVDTP}>
                <Container>
              <Text style={styles.textDatosProfesor}>{"\t"}Nombres: {posts[0].nombres}</Text>
                </Container>


            </View>

              <View style={styles.subContainerVDTP}>
                <Container>

              <Text style={styles.textDatosProfesor}>{"\t"}Apellidos: {posts[0].apellidos}</Text>
                </Container>
              

            </View>
            </View>
            <View style={styles.datosprofesor}>
              <View style={styles.subContainerVDTP}>
                <Container>

              <Text style={styles.tittleDatosProfesor}>
              <Icon name="mail" size={18.5} color="white" />
              {"\t\t"}Correo: </Text>
                </Container>
              </View>


              <View style={styles.subContainerVDTP}>
                <Container>
              <Text style={styles.textDatosProfesor}>{"\t"}{posts[0].correo}</Text>

                </Container>
            </View>
            </View>

              <View style={styles.datosprofesor}>
              <View style={styles.subContainerVDTP}>
                <Container>
              <Text style={styles.tittleDatosProfesor}>
              <Icon name="call" size={18.5} color="white" />
              {"\t\t"}Teléfono de contacto:</Text>

                </Container>
              </View>
              <View style={styles.subContainerVDTP}>
                <Container>
                      <Text style={styles.textDatosProfesor}>{"\t"}{posts[0].telefono_contacto}</Text>
                </Container>
              </View>
              </View>

            {posts[0].personas_aceptadas >= posts[0].cupos ?
              <Pressable style={styles.buttonVDT} disabled={true} onPress={() => navigation.navigate('Postulaciones', { itemId: posts[0].codigo_Taller, nombre_taller: posts[0].nombre_actividad, edad_minima: posts[0].edad_minima })}>
                <Text style={styles.text}>Postular al taller </Text>
              </Pressable>
              :
              <Pressable style={styles.buttonVDT} onPress={() => navigation.navigate('Postulaciones', { itemId: posts[0].codigo_Taller, nombre_taller: posts[0].nombre_taller, edad_minima: posts[0].edad_minima })}>
                <Text style={styles.text}>Postular al taller </Text>
              </Pressable>
            }

          </View>
        </ScrollView>
      </SafeAreaView >
    );

  }


  return (
    <Suspense key={"sus2"} fallback={<Text>Loading ..</Text>}>
      <RenderVistaDetalles key={itemId}></RenderVistaDetalles>
    </Suspense>
  )

}



export {VistaDetallesTaller};
