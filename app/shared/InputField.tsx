import {InputFieldProps} from '@/app/types';

export const InputField = ({label, type, placeholder}: InputFieldProps) => {
    return (
        <div className='flex flex-col gap-1'>
            <label className='text-sm font-medium'>{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                className='border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
        </div>
    );
};