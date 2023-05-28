'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Breakpoint, up } from '@/styles/utils';

export const Wrapper = styled(motion.div)`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: ${({ theme }) => theme.variables.maxWidth + 120}px;
    padding: 32px 80px;
`;

export const Line = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0;

    ${up(Breakpoint.MD)} {
        justify-content: space-between;
        padding: 0;
    }
`;

export const Logo = styled(motion.a)`
    display: flex;
    align-items: center;
    height: 36px;
`;

export const Container = styled(motion.header)`
    position: sticky;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;

    &[data-animate='true'] {
        ${Wrapper} {
            padding: 24px 20px 8px;
        }

        ${Line} {
            padding: 16px 20px;

            &:before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                border: 1px solid ${({ theme }) => theme.colors.purple80};
                border-radius: inherit;
                pointer-events: none;
            }
        }

        ${Logo} {
            gap: 16px;
        }
    }
`;

export const Avatar = styled(motion.div)`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-radius: 50%;
    overflow: hidden;

    img {
        width: 36px;
        height: 36px;
    }
`;

export const Name = styled(motion.span)`
    color: ${({ theme }) => theme.colors.white};
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    text-transform: uppercase;

    span {
        font-weight: 300;
    }
`;

export const Menu = styled(motion.div)`
    display: none;
    gap: 32px;

    ${up(Breakpoint.MD)} {
        display: flex;
        align-items: center;
        height: 36px;
    }
`;

export const MenuItem = styled.a`
    color: ${({ theme }) => theme.colors.white};
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
`;
