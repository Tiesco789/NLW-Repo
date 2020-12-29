import React from "react";
import { View, Image, Text} from "react-native";
import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";
import heartOutLineIcon from '../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';




function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://github.com/tiesco789.png' }}
        />

        <View style={styles.profileInfo} >
          <Text style={styles.name}>Franccesco Antonio</Text>
          <Text style={styles.subject}>Quimica</Text>
        </View>
      </View>

      <Text style={styles.bio}>Always willing to learn new technologies to optimize my technical work with the best performance.</Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/Hora {'   '}
          <Text style={styles.priceValue}>R$20,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartOutLineIcon} /> */}
            <Image source={unFavoriteIcon} />

          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;
