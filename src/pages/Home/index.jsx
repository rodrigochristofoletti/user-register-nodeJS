import { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom'; // to swing between pages
import api from "../../services/api";

import {
  Title,
  Container,
  Form,
  ContainerInput,
  Input,
  InputLabel,
  Message,
} from "./styles";

import Button from "../../components/button";
import TopBackgroundDiv from "../../components/topBackground";

function Home() {
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();
  const [message, setMessage] = useState("")

  const navigate = useNavigate();

  async function registerNewUser() {
    try { 

      // Validate the email format
    const email = inputEmail.current.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (!emailPattern.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
       }
    await api.post("/users", {
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value,
    });
    inputName.current.value = "";
    inputAge.current.value = "";
    inputEmail.current.value = "";

    setMessage("User registered successfully!");
  } catch {
    console.error("Error registering user:", error);
    setMessage("Failed to register user. Please try again.");
  }
  }

  return (
    <Container>
      <TopBackgroundDiv />
      <Form action="">
        <Title>Sign in</Title>
        <ContainerInput>
          <div>
            <InputLabel>
              Name<span> *</span>
            </InputLabel>
            <Input type="text" placeholder="name" ref={inputName} />
          </div>

          <div>
            <InputLabel>
              Age<span> *</span>
            </InputLabel>
            <Input type="number" placeholder="age" ref={inputAge} />
          </div>
        </ContainerInput>

        <div style={{ width: "100%" }}>
          <InputLabel>
            Email<span> *</span>
          </InputLabel>
          <Input type="email" placeholder="email" ref={inputEmail} />
        </div>

        <Message>{message}</Message>

        <Button type="button" onClick={registerNewUser} theme="primary-button">
          Sign in
        </Button>
        <Button type="button" onClick={() => navigate('/users-list')}>
          Check users
        </Button>
      </Form>
    </Container>
  );

}
export default Home;
