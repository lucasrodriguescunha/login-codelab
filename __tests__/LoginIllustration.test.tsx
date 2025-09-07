import {render} from '@testing-library/react';
import {LoginIllustration} from '@/app/components/LoginPage/LoginIllustration/LoginIllustration';

describe('LoginIllustration', () => {
    it('should render correctly', () => {
        render(<LoginIllustration/>);
    });
});