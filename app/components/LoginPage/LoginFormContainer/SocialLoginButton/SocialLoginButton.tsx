import {SocialLoginProps} from '@/app/types';
import {GoogleIcon} from '@/app/shared/icons/GoogleIcon';

export const SocialLoginButton = ({provider, onLogin}: SocialLoginProps) => {
    return (
        <button
            onClick={onLogin}
            className='bg-[#1A202C] text-[#FFFFFF] text-base md:text-lg font-semibold flex justify-center items-center gap-2 h-12 border rounded p-4 focus:outline-none cursor-pointer'
        >
            {provider === 'google' && <GoogleIcon size={20}/>}
            {provider === 'facebook' && <span>F</span>}
            Ou faça login com o {provider.charAt(0).toUpperCase() + provider.slice(1)}
        </button>
    );
};
