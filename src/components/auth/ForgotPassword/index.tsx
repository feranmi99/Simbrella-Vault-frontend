'use client';

import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { Button, Textfield } from '';
// import { forgotPasswordApi } from 'services/api/authApi';
// import { SubmitHandler, useForm } from 'react-hook-form';
// import { ForgotPasswordFormPayload } from 'types/auth-types';
import BgGradientLayout from '@/components/Baselayout/Layout/BgGradientLayout';
import { ForgotPasswordFormPayload } from '@/types/auth-types';
import { SubmitHandler, useForm } from 'react-hook-form';
import { forgotPasswordFormValidationSchema } from '@/lib/validationSchemas/authSchema';
import { Textfield } from '@/components/ui/Textfield';
import AuthLayout from '@/components/Baselayout/Layout/AuthLayout';
import { forgotPasswordApi } from '@/service/api/authApi';
import { unAuthenticatedErrorHandler } from '@/service/axios/errorHandler';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@/components/ui/button';
// import { unAuthenticatedErrorHandler } from 'services/axios/errorHandler';
// import { forgotPasswordFormValidationSchema } from 'utils/validationSchemas/authSchema';

const ForgotPassword = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(forgotPasswordFormValidationSchema),
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<ForgotPasswordFormPayload> = (data) => {
    handleForgotPassword(data);
  };

  const { mutate: handleForgotPassword, isPending } = useMutation({
    mutationFn: forgotPasswordApi,
    onSuccess: ({ message }, { email }) => {
      toast.success(message);
      reset();
    },
    onError: (error, { email }) => {
      toast.error(unAuthenticatedErrorHandler(error));
      const errData = (error as any).response?.data;
      if (errData?.error?.toLowerCase().includes('user_unverified')) {
        localStorage.setItem('savetown_v_email', email);
        router.push('/verify-email');
      }
    },
  });

  return (
    <AuthLayout isLogedIn={false}>
      <div className='container py-10'>
        <div className='mx-auto max-w-[380px]'>
        <img src='/Image/reset-pass.jpg' alt='reset password' className='mx-auto h-[250px]' />{' '}
          <h2 className='font-semibold text-[28px] text-center mt-20'>Reset your Password</h2>
          <p className='text-center text-sm'>
            Enter your email address below to reset your password
          </p>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className='mt-10 mb-6'>
              <Textfield
                id='email'
                required
                label='Email'
                error={errors.email?.message}
                register={register}
              />
            </div>
            <Button
              type='submit'
              className='w-full bg-orange-400'
              isLoading={isPending}
            >
              Reset Password
            </Button>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;
