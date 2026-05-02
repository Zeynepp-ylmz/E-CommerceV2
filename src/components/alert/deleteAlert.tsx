import { Alert } from 'react-native'
import { removeItemFromCart } from '../../store/Reducers/cartSlice';
import { addFavorited } from '../../store/Reducers/favoriteSlice';




export const deleteAlert = (item: any, dispatch: any) =>
    Alert.alert('Dikkat', 'Silmek istediğine emin misin?', [
        {
            text: 'Sil',
            onPress: () => dispatch(removeItemFromCart(item)),
            style: 'cancel',
        },
        { text: 'Favorilere Ekle', onPress: () => { dispatch(addFavorited(item)); dispatch(removeItemFromCart(item)) } },
    ]);