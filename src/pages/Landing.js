import { useDispatch } from "react-redux";
import { useGetUserQuery, setUserState } from "../store";

function Landing() {
   const dispatch = useDispatch()
   const {data,error,isFetching} = useGetUserQuery();

   let userData;
   if (isFetching){
      userData = <div>Fetching User Data</div>
   } else if (error){
      console.log(error)
      userData = <div>Error Fetching User Data</div>
   } else {
      if(data){
         console.log(data);
         userData = <div>User Logged In Email: {data.username} First Name: {data.firstName} isTeacher: {data.isTeacher.toString()}</div>
         dispatch(setUserState({id:data.googleId, email:data.username, firstName:data.firstName, lastName:data.lastName, isTeacher:data.isTeacher}))
      } else{
         userData = <div>NO ONE is logged in.</div>
      }
      
   }
   return(
      <div className="bg-indigo-500 pb-96">
            {userData}
      </div>
   )   
}

export default Landing;