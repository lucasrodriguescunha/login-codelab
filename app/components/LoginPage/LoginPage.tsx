import {LoginIllustration} from '@/app/components/LoginPage/LoginIllustration/LoginIllustration';
import {LoginFormContainer} from '@/app/components/LoginPage/LoginFormContainer/LoginFormContainer';

export const LoginPage = () => {
    return (
        <div className='grid grid-cols-1 xs:grid-cols-1 xl:grid-cols-2 min-h-screen'>
            <div className='hidden xl:block'>
                <LoginIllustration/>
            </div>
            <LoginFormContainer/>
        </div>
    );
};
