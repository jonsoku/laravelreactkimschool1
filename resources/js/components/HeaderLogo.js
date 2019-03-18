import React from 'react';
import styled from 'styled-components';

const DivLogo = styled.div`
text-align:center;
`;

const Logo = styled.h1`
color: pink;
`;

export default () => (
    <DivLogo>
        <Logo>JONSOKU</Logo>
    </DivLogo>
);

