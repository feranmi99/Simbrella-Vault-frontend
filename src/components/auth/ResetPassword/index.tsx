'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';
import { useQuery } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ResetPasswordFormPayload } from '@/types/auth-types';
import { useRouter, useSearchParams } from 'next/navigation';
import { unAuthenticatedErrorHandler } from '@/service/axios/errorHandler';
import { resetPasswordApi, verifyResetPasswordTokenApi } from '@/service/api/authApi';
import { resetPasswordFormValidationSchema } from '@/utils/validationSchemas/authSchema';
import AuthLayout from '@/components/Baselayout/Layout/AuthLayout';
import Loader from '@/components/Loader';
import { Textfield } from '@/components/ui/Textfield';
import { Button } from '@/components/ui/button';

const ResetPassword = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(resetPasswordFormValidationSchema),
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<ResetPasswordFormPayload> = (data) => {
    handleResetPassword(data);
  };

  const token = useSearchParams()?.get('token') || '';

  const { mutate: handleResetPassword, isPending } = useMutation({
    mutationFn: ({ password }: ResetPasswordFormPayload) =>
      resetPasswordApi({ password, token }),
    onSuccess: ({ message }) => {
      toast.success(message);
      router.push('/');
    },
    onError: (error) => {
      toast.error(unAuthenticatedErrorHandler(error));
    },
  });

  const { data: tokenData, isLoading: isVerifyingToken } = useQuery({
    queryKey: ['verifyResetToken'],
    queryFn: () => verifyResetPasswordTokenApi(token),
  });

  // if (!token) {
  //   router.back();

  //   return null;
  // }

  return (
    <AuthLayout isLogedIn={false}>
      <div className='container py-10'>
        <div className='mx-auto max-w-[380px]'>
          <img src='/images/savetown-logo.png' alt='image' className='mx-auto w-[200px]' />
          <h2 className='font-semibold text-[28px] text-center mt-20'>Reset your Password</h2>

          {isVerifyingToken ? (
            <div className='mt-40'>
              <Loader />
            </div>
          ) : !!tokenData?.data ? (
            <div className='mt-16 mb-6'>
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Textfield
                  placeholder='Enter your password'
                  id='password'
                  required
                  label='Password'
                  error={errors.password?.message}
                  register={register}
                  type={isPasswordVisible ? 'text' : 'password'}
                  surfixIcon={
                    <span
                      className='cursor-pointer'
                      onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
                      <span className='text-sm cursor-pointer'>
                        {isPasswordVisible ? 'Hide' : 'Show'}
                      </span>
                    </span>
                  }
                />{' '}
                <div className='mt-6 mb-10'>
                  <Textfield
                    placeholder='Enter your password'
                    id='confirmPassword'
                    required
                    label='Confirm Password'
                    error={errors.confirmPassword?.message}
                    register={register}
                    type={isConfirmPasswordVisible ? 'text' : 'password'}
                    surfixIcon={
                      <span
                        className='cursor-pointer'
                        onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}>
                        <span className='text-sm cursor-pointer'>
                          {isConfirmPasswordVisible ? 'Hide' : 'Show'}
                        </span>
                      </span>
                    }
                  />{' '}
                </div>
                <Button
                  type='submit'
                  isLoading={isPending}
                >
                  Change Password
                </Button>
              </form>
            </div>
          ) : (
            <h2 className='text-center mt-40 font-medium text-xl'>
              The Link you&apos;re trying to access is invalid
            </h2>
          )}
        </div>
      </div>
    </AuthLayout>
  );
};

export default ResetPassword;
