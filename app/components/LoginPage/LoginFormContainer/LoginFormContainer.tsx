import {LoginHeader} from '@/app/components/LoginPage/LoginFormContainer/LoginHeader/LoginHeader';
import {LoginForm} from '@/app/components/LoginPage/LoginFormContainer/LoginForm/LoginForm';

export const LoginFormContainer = () => {
    return (
        <div className='bg-white flex flex-col items-center justify-center h-screen px-8'>
            <LoginHeader/>
            <LoginForm/>
        </div>
    );
};