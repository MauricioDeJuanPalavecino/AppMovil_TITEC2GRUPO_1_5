import * as React from 'react';
//import { useState, useEffect } from "react";
import { Text, View, SafeAreaView, Image, Pressable, FlatList, ScrollView } from 'react-native';
import { getMisSolicitudes } from '../services/APIRequester';
import { Suspense } from "react";
import { FlatlistHeader } from "react-native-flatlist-header";
import { styles } from '../css/styles';
import { Container } from '../css/wrapper'
import Icon from 'react-native-vector-icons/Ionicons';
import { ScaledSheet } from 'react-native-size-matters';
//import { style } from 'react-native-div/helpers/Styler';


function VistaMisSolicitudes({ route, navigation }) {
  const { itemId } = route.params;
  //const [posts, setPosts] = useState([]); //retorna el estado de un valor de variable (posts) y una funcion (setPosts) para actualizar esta data
  //var correoid = 0;
  
  const resource = getMisSolicitudes(itemId); //consulta a API
  
  
  function ColorEstado(estado_solicitud){
    if(estado_solicitud == "aceptada"){
      return(
        <View style={styles.containerMSPG}>
        <View style={styles.subContainerMS}>
          <Container>
            <Text style={styles.infoMisSolicitudes2}>
              <Icon name="clipboard-outline" size={20} color="white" />
              {"\t"} Estado de Postulación
            </Text>
          </Container>
          <Container>
            <Text style={styles.infoMisSolicitudes2}>
              {"\t"}{estado_solicitud}
            </Text>
          </Container>
        </View>
      </View>
      )
    }
    else if(estado_solicitud == "En proceso"){
      return (
        <View style={styles.containerMSPA}>
          <View style={styles.subContainerMS}>
            <Container>
              <Text style={styles.infoMisSolicitudes2}>
                <Icon name="clipboard-outline" size={20} color="white" />
                {"\t"} Estado de Postulación
              </Text>
            </Container>
            <Container>
              <Text style={styles.infoMisSolicitudes2}>
                {"\t"}{estado_solicitud}
              </Text>

            </Container>
          </View>
        </View>
      )
    }
    else if(estado_solicitud == "En lista de espera"){
      return(
        <View style={styles.containerMSPN}>
        <View style={styles.subContainerMS}>
          <Container>
            <Text style={styles.infoMisSolicitudes2}>
              <Icon name="clipboard-outline" size={20} color="white" />
              {"\t"} Estado de Postulación
            </Text>
          </Container>
          <Container>
            <Text style={styles.infoMisSolicitudes2}>
              {"\t"}{estado_solicitud}
            </Text>

          </Container>
        </View>
      </View>
      )
    }  

  }
  const Item = ({ title, foto, fecha_inscripcion, estado_solicitud, area, modalidad, nombre_taller }) => (


    <View style={styles.itemMisSolicitudes}>
      <View style={styles.itemTitleMisSolicitudes}>
        <Text style={styles.titleMisSolicitudes}>
          {nombre_taller}
        </Text>
      </View>
      {foto[0] == "SIN FOTOS" ? <Image
        style={styles.soliImagen}
        source={require('../images/sinFoto.png')}
      /> : <Image
        style={{ height: 256, borderRadius: 30 }}
        source={{ isStatic: true, uri: "http://10.100.6.6:3000/api/images/" + foto[0] }}
      />}

      <View style={styles.containerMS}>

        <View style={[styles.subContainerMS, {

        }]}>

          <Container>
            <Text style={styles.infoMisSolicitudes}>
              <Icon name="basketball-outline" size={20} color="white" fontWeight="bold" />
              {"\t"} Área:
            </Text>
          </Container>

          <Container>
            <Text style={styles.infoMisSolicitudes}>
              {"\t"} {area}
            </Text>
          </Container>

        </View>

        <View style={styles.subContainerMS}>
          <Container>
            <Text style={styles.infoMisSolicitudes}>
              <Icon name="megaphone-outline" size={20} color="white" fontWeight="bold" />
              {"\t"} Modalidad:
            </Text>
          </Container>

          <Container>
            <Text style={styles.infoMisSolicitudes}>
              {"\t"} {modalidad}
            </Text>
          </Container>
        </View>

        <View style={styles.subContainerMS}>
          <Container>
            <Text style={[styles.infoMisSolicitudes, {
            }]}>
              <Icon name="time-outline" size={20} color="white" />
              {"\t"} Fecha de inicio:
            </Text>
          </Container>

          <Container>
            <Text style={styles.infoMisSolicitudes}>
              {"\t"} {fecha_inscripcion}
            </Text>
          </Container>
        </View>

      </View>
    {ColorEstado(estado_solicitud)}
    </View>

  );


  /*
  const fetchPost = async () => {
    data = await getDetallesTaller(itemId);
    setPosts(data); //se actualiza la data de posts
  };

  useEffect(() => {
    fetchPost();
  }, []);
*/
  const renderItem = ({ item }) => (
    <Item title={item.codigo_taller}
      foto={Object.values(item.fotos)}
      fecha_inscripcion={item.fecha_inscripcion}
      estado_solicitud={item.estado_solicitud}
      area={item.taller[0].area}
      modalidad={item.taller[0].modalidad}
      nombre_taller={item.taller[0].nombre_taller}
    />
  );


  function RenderVistaDetalles(props) {
    //Esto funciona para comprobar si llegaron o no los 
    //datos para poder renderizar, sino están aún, vuelve hacia atrás 
    //y renderiza lo que esta en suspend mientras tanto 
    const posts = resource.misSolicitudes.read();
    if (posts.res == "El RUT ingresado no ha postulado a ningun taller, ingrese otro RUT") {
      alert("El RUT ingresado no ha postulado a ningun taller, ingrese otro RUT")
      navigation.navigate('Ver mis solicitudes')
    }
    return (
      <SafeAreaView style={styles.fondoMisSolicitudesItems}>
        <FlatlistHeader
          data={posts}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          image={require('../images/corporacion.png')}
          navBar={70}
          height={100}
          color={'#white'}
        />
      </SafeAreaView>
    );

  }


  return (
    <Suspense key={"sus2"} fallback={<Text>Loading ..</Text>}>
      <RenderVistaDetalles key={itemId}></RenderVistaDetalles>
    </Suspense>
  )

}



export { VistaMisSolicitudes };
