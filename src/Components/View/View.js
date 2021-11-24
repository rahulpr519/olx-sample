import React,{useState,useContext,useEffect} from 'react';
import { FirebaseContest } from '../../store/FirebaseContext';
import { PostContext } from '../../store/PostContext';

import './View.css';
function View() {

 const [userDeteils, setUserDetails] = useState()
 const {postDetails} = useContext(PostContext)
 const {firebase} = useContext(FirebaseContest)

 useEffect(() => {
   const {userId} = postDetails
   firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
     res.forEach(doc => {
       setUserDetails(doc.data())
     })
   })
 },[])
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9;{postDetails.price}</p>
          <span>{postDetails.name}</span>
          <p>{postDetails.description}</p>
          <span>{postDetails.createdAt}</span>
        </div>
      { userDeteils &&  <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDeteils.username}</p>
          <p>{userDeteils.phone}</p>
        </div>  }
      </div>
    </div>
  );
}
export default View;
