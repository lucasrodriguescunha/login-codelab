import {InputFieldProps} from '@/app/types';

export const InputField = ({label, type, placeholder}: InputFieldProps) => {
    return (
        <div className='flex flex-col gap-2'>
            <label className='text-[#1A202C] text-sm md:text-lg font-normal'>{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                className='bg-[#F7FAFC] h-12 border border-[#E8E8E8] rounded p-4 focus:outline-none focus:border-[#1E9E6A]'
            />
        </div>
    );
};