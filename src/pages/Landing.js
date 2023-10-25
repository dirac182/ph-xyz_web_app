import { useGetUserQuery } from "../store";

function Landing() {
   const {data,error,isFetching} = useGetUserQuery();

   let userData;
   if (isFetching){
      userData = <div>Fetching User Data</div>
   } else if (error){
      console.log(error)
      userData = <div>Error Fetching User Data</div>
   } else {
      if(data){
         userData = <div>User Logged In</div>
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