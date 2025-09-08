import {SocialLoginProps} from '@/app/types';

export const SocialLoginButton = ({provider, onLogin}: SocialLoginProps) => {
    return (
        <button
            onClick={onLogin}
            className="flex items-center justify-center gap-2 border rounded py-2 px-4 hover:bg-gray-100"
        >
            {provider === 'google' && <span>G</span>}
            {provider === 'facebook' && <span>F</span>}
            Entrar com {provider}
        </button>
    );
};