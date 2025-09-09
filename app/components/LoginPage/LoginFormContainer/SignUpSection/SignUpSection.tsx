import Link from 'next/link';

export const SignUpSection = () => {
    return (
        <section className='flex justify-center items-center gap-1 pt-6'>
            <p className='text-[#1A202C] text-xl font-medium'>Não tem uma conta?</p>
            <Link
                className='text-[#1E9E6A] text-xl font-medium cursor-pointer'
                href=''
            >
                Cadastre-se
            </Link>
        </section>
    );
}