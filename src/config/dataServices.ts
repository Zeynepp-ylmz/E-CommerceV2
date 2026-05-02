import { addDoc, collection, getDocs, query, where } from "firebase/firestore"
import { db } from "./firebase"
import { AddressData, AddressInput, ProductData } from '../types/appProductData'


export const getProductsData = async (): Promise<ProductData[] | undefined> => {
    try {
        const querySnapshot = await getDocs(collection(db, "products"))
        const list: ProductData[] = []
        querySnapshot.forEach((doc) => {
            list.push({
                id: doc.id,
                ...doc.data(),
            } as ProductData)
        })
        return list;
    } catch (error) {
        console.log("hata: ", error)
    }
}

export const addAddress = async (addressData: AddressInput, userId: string) => {
    try {
        const docRef = await addDoc(collection(db, "addresses"), {
            ...addressData,
            createdAt: new Date().toString(),
            userId: userId
        })
        return docRef.id
    } catch (error) {
        console.log("addAddress error: ", error)
    }
}

export const getUserAddresses = async (userId: string) => {
    try {
        const q = query(collection(db, "addresses"), where("userId", "==", userId));
        const querySnapshot = await getDocs(q);

        const list: AddressData[] = [];

        querySnapshot.forEach((doc) => {
            list.push({
                id: doc.id,
                ...doc.data(),
            } as AddressData);
        });

        return list;
    } catch (error) {
        console.log("getUserAddresses error: ", error);
        return [];
    }
}