'use client';

import styled from 'styled-components';

import { Breakpoint, up } from '@/shared/styles';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-bottom: 20px;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    color: ${({ theme }) => theme.colors.gray};
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;

    ${up(Breakpoint.MD)} {
        font-size: 16px;
    }
`;

export const Title = styled.span`
    color: ${({ theme }) => theme.colors.white};
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;

    ${up(Breakpoint.MD)} {
        font-size: 24px;
        line-height: 32px;
    }
`;

export const Body = styled.div`
    color: ${({ theme }) => theme.colors.white};
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
`;

export const Footer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
`;

export const Link = styled.a`
    display: flex;
    color: ${({ theme }) => theme.colors.white};
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
`;

export const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    color: ${({ theme }) => theme.colors.gray80};
    background: ${({ theme }) => theme.colors.white};
    border-radius: 50%;
    margin-right: 8px;
`;

export const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    ${up(Breakpoint.MD)} {
        gap: 10px;
    }
`;

export const Tag = styled.span`
    color: ${({ theme }) => theme.colors.white};
    font-size: 14px;
    font-weight: 500;
    line-height: 40px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 30px;
    padding: 0 12px;

    ${up(Breakpoint.MD)} {
        font-size: 16px;
    }
`;