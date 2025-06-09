'use client';

import { useEffect, useState } from 'react';
import { loginApi } from '@/service/api/authApi';
import { LoginFormPayload } from '@/types/auth-types';
import { useMutation } from '@tanstack/react-query';
import { yupResolver } from '@hookform/resolvers/yup';
import AuthLayout from '@/components/Baselayout/Layout/AuthLayout';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter, useSearchParams } from 'next/navigation';
import { unAuthenticatedErrorHandler } from '@/service/axios/errorHandler';
import { loginFormValidationSchema } from '@/utils/validationSchemas/authSchema';
import SocialAuth from '../SocialAuth';
import { Input } from '@/components/ui/input';
import { Textfield } from '@/components/ui/Textfield';
import { Button } from '@/components/ui/button';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setCredentials } from '@/store/slices/userSlice';
import { AppDispatch } from '@/store';

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginFormValidationSchema),
  });


  const onSubmit: SubmitHandler<LoginFormPayload> = (data) => {
    handleLogin(data);
    localStorage.setItem('nairazo_v_email', data.emailOrPhone ?? null);
  };

  const { mutate: handleLogin, isPending } = useMutation({
    mutationFn: loginApi,
    onSuccess: ({ data }) => {
      dispatch(
        setCredentials({
          token: data?.token,
          user: data?.user,
        })
      );
      toast.success(data.message);
      router.push('/');
    },
    onError: (error: any) => {
      const serverEmail = error?.response?.data?.email;
      const err = unAuthenticatedErrorHandler(error);
      toast.error(err);
      if (err.toLocaleLowerCase().includes('not verified')) {
        localStorage.setItem('nairazo_v_email', serverEmail);
        router.push('/verify-email');
      }
    },
  });

  return (
    <AuthLayout isLogedIn={true}>
      <h2 className='font-semibold text-2xl mt-20'>Log In</h2>
      <div className='text'>
        <div className='mt-6 pb-4'>
          <div className='w-full flex items-center justify-between'>
            <hr className='flex-1' />
            <span className='px-5'>or</span>
            <hr className='flex-1' />
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className='mt-4'>
            <Textfield
              id='emailOrPhone'
              required
              label='Email Or Mobile Number'
              error={errors.emailOrPhone?.message}
              register={register}
            />
          </div>

          <div className='mt-4 mb-12'>
            <Textfield
              id='password'
              required
              label='Password'
              error={errors.password?.message}
              register={register}
              className='pr-18'
              type={isPasswordVisible ? 'text' : 'password'}
              surfixIcon={
                <span
                  className='cursor-pointer font-light text-sm'
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
                  {isPasswordVisible ? 'Hide' : 'Show'}
                </span>
              }
            />{' '}
            <p className='text-sm text-right mt-2'>
              <span
                className='text-sm cursor-pointer'
                onClick={() => router.push('/forgot-password')}>
                Forgot Password?
              </span>
            </p>
          </div>
          <Button isLoading={isPending} type='submit' className='w-full bg-blue-600 hover:bg-blue-700' >
            Log In
          </Button>
          <p className='text-sm text-right mt-4'>
            Don&apos; have an account?{' '}
            <span
              className='font-semibold cursor-pointer text-blue-600 hover:text-blue-700'
              onClick={() => router.push('/register')}>
              Signup here!
            </span>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;
