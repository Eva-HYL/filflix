import React, { useState } from 'react'
import Link from 'next/link'
import { Form, FormGroup, ControlLabel, FormControl, ButtonToolbar, Button, Schema, Alert } from 'rsuite'
import Svg from '../../components/Svg'
import './index.less'
import { Account, postRegist } from '../../services/login'
import { useRouter } from 'next/dist/client/router'
const { StringType } = Schema.Types
const SignUp = () => {
  const route = useRouter()
  const toHome = () => {
    route.push('/')
  }

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
    const data = await postRegist({ ...formValue })

    if (data.code === '200') {
      Alert.info('注册成功!' + data.msg)
    } else {
      Alert.error(data.msg)
    }
  }
  return (
    <div className='signUp'>
      <div className='signUp-bg'>
        <img src='login-bg.png' alt='signUp' />
      </div>
      <div className='signUp-box'>
        <div className='logo-box'>
          <Svg name='logo' color='#000' style={{ marginRight: 10 }} onClick={toHome} />
          <Svg name='logo-font' color='#000' width='52' height='24' onClick={toHome} />
          <h1>Welcome to Filflix</h1>
        </div>
        <div className='signUp-form'>
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
                  Sign up
                </Button>
              </ButtonToolbar>
            </FormGroup>
          </Form>
          <div>
            Already have a account?
            <Link href='/login'>
              <span style={{ color: '#6753F4' }}> Sign in </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
