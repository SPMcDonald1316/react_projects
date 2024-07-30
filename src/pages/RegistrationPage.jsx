import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import Body from "../components/Body";
import InputField from "../components/InputField";
import { useApi } from "../contexts/ApiProvider";

function RegistrationPage() {
  const [formErrors, setFormErrors] = useState({});
  const usernameField = useRef();
  const emailField = useRef();
  const passwordField = useRef();
  const password2Field = useRef();
  const navigate = useNavigate();
  const api = useApi()

  useEffect(() => {
    usernameField.current.focus();
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    if (passwordField.current.value !== password2Field.current.value) {
      setFormErrors({password2: "Passwords don't match"});
    } else {
      const data = await api.post('/users', {
        username: usernameField.current.value,
        email: emailField.current.value,
        password: passwordField.current.value
      });
      if (!data.ok) {
        setFormErrors(data.body.errors.json);
      } else {
        setFormErrors({});
        navigate('/login');
      }
    }
  };

  return (
    <Body>
      <h1>Register</h1>
      <Form onSubmit={onSubmit}>
        <InputField
          name="username" label="Username"
          error={formErrors.username}
          fieldRef={usernameField}
        />
        <InputField
          name="email" label="Email address"
          error={formErrors.email}
          fieldRef={emailField}
        />
        <InputField 
          name="password" label="Password" type="password"
          error={formErrors.password}
          fieldRef={passwordField}
        />
        <InputField 
          name="password2" label="Password again" type="password"
          error={formErrors.password2}
          fieldRef={password2Field}
        />
        <Button variant="primary" type="submit">Register</Button>
      </Form>
    </Body>
  );
}

export default RegistrationPage