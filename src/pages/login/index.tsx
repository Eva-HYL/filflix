import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useState } from 'react'
import { Form, FormGroup, ControlLabel, FormControl, ButtonToolbar, Button, Alert, Schema } from 'rsuite'
import { postLogin, Account } from '../../services/login'
import Svg from '../../components/Svg'
import './index.less'
import { clearLocalCookie, clearLocalStorage } from '../../utils/cookie'

const { StringType } = Schema.Types
const Login = () => {
  const route = useRouter()
  const toHome = () => {
    route.push('/')
  }

  useEffect(() => {
    clearLocalCookie()
    clearLocalStorage()
  })

  const model = Schema.Model({
    email: StringType().isEmail(' Please enter the correct email address'),
    pwd: StringType(),
  })

  const [formValue, setFormValue] = useState<Account>({} as Account)

  const onChange = (values: unknown) => {
    const { email, pwd } = values as Account
    setFormValue({ email, pwd })
  }

  const onSubmit = async () => {
    const data = await postLogin({ ...formValue })
    if (data.code === 200) {
      Alert.info('登录成功!')
      route.replace('/')
    } else {
      Alert.error(data.msg)
    }
  }
  return (
    <div className='login'>
      <div className='login-bg'>
        <img src='login-bg.png' alt='login' />
      </div>
      <div className='login-box'>
        <div className='logo-box'>
          <Svg name='logo' color='#000' style={{ marginRight: 10 }} onClick={toHome} />
          <Svg name='logo-font' color='#000' width='52' height='24' onClick={toHome} />
          <h1>Welcome to Filflix</h1>
        </div>
        <div className='login-form'>
          <Form model={model} formValue={formValue} onSubmit={onSubmit} onChange={onChange}>
            <FormGroup>
              <ControlLabel>Your e-mail</ControlLabel>
              <FormControl name='email' type='email' placeholder='Name@google.com' />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Your password</ControlLabel>
              <FormControl name='pwd' type='password' placeholder='Password' />
            </FormGroup>

            <FormGroup>
              <ButtonToolbar>
                <Button color='violet' type='submit'>
                  Sign in
                </Button>
              </ButtonToolbar>
            </FormGroup>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Login
