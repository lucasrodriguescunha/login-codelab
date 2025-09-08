import Image from 'next/image';

export const LoginIllustration = () => {
    return (
        <>
            <div className='bg-[#F3FFF2] h-screen flex items-center justify-center'>
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