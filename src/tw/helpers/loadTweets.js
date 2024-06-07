import { collection, getDocs } from 'firebase/firestore';
import React from 'react'
import { FireBaseDB } from '../../firebase/config';



export const LoadTweets = async () => {
    const collectionRef = collection(FireBaseDB, `/publicaciones`);
    const docs = await getDocs(collectionRef);
    const tweets = [];

    docs.forEach(doc => {

        tweets.push({ ...doc.data(), id: doc.id });
    });

    return tweets;
}

