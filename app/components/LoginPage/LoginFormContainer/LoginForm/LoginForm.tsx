import {SocialLoginButton} from '@/app/components/LoginPage/LoginFormContainer/SocialLoginButton/SocialLoginButton';
import {InputField} from "@/app/shared/InputField";

export const LoginForm = () => {
    return (
        <form className='flex flex-col gap-6'>
            <InputField
                label='E-mail'
                type='email'
                placeholder='exemplo@gmail.com'
            />
            <InputField
                label='Senha'
                type='password'
                placeholder='0123456789'/>
            <SocialLoginButton/>
        </form>
    );
};