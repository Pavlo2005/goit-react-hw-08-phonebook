import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: ${p => p.theme.spacing(4)};
`

export const DeleteButton = styled.button`
    width: 120px;
    height: 36px;
    cursor: pointer;
    border-radius: 10px;
    background-color: ${p => p.theme.colors.delete};
    box-shadow: 5px 5px 10px ${p => p.theme.colors.grayShadow};
`