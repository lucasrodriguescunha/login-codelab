'use client'

import {SocialLoginButton} from '@/app/components/LoginPage/LoginFormContainer/SocialLoginButton/SocialLoginButton';
import {EmailInput} from '@/app/components/LoginPage/LoginFormContainer/LoginForm/EmailInput';
import {PasswordInput} from '@/app/components/LoginPage/LoginFormContainer/LoginForm/PasswordInput';

export const LoginForm = () => {
    return (
        <form className='w-sm flex flex-col gap-6'>
            <EmailInput/>
            <PasswordInput/>
            <SocialLoginButton
                provider={'google'}
                onLogin={function (): void {
                    console.log(`Login realizado com com sucesso!`);
                }}/>
        </form>
    );
};