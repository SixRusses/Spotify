import React, {useEffect} from 'react';
import {View, Button, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Popular from './popular';
import axios from 'axios';
import styled from 'styled-components';

const Films = ({navigation}) => {
  const [films, setFilms] = React.useState([]);

  useEffect(() => {
    getFilms(); // cherche les perso au demarrage
  }, []);

  const getFilms = async () => {
    axios({
      method: 'get',
      url: 'https://api.themoviedb.org/3/movie/popular?api_key=91dff7c535c1707cc7f1446257f0a8b6',
    })
      .then(resultat => {
        console.log(resultat.data.results);
        setFilms(resultat.data.results);
        // voila pk il faut pas juste copier, les infos sont pas au bon endroit, tu stocker pas le bon truc
        //
      })

      // Si la récupération n'existe pas / ne marche pas
      .catch(erreur => {
        console.log(erreur);
      });
  };
  //pardon
  // ces connard montre pas sa au debut, mais c'est dedans
  // C'est pk j'ai du mal avec les documents, c'est jamais précis... Je déteste ce genre de documentation
  // malheuresement y'a pas le choix faut avoir le nez dedans
  // et prendre son temps pour lire
  // Ok...
  return (
    <>
      <StyledScroll
        contentContainerStyle={{
          // sa style le contenu dans la scrollView, c'est un pro Tips mdr,
          paddingBottom: 30, // je pousse le contenu de la scrollView de 128 pixel vers le haut
        }}>
        {films.map(affiche => {
          console.log(affiche);
          return (
            <Popular
              key={affiche.id} // id
              title={affiche.title}
            />
          );
        })}

        <Button
          onPress={() => navigation.navigate('Catalogue')}
          title="Retour"
          color="#987684"
        />
      </StyledScroll>
    </>
  ); //att petite astuce, et super important avec les scrollView
};

const StyledScroll = styled.ScrollView`
  margin: 12px;
`;

export default Films;
