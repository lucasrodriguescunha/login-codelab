import {render, screen} from '@testing-library/react';
import {LoginIllustration} from '@/app/components/LoginPage/LoginIllustration/LoginIllustration';

describe('LoginIllustration', () => {
    it('should render correctly', () => {
        render(<LoginIllustration/>);
    });

    it('should render the illustration image with correct attributes', () => {
        render(<LoginIllustration/>);

        const image = screen.getByAltText('Imagem de ilustração');
        expect(image).toBeInTheDocument();
        // O Next.js Image component otimiza o src, então verificamos se contém a imagem original
        expect(image).toHaveAttribute('src');
        expect(image.getAttribute('src')).toContain('illustration.png');
        expect(image).toHaveAttribute('width', '500');
        expect(image).toHaveAttribute('height', '420');
    });

    it('should have the correct container styling', () => {
        render(<LoginIllustration/>);

        const container = screen.getByAltText('Imagem de ilustração').parentElement;
        expect(container).toHaveClass('bg-[#F3FFF2]');
        expect(container).toHaveClass('min-h-screen');
        expect(container).toHaveClass('flex');
        expect(container).toHaveClass('items-center');
        expect(container).toHaveClass('justify-center');
    });

    it('should render Next.js Image component', () => {
        render(<LoginIllustration/>);

        const image = screen.getByAltText('Imagem de ilustração');
        // Verifica se é um elemento img (Next.js Image renderiza como img)
        expect(image.tagName).toBe('IMG');
    });
});