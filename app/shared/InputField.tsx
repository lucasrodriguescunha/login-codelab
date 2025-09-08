import {InputFieldProps} from '@/app/types';

export const InputField = ({label, type, placeholder}: InputFieldProps) => {
    return (
        <div className='w-full flex flex-col gap-1'>
            <label className='text-sm font-medium'>{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                className='bg-[#F7FAFC] w-full border rounded p-2 focus:outline-none focus:ring-2'
            />
        </div>
    );
};