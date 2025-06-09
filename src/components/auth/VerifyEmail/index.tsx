'use client';

import { toast } from 'react-toastify';
import OtpInput from 'react-otp-input';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { verifyEmailApi, resendTokenApi } from '@/service/api/userApi';
import { unAuthenticatedErrorHandler } from '@/service/axios/errorHandler';
import AuthLayout from '@/components/Baselayout/Layout/AuthLayout';
import { Button } from '@/components/ui/button';
import { setCredentials } from '@/store/slices/userSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store';

const VerifyEmail = () => {
  const [otp, setOtp] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  useEffect(() => {
    const userEmail = localStorage.getItem('nairazo_v_email');
    if (!userEmail) {
      router.push('/login');
    } else {
      setEmail(userEmail);
    }
  }, []);

  const { mutate: handleVerifyEmail, isPending } = useMutation({
    mutationFn: verifyEmailApi,
    onSuccess: ({ data }) => {
      toast.success(data.message);
      dispatch(
        setCredentials({
          token: data?.token,
          user: data?.user,
        })
      );
      localStorage.removeItem('nairazo_v_email');

      setTimeout(() => {
        router.push('/');
      }, 1000);
    },
    onError: (error) => {
      toast.error(unAuthenticatedErrorHandler(error));
    },
  });

  const { mutate: handleResendToken, isPending: isResendingToken, } = useMutation({
    mutationFn: resendTokenApi,
    onSuccess: ({ message }) => {
      toast.success(message);
    },
    onError: (error) => {
      toast.error(unAuthenticatedErrorHandler(error));
    },
  });

  return (
    <>
      <AuthLayout isLogedIn={false}>
        <div className='container'>
          <div className='mx-auto pt-10 w-fit'>
            <img src='/Image/otp.jpg' alt='OTP' className='mx-auto h-[250px]' />{' '}
            <div className=''>
              <h2 className='font-semibold text-[30px] text-center'>OTP Verification</h2>
              <p className='text-sm text-center'>We sent a 4 digit code to your email address</p>
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                inputType='number'
                shouldAutoFocus
                containerStyle='flex justify-between gap-2 mt-10'
                renderInput={(props) => (
                  <input
                    {...props}
                    type='number'
                    className='block text-center border  rounded-lg font-semibold !w-[60px] h-[60px] border-gray-300  focus:outline-none focus:ring-primary focus:border-orange-400 disabled:cursor-not-allowed disabled:bg-gray-100'
                  />
                )}
              />

              <Button
                className='mt-14 w-full bg-orange-400'
                isLoading={isPending}
                disabled={otp.length < 4}
                onClick={() =>
                  handleVerifyEmail({
                    email: email || (localStorage.getItem('nairazo_v_email') as string),
                    code: otp,
                  })
                }
              >
                Verify
              </Button>
              {isResendingToken ? (
                <p className='text-center text-xs mt-2'>Resending...</p>
              ) : (
                <p className='text-center text-xs mt-5'>
                  Didn&apos;t get OTP?{' '}
                  <span
                    className='text-primary font-bold cursor-pointer'
                    onClick={() =>
                      handleResendToken({
                        email: email || (localStorage.getItem('nairazo_v_email') as string),
                      })
                    }>
                    Resend
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
      </AuthLayout>
    </>
  );
};

export default VerifyEmail;
