import {LoginIllustration} from '@/app/components/LoginPage/LoginIllustration/LoginIllustration';
import {LoginFormContainer} from '@/app/components/LoginPage/LoginFormContainer/LoginFormContainer';

export const LoginPage = () => {
    return (
        <div className='grid grid-cols-2'>
            <LoginIllustration/>
            <LoginFormContainer/>
        </div>
    );
};
