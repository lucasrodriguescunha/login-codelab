import Image from 'next/image';

export const LoginIllustration = () => {
    return (
        <>
            <div className='bg-[var(--secondary-color)] h-screen flex items-center justify-center'>
                <Image
                    className='object-center'
                    src='/illustration.png'
                    alt='Imagem de ilustração'
                    width={500}
                    height={420}
                />
            </div>
        </>
    );
};