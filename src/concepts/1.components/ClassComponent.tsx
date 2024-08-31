/**
 * Mounted: Rendered and inserted into the DOM tree.
 */

import { Component, ErrorInfo, ReactNode } from "react";

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


class ClassComponent extends Component<UserProfileProps, UserProfileState>{

    constructor(props : UserProfileProps){
        console.log('Class Component constructor runs');
        
        super(props);
        this.state ={
            user: null,
            loading: true,
        };
    }

    componentDidMount(): void {
        console.log('Runs after component has been mounted .');
        this.fetchUserData();
        
    }

    componentDidUpdate(prevProps: UserProfileProps): void {
        console.log('Updated component if there are new props or state changes');

        if(prevProps.userId !== this.props.userId){
            this.fetchUserData();
        }

        
        
    }

    componentWillUnmount(): void {
        console.log('Runs before the component is about to unmount.');
        
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.log("This will catch and display error if any of the child component throws error.");
        
    }

     // Function to simulate fetching user data
  fetchUserData = () => {
    

    // Simulate API call to fetch user data
    setTimeout(() => {
      this.setState({
        user: {
          name: 'John Doe',
          age: 30,
          email: 'johndoe@example.com',
        },
        loading: false,
      });
    }, 2000); // Simulate 2 second delay
  };

  render(): ReactNode {
        
     const {user, loading} = this.state;

     if(loading){
        return <p>Loading ... </p>
     }

     return (
        <div>
            <h1 className="text-2xl">User Profile : Class Component</h1>
            <p>Name: {user?.name}</p>
            <p>Age: {user?.age}</p>
            <p>Email: {user?.email}</p>
        </div>
     )

  }



}

export default ClassComponent
