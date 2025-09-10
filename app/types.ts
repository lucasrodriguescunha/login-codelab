export interface LoginFormData {
    email: string;
    password: string;
}

export interface SocialLoginProps {
    provider: 'google' | 'facebook';
    onLogin: () => void;
}

export interface InputFieldProps {
    label: string;
    type: 'email' | 'password';
    placeholder?: string;
}

export interface GoogleIconProps {
    size?: number;
    className?: string;
}

export interface LoginIllustrationProps {
    className?: string;
}