import {SocialLoginProps} from '@/app/types';

export const SocialLoginButton = ({provider, onLogin}: SocialLoginProps) => {
    return (
        <button
            onClick={onLogin}
            className='bg-[#1A202C] text-[#FFFFFF] flex justify-center items-center h-12 border rounded p-4 focus:outline-none'
        >
            {provider === 'google' && <span>G</span>}
            {provider === 'facebook' && <span>F</span>}
            Ou faça login com o {provider.charAt(0).toUpperCase() + provider.slice(1)}
        </button>
    );
};
