import { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import Body from "../components/Body";
import InputField from '../components/InputField';

function LoginPage() {
  const [formErrors, setFormErrors] = useState();

  const onSubmit = (ev) => {
    ev.preventDefault();
    console.log('handle form here');
  };

  return (
    <Body>
      <h1>Login</h1>
      <Form onSubmit={onSubmit}>
        <InputField
          name="username"
          label="Username or email address"
          error={formErrors && formErrors.username}
        />
        <InputField
          name="password"
          label="Password"
          type="password"
          error={formErrors && formErrors.password}
        />
        <Button variant="primary" type="submit">Login</Button>
      </Form>
    </Body>
  );
}

export default LoginPage;