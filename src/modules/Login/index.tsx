"use client"
import { gql } from '@apollo/client'
import { TextInput } from '@mantine/core'
import { useForm } from "@mantine/form"
import { useDisclosure } from '@mantine/hooks';
import { setCookie } from "cookies-next"
import Link from 'next/link'
import React from 'react'
import { toast } from 'react-toastify'

import { useLoginMutation } from '@/services/Graphql/types.generated'

const LOGIN = gql`
	mutation Login($email:String! , $password:String!) {
		login(input: { identifier: $email, password: $password }) {
			jwt
		}
	}
`

const LoginModule = () => {

  const [opened, { open, close }] = useDisclosure(false);

  const [loginUser] = useLoginMutation()

  const form = useForm({
    initialValues: {
      email: "",
      password: ""
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'ایمیل وارد شده معتبر نمیباشد'),
      password: (value) => (value.length < 1 ? 'رمز عبور خود را وارد نمایید' : null),
    },
  })

  const handleSubmitForm = async (values: {
    email: string;
    password: string;
  }) => {
    try {
      const result = await loginUser({
        variables: {
          email: values.email,
          password: values.password
        }
      })

      setCookie("token", result.data?.login.jwt)

      toast("mehran")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section>
      <div className="container">

        <div className="row">
          <div className="col-md-10 col-lg-8 col-xl-6 mx-auto">
            <div className="p-4 p-sm-5 bg-primary bg-opacity-10 rounded">
              <h2>ورود به حساب کاربری</h2>
              <form
                onSubmit={form.onSubmit(handleSubmitForm)}
                className="mt-4"
              >
                <TextInput
                  label={"پست الکترونیکی"}
                  className="form-control mb-3"
                  id="exampleInputEmail1"
                  placeholder="پست الکترونیکی"
                  {...form.getInputProps('email')}
                />

                <TextInput
                  label={"رمز عبور"}
                  type="password"
                  className="form-control mb-3"
                  id="exampleInputPassword1"
                  placeholder="*********"
                  {...form.getInputProps('password')}
                />

                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">مرا به خاطر بسپار</label>
                </div>
                <div className="row align-items-center">
                  <div className="col-sm-4">
                    <button type="submit" className="btn btn-success">ورود </button>
                  </div>
                  <div className="col-sm-8 text-sm-end">
                    <span>آیا هنوز ثبت نام نکرده اید؟ <Link className='underline' href="/signUp">ثبت نام</Link></span>
                  </div>
                </div>
              </form>
              <hr />
              <div className="text-center flex flex-col">
                <p>برای دسترسی سریع با شبکه اجتماعی خود وارد شوید</p>
                <ul className="list-unstyled d-sm-flex mt-3 justify-content-center">
                  <li className="mx-2">
                    <a href="#" className="btn bg-google d-inline-block"> ورود با google</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default LoginModule
