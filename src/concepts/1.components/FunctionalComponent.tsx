import { useState } from "react";

// Define props type
interface UserProfileProps {
    userId: string;
  }
  
  // Define state type
  interface UserProfileState {
    user: {
      name: string;
      age: number;
      email: string;
    } | null;
    loading: boolean;
  }


  
    

const FunctionalComponent = () => {
     const [userProfile,setUserProfile]=useState<UserProfileState>({
        user: null,
        loading: true,
    });
     const {user,loading} = userProfile;


      // Function to simulate fetching user data
     const fetchUserData = () => {
    

        // Simulate API call to fetch user data
        setTimeout(() => {
          setUserProfile({
            user: {
              name: 'John Doe',
              age: 30,
              email: 'johndoe@example.com',
            },
            loading: false,
          });
        }, 2000); // Simulate 2 second delay
      };

      fetchUserData();

    if(loading){
       return <p>Loading ... </p>
    }

    return (
       <div>
           <h1 className="text-2xl">User Profile : Functional Component</h1>
           <p>Name: {user?.name}</p>
           <p>Age: {user?.age}</p>
           <p>Email: {user?.email}</p>
       </div>
    )
}

export default FunctionalComponent
