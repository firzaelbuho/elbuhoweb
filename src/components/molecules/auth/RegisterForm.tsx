// components/LoginForm.js

"use client"
import React from 'react';
import { useState } from 'react';

import useSWR from 'swr';
import CheckEmail from '@/utils/api/auth/CheckEmail';
import CheckUsername from '@/utils/api/auth/CheckUsername';
import RegisterUser from '@/utils/api/auth/RegisterUser';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { redirect } from 'next/navigation';



const RegisterForm : React.FC = () => {

  const router = useRouter()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password:'',
    password_confirm : '',
    name: '',
    emailAvailability:false,
    usernameAvailability:false
    // Tambahkan properti lain sesuai kebutuhan formulir
  });

  const handleSubmit = async (e:any)=>{
    e.preventDefault();
    router.push('/dashboard');

    const body = {
      name : formData.name,
      email : formData.email,
      username : formData.username,
      password : formData.username
    }
    const url = "https://elbuho.my.id/api/users/register"
    const mResponse = RegisterUser(url, body)
    mResponse.then(
      response=>{
        console.log(response)
        if(response.success){
          
          router.push('/login');
        }
      }
    )
  }

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleUsernameChange = (e:any) => {
    setIsRequestUsername(true)
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleEmailChange = (e:any) => {
    setIsRequestEmail(true)
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };



  const [isRequestEmail, setIsRequestEmail] = useState(false);
  const [isRequestUsername, setIsRequestUsername] = useState(false);
  const emailUrl = 'https://elbuho.my.id/api/users/check-email-availability/'
  const usernameUrl = 'http://localhost:4000/api/auth/users/check-username-availability/addd'

  const { data:dataEmail, error:errorEmail } = useSWR<any>(isRequestEmail? "https://elbuho.my.id/api/users/check-username-availability/register" : null, CheckEmail);
  console.log(errorEmail)
  const { data:dataUsername, error:errorUsername } = useSWR<any>(isRequestUsername? formData.username : null, CheckUsername);
  

  if(dataEmail){
    if(dataEmail.success){
      setFormData(prevState => ({
        ...prevState,
        ["emailAvailability"]: true
      }));
      // alert(dataEmail.message)
      
    } else {
      setFormData(prevState => ({
        ...prevState,
        ["emailAvailability"]: false
      }));
    
    }
    setIsRequestEmail(false)
  }

  if(dataUsername){
    alert("dicek")
    if(dataUsername.success){
      setFormData(prevState => ({
        ...prevState,
        ["usernameAvailability"]: true
      }));
      // alert(dataEmail.message)
      
    } else {
      setFormData(prevState => ({
        ...prevState,
        ["usernameAvailability"]: false
      }));
    
    }
    setIsRequestUsername(false)
  }




  return (
    <div className="">
      <div className="w-full p-10 card-bordered border-primary-content card ">
        <h2 className="mb-8 text-2xl font-semibold">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm ">
             Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="input input-bordered input-primary-content w-full  "
              onChange={handleChange}
              value={formData.name}
            />
          </div>
          <label htmlFor="email"  className="block mb-2 text-sm">
                Email
          </label>
          <div className='grid grid-cols-2 gap-4 mb-4'>
            <div className='col-3'>
              <input
                  type="email"
                  id="email"
                  name="email"
                  className="input input-bordered input-primary-content w-full "
                  onChange={handleEmailChange}
                  value={formData.email}
              />
            </div>
            
            <p className={formData.emailAvailability? "my-3 text-success" : "my-3 text-warning"}>
                {formData.emailAvailability? "email available" : "email unavailable"}
            </p>
          </div>

          <label htmlFor="email" className="block mb-2 text-sm">
              Username
          </label>
          <div className="mb-4 grid grid-cols-2 gap-4">
            
            <input
              type="text"
              id="username"
              name="username"
              className="input input-bordered input-primary-content w-full"
              onChange={handleUsernameChange}
              value={formData.username}
            />
            <p className={formData.usernameAvailability? "my-3 text-success" : "my-3 text-warning"}>
              {formData.usernameAvailability? "username available" : "username unavailable"}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10">
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-sm ">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="input input-bordered input-primary-content w-full"
              onChange={handleChange}
              value={formData.password}
            />
          </div>
          <div className='mb-4'>
          <label htmlFor="password" className="block mb-2 text-sm ">
              Password Confirmation
            </label>
            <input
              type="password"
              id="password_confirm"
              name="password_confirm"
              className="input input-bordered input-primary-content w-full"
              onChange={handleChange}
              value={formData.password_confirm}
            />
          </div>
          </div>
          
        
          <button type="submit" className="w-full  btn btn-primary mt-2">
            Register
          </button>
          <Link href="/dashboard">Dashboard</Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
