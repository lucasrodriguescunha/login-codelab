import Link from 'next/link';

export const RememberMeCheckbox = () => {
    return (
        <div className='flex items-center justify-between pb-6'>
            <div className='flex items-center gap-2'>
                <input
                    type='radio'
                    name='remember-option'
                    id='remember-me'
                    className='text-[#1E9E6A] font-medium cursor-pointer'
                />
                <label
                    htmlFor='remember-me'
                    className='text-[#1A202C] text-base font-medium'
                >
                    Lembre de mim
                </label>
            </div>
            <Link
                className='text-[#1E9E6A] text-base font-medium cursor-pointer'
                href=''
            >
                Esqueceu sua senha?
            </Link>
        </div>
    );
};