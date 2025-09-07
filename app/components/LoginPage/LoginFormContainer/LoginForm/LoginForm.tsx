import {SocialLoginButton} from '@/app/components/LoginPage/LoginFormContainer/SocialLoginButton/SocialLoginButton';
import {InputField} from "@/app/shared/InputField";

export const LoginForm = () => {
    return (
        <form className='flex flex-col gap-6'>
            <InputField/>
            <InputField/>
            <SocialLoginButton fullWidth/>
        </form>
    );
};