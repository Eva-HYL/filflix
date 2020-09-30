import React from 'react'
import { Form, FormGroup, ControlLabel, FormControl, ButtonToolbar, Button } from 'rsuite'
import Svg from '../../components/Svg'
import './index.less'
const Login = () => {
  return (
    <div className='login'>
      <div className='login-bg'>
        <img src='login-bg.png' alt='login' />
      </div>
      <div className='login-box'>
        <div className='logo-box'>
          <Svg name='logo' color='#000' style={{ marginRight: 10 }} />
          <Svg name='logo-font' color='#000' width='52' height='24' />
          <h1>Welcome to Filflix</h1>
        </div>
        <div className='login-form'>
          <Form>
            <FormGroup>
              <ControlLabel>Your e-mail</ControlLabel>
              <FormControl name='email' type='email' placeholder='Name@google.com' />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Your password</ControlLabel>
              <FormControl name='name' type='passowrd' placeholder='Password' />
            </FormGroup>

            <FormGroup>
              <ButtonToolbar>
                <Button color='violet'>Sign in</Button>
              </ButtonToolbar>
            </FormGroup>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Login
