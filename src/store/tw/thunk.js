import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { loadAllTweets, loadTrendingsAndHastags, orderTrendings, startLoading, stopLoading } from './twSlice'
import { FireBaseDB } from '../../firebase/config';
import { LoadTweets } from '../../tw/helpers/loadTweets';
import { hastagBrowser, hastagsCounter } from '../../tw/helpers/hashtagCounter';
import { UploadingPhotos } from '../../tw/helpers/uploadingPhotos';


export const startLoadTweet = (uid, displayName, tw, Imagenes = []) => {

    return async (dispatch, getState) => {
        const photoURL = await UploadingPhotos(Imagenes);

        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');

        const formattedDate = `${year}-${month}-${day}`;

        dispatch(startLoading());
        const tweet = {
            displayName,
            photoURL,
            tw,
            uid,
            formattedDate
        };
        const docRef = doc(collection(FireBaseDB, 'publicaciones'));
        await setDoc(docRef, tweet, { merge: true });
        console.log('Documento agregado con ID: ', docRef.id);
        dispatch(stopLoading());


        const resp = await LoadTweets();
        dispatch(loadAllTweets(resp));
        const { otherTweets } = getState().tw
        const hashtags = hastagBrowser(otherTweets);
        const trending = hastagsCounter(hashtags);
        dispatch(loadTrendingsAndHastags({ hashtags, trending }))
        dispatch(orderTrendings());
    }
}
export const startLoadAllTweets = () => {
    return async (dispatch, getState) => {
        dispatch(startLoading())
        const resp = await LoadTweets();
        dispatch(loadAllTweets(resp));
        const { otherTweets } = getState().tw
        const hashtags = hastagBrowser(otherTweets);
        const trending = hastagsCounter(hashtags);
        dispatch(loadTrendingsAndHastags({ hashtags, trending }))
        dispatch(orderTrendings());
        dispatch(stopLoading())
    }
}