import * as React from 'react';
import { useState, useEffect } from "react";
import { FlatList, Text, SafeAreaView, Pressable, View, Image, ImageBackground } from 'react-native';
import { VistaSinElementos } from '../componentes/VistaSinElementos';
import { VistaError } from '../componentes/VistaError';
import { Suspense } from "react";
import { FlatlistHeader } from "react-native-flatlist-header";
import { getTalleres } from '../services/APIRequester';
import { Container } from '../css/wrapper'
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from '../css/styles';
import { ErrorBoundary } from './ErrorBoundaries';



function VistaTalleres({ navigation }) {
  //const [posts, setPosts] = useState([]); //retorna el estado de un valor de variable (posts) y una funcion (setPosts) para actualizar esta data

  const resource = getTalleres(); //ahora se obtienen los talleres asincronicamente, mientras se muestra una vista de carga
  /*
  const fetchPost = async () => {
    data = await getTalleres();
    setPosts(data); //se actualiza la data de posts
  };
 
  useEffect(() => {
    fetchPost();
  }, []);
*/

  const Item = ({ title, title2, title3, title4, cod, foto, path }) => (
    

    <View style={styles.itemMisSolicitudes}>

      <View style={styles.itemTitleMisSolicitudes}>
        <Text style={styles.titleMisSolicitudes}>{title}</Text>
      </View>

      {foto[0] == "SIN FOTOS" ? <Image
        style={styles.soliImagen}
        source={require('../images/sinFoto.png')}
       /> : <Image
        style={{ height: 256 ,borderRadius: 30}}
        source={{ isStatic: true, uri: "http://10.100.6.6:3000/api/images/" + foto[0] }}
      />}

      <View style={styles.containerMS}>

        <View style={[styles.subContainerMS,{

        }]}>
        
        <Container>
            <Text style={styles.infoMisSolicitudes}>
              <Icon name="basketball-outline" size={20} color="white" fontWeight="bold"/>
              {"\t"} Área:
            </Text>
        </Container>

        <Container>
            <Text style={styles.infoMisSolicitudes}>
              {"\t"} {title3}
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
            {"\t"} {title4}
            </Text>
          </Container>
        </View>

        <View style={styles.subContainerMS}>
          <Container>
            <Text style={[styles.infoMisSolicitudes,{
            }]}>
            <Icon name="time-outline" size={20} color="white" />
            {"\t"} Fecha de inicio:
            </Text>
          </Container>

          <Container>
            <Text style={styles.infoMisSolicitudes}>
            {"\t"} {title2}
            </Text>
          </Container>            
        </View>        

      </View>


      <Pressable style={styles.buttonVT} onPress={() => navigation.navigate('Detalles', { itemId: cod })}>
        <Text style={styles.infoMisSolicitudes}>Más detalles</Text>
      </Pressable>

    </View>

  );


  const renderItem = ({ item }) => (
    <Item title={item.nombre_taller} title2={item.fecha_inicio} title3={item.area} title4={item.modalidad} cod={item.codigo_Taller} foto={Object.values(item.fotos)} />
  );


  function RenderVista(props) {
    //Esto funciona para comprobar si llegaron o no los 
    //datos para poder renderizar, sino están aún, vuelve hacia atrás 
    //y renderiza lo que esta en suspend mientras tanto 
    const posts = resource.talleres.read();
    
      return (
        <SafeAreaView style={styles.fondoMisSolicitudesItems}>
          <FlatlistHeader
            ListEmptyComponent = {VistaSinElementos}
            data={posts}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            image={require('../images/corporacion.png')}
            navBar={70}
            height={100}
            color={'#EDF1FF'}
          />
        </SafeAreaView>
      )
  }

  //en suspend podemos poner la vista mientras carga
  return (
    <Suspense key={"sus1"} fallback={<Text>Loading ..</Text>}>
      <ErrorBoundary fallback={<VistaError navigation={navigation}></VistaError>}>
        <RenderVista key={"render"}></RenderVista>
      </ErrorBoundary>
    </Suspense>
  )


}



export { VistaTalleres };