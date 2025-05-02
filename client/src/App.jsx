import './App.css'
import {useQuery, useMutation, gql} from  '@apollo/client' 

const GET_USERS = gql`
query GetUsers {
  getUsers {
    id
    age
    name
  }
}
`;

const GET_USERS_BY_ID = gql`
query GetUsersById($id:ID!) {
  getUsersById(id: $id) {
    id
    age
    name
  }
}
`;

function App() {
  const {data: getUsersData, error: getUsersError, loading:getUsersLoading} = useQuery(GET_USERS);
  const {data, error, loading} = useQuery(GET_USERS_By_ID);


  if (loading) return  <p> Data loading...</p>;

  if (error) return <p> Error : {error.message}</p>;


  return (
    <> <h1>
      Users 
    </h1>


    <div> {data.getUsers.map((user) => {
      <div>

        <p>Name : {user.name} </p>
        <p>Age : {user.age} </p>
        <p>Is this person married: {user.isMarried ? "Yes" : "No"} </p>
      </div>



    })}</div>
    
    </>

    );
  
}

export default App;
