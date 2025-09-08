import {InputField} from '@/app/shared/InputField';

export const EmailInput = () => {
    return (
        <>
            <InputField
                label={'E-mail'}
                type={'email'}
                placeholder={'exemplo@gmail.com'}
            />
        </>
    );
};