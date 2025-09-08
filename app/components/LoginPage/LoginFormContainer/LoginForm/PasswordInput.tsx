import {InputField} from '@/app/shared/InputField';

export const PasswordInput = () => {
    return (
        <>
            <InputField
                label={'Senha'}
                type={'password'}
                placeholder={'0123456789'}
            />
        </>
    );
};