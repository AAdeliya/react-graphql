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

function App() {
  const {data, error, loading} = useQuery(GET_USERS);

  if (loading) return  <p> Data loading...</p>;

  if (error) return <p> Error : {error.message}</p>;


  return (
    <> <h1>
      Users 
    </h1>


    <div> {data.getUsers.map((user) => {



    })}</div>
    
    </>

    );
  
}

export default App;
