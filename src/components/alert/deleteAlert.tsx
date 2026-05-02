import { Alert } from 'react-native'
import { removeItemFromCart } from '../../store/reducers/cartSlice';
import { addFavorited } from '../../store/reducers/favoriteSlice';




export const deleteAlert = (item: any, dispatch: any) =>
    Alert.alert('Dikkat', 'Silmek istediğine emin misin?', [
        {
            text: 'Sil',
            onPress: () => dispatch(removeItemFromCart(item)),
            style: 'cancel',
        },
        { text: 'Favorilere Ekle', onPress: () => { dispatch(addFavorited(item)); dispatch(removeItemFromCart(item)) } },
    ]);