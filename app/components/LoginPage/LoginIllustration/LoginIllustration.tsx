import Image from 'next/image';
import {LoginIllustrationProps} from '@/app/types';

export const LoginIllustration = ({className}: LoginIllustrationProps) => {
    return (
        <div className={`bg-[#F3FFF2] h-screen flex items-center justify-center ${className || ''}`}>
            <Image
                src='/illustration.png'
                alt='Imagem de ilustração'
                width={500}
                height={420}
            />
        </div>
    );
};