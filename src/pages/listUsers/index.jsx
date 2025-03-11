import Button from "../../components/button";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import TopBackgroundDiv from "../../components/topBackground";
import {
  AvatarUser,
  CardUsers,
  Container,
  ContainerUsers,
  Title2,
  TrashIcon,
} from "./styles";
import Trash from "../../assets/trash.svg";


function ListUsers() {
  

  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get("/users");
      setUsers(data);
    }
    getUsers();
  }, []);

  async function deleteUsers(id) {
    await api.delete(`/users/${id}`)

    const updatedUsers = users.filter(user => user.id !== id)

    setUsers(updatedUsers)
  }

  return (
    <Container>
      <TopBackgroundDiv />
      <Title2>List of Users</Title2>

      <ContainerUsers>
        {users.map((user) => (
          <CardUsers key={user.id}>
            <AvatarUser
              src={`https://avatar.iran.liara.run/public?username=${user.id}`}
            />
            <div>
              <h3>{user.name}</h3>
              <p>Age: {user.age}</p>
              <p>{user.email}</p>
            </div>
            <TrashIcon src={Trash} alt="trash-icon" onClick={() => deleteUsers(user.id)} />
          </CardUsers>
        ))}
      </ContainerUsers>
      <Button type="button" onClick={() => navigate("/")}>
        Go back
      </Button>
    </Container>
  );
}

export default ListUsers;
