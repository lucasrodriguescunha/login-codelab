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
    type: 'text' | 'email' | 'password';
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}