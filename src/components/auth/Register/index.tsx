'use client';

import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import PhoneInput from 'react-phone-number-input';
import { registerApi } from '@/service/api/authApi';
import { useMutation } from '@tanstack/react-query';
import { yupResolver } from '@hookform/resolvers/yup';
import AuthLayout from '@/components/Baselayout/Layout/AuthLayout';
import { RegisterFormPayload } from '@/types/auth-types';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter, useSearchParams } from 'next/navigation';
import { unAuthenticatedErrorHandler } from '@/service/axios/errorHandler';
import { registerFormValidationSchema } from '@/utils/validationSchemas/authSchema';
import useGeoLocation from 'react-ipgeolocation';

import { Button } from '@/components/ui/button';
import { Textfield } from '@/components/ui/Textfield';

const Register = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const {
    watch,
    register,
    getValues,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerFormValidationSchema),
  });

  const location = useGeoLocation(); 
  const router = useRouter();
  const searchParams = useSearchParams()!;

  const referralCode = searchParams.get('referrer');

  const onSubmit: SubmitHandler<RegisterFormPayload> = (data) => {
    handleRegister(data);
  };

  const hasAcceptedTandCVal = watch('hasAcceptedTandC');

  const { mutate: handleRegister, isPending } = useMutation({
    mutationFn: (data: RegisterFormPayload) => {
      let { hasAcceptedTandC, ...cleanData } = data;
      const payload = referralCode
        ? { ...cleanData, referralCode }
        : cleanData;
      return registerApi(payload);
    },
    onSuccess: (_, { email }) => {
      console.log(_);
      
      const userEmail = email || getValues()?.email;
      localStorage.setItem('nairazo_v_email', userEmail);
      setTimeout(() => {
        router.push('/verify-email');
      }, 1000);
    },
    onError: (error) => {
      toast.error(unAuthenticatedErrorHandler(error) || 'An unexpected error occurred');
    },
  });

  return (
    <AuthLayout isLogedIn={false}>
      <h2 className='font-semibold text-2xl mt-10'>Get Started</h2>
      <p className='text-sm mt-1'>Create an account to get started</p>
      <div className='mt-12 pb-6'>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className='flex gap-4'>
            <div className='w-full'>
              <Textfield
                id='first_name'
                label='First Name'
                required
                error={errors.first_name?.message}
                register={register}
              />
            </div>

            <div className='w-full'>
              <Textfield
                id='last_name'
                required
                label='Last Name'
                error={errors.last_name?.message}
                register={register}
              />
            </div>
          </div>
          <div className='mt-4'>
            <Textfield
              id='email'
              required
              label='Email'
              error={errors.email?.message}
              register={register}
            />
          </div>
          <div className='mt-4'>
            <label
              htmlFor={'phoneNumber'}
              className={`block font-semibold text-gray-700 text-sm mb-2`}>
              Phone Number <span className='text-red-500'>*</span>
            </label>
            <PhoneInput
              className={`w-full rounded-md border-0 placeholder:text-[#BCBCBC] py-[7px] ring-gray-300 px-4 focus:outline-none !focus:ring-secondary text-sm leading-6`}
              style={{
                border: errors?.phone?.message ? '1px solid red' : '1px solid #d1d5da',
              }}
              countryCallingCodeEditable={false}
              name='contact'
              value={getValues().phone}
              onChange={(val?: string) => setValue('phone', val ?? '')}
              defaultCountry={location.country ?? 'NG'}
              international
            />
            <p className='text-red-500 text-xs mt-2'>{errors?.phone?.message}</p>
          </div>
          <div className='mt-4'>
            <Textfield
              id='password'
              label={
                <>
                  <p>
                    Password <span className='text-red-500'>*</span>
                  </p>
                  <p className='text-[11px] font-normal !leading-tight mt-2'>
                    Passwords must be at least 8 characters and have at least one uppercase,
                    one lowercase, one number, and one symbol.
                  </p>
                </>
              }
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
          </div>
          <div className='mt-8 mb-6'>
            <div className='flex gap-2 items-center'>
              <input
                id='hasAcceptedTandC'
                type='checkbox'
                {...register('hasAcceptedTandC')}
                className='p-2 text-primary rounded focus:ring-white cursor-pointer'
              />
              <label htmlFor='hasAcceptedTandC' className='text-[11px]'>
                By checking this box, you agree to be bound by the{' '}
                <a
                  href={`/terms-of-service`}
                  target='_blank'
                  className='font-medium text-primary'
                  rel='noopener noreferrer'>
                  terms and conditions
                </a>
              </label>
            </div>
            <p className='text-red-500 text-xs mt-2'>{errors.hasAcceptedTandC?.message}</p>
          </div>
          <Button
            type='submit'
            className='w-full bg-orange-400'
            isLoading={isPending}
            disabled={!hasAcceptedTandCVal}
          >
            Create Account
          </Button>
          <p className='text-sm text-right mt-2'>
            Already have an account?{' '}
            <span
              className='font-semibold cursor-pointer text-primary'
              onClick={() => router.push('/login')}>
              Login here
            </span>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Register;
