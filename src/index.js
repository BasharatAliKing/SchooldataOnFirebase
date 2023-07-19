import {initializeApp} from "firebase/app";
import {
    getFirestore,collection,getDocs, addDoc,
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAAIjCQJyz97pb0W5igl0tSu6gywWHmmjA",
    authDomain: "schooldatastore-1cfae.firebaseapp.com",
    projectId: "schooldatastore-1cfae",
    storageBucket: "schooldatastore-1cfae.appspot.com",
    messagingSenderId: "152607357960",
    appId: "1:152607357960:web:acf75eda56bd760152a5bd"
  };
  initializeApp(firebaseConfig);
// init services
const db=getFirestore();
// collection Ref
const colRef=collection(db,'schooldata');
// get collection  data
getDocs(colRef)
   .then((snapshot)=>{
    console.log(snapshot.docs)
    let schooldata=[]
    snapshot.docs.forEach((doc)=>{
        schooldata.push({...doc.data(),id:doc.id});
    })
   console.log(schooldata)
}).catch((err)=>{console.log(err.message)});


//  Add data to Database

const addData=document.querySelector('.schoolForm');
addData.addEventListener('submit',(e)=>{
    e.preventDefault();
    addDoc(colRef,{
        sname : addData.sname.value,
        fname:addData.fname.value,
        mname:addData.mname.value,
        gender:addData.gender.value,
        dob:addData.dob.value,
        email:addData.email.value,
        level:addData.level.value,
        department:addData.department.value,
        phone:addData.phone.value
    }).then(()=>{
        addData.reset();
    })
})




