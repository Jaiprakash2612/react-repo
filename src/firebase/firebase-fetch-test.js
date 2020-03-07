import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('aWymNzALTJhYkv995dDA').collection('cartitems').doc('YUTnFZK4WMXJlLRfUp1i') //fetch cartitems collection data with id ="YUTnFZK4WMXJlLRfUp1i" with user id="aWymNzALTJhYkv995dDA"
firestore.doc('/users/aWymNzALTJhYkv995dDA/cartitems/YUTnFZK4WMXJlLRfUp1i'); //fetch cartitems collection data with id ="YUTnFZK4WMXJlLRfUp1i" with user id="aWymNzALTJhYkv995dDA"
firestore.doc('/users/aWymNzALTJhYkv995dDA/cartitems'); //fetch cartitems collection with user id=aWymNzALTJhYkv995dDA