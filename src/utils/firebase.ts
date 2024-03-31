import {initializeApp} from 'firebase/app';
// import {IWriteProps,ISpend, IIncome} from './types'
import {getDatabase, onValue, ref, set, remove} from "firebase/database";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID

};

interface IApprovalData {
    userId: string;
    rsvp: boolean; // Assuming rsvp is a boolean value
}

interface IAddAlcohol {
    userId: string;
    drink: string;
}

interface IApprovalKid {
    userId: string;
    kid: boolean;
}



const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const approve = async ({userId, rsvp}: IApprovalData): Promise<void> => {
    // Construct the path to the user's rsvp status
    const userRsvpRef = ref(database, `users/${userId}/rsvp`);
    // Set the new value directly at the specified path
    return await set(userRsvpRef, rsvp);
};

const getApproveStatus = (userId: string): Promise<Boolean> => {
    return new Promise((resolve, reject) => {
        const userRsvpRef = ref(database, `users/${userId}/rsvp`);
        onValue(userRsvpRef, (snapshot) => {
            const data = snapshot.val();
            resolve(data); // Resolve the promise with the obtained value
        }, (error) => {
            reject(error); // Reject the promise if there's an error
        });
    });
};

const addAlcohol = async ({userId,drink}:IAddAlcohol) => {
    const userAlcoholRef = ref(database, `users/${userId}/alcohol/${drink}`);
    return await set(userAlcoholRef, true);
}

const getAlcoholStatus = async (userId: string): Promise<Boolean> => {
    return new Promise((resolve, reject) => {
        const userKidsRef = ref(database, `users/${userId}/alcohol`);
        onValue(userKidsRef, (snapshot) => {
            const data = snapshot.val();
            resolve(data); // Resolve the promise with the obtained value
        }, (error) => {
            reject(error); // Reject the promise if there's an error
        });
    });
}


const deleteAlcohol = async ({userId,drink}:IAddAlcohol) => {

    const userAlcoholRef = ref(database, `users/${userId}/alcohol/${drink}`);
    return await remove(userAlcoholRef);
}

const approveKid = async ({userId,kid}:IApprovalKid) => {
    const userKidRef = ref(database, `users/${userId}/kids`);
    return await set(userKidRef, kid);
}

const getKidStatus = async (userId: string): Promise<Boolean> => {
    return new Promise((resolve, reject) => {
        const userKidsRef = ref(database, `users/${userId}/kids`);
        onValue(userKidsRef, (snapshot) => {
            const data = snapshot.val();
            resolve(data); // Resolve the promise with the obtained value
        }, (error) => {
            reject(error); // Reject the promise if there's an error
        });
    });
}

export {approve, getApproveStatus,addAlcohol,deleteAlcohol,approveKid,getKidStatus,getAlcoholStatus};