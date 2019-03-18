import React from 'react';
import styled from 'styled-components';
import HeaderLogo from './HeaderLogo';
import {Link} from "react-router-dom";

const Ul = styled.ul`
display:grid;
grid-auto-flow: column;
grid-template-columns: repeat(4, 1fr);
justify-items: center;
`;
const Li = styled.li`
`;
const SLink = styled(Link)`
display: block;
padding: 40px;
`;



export default () => (
    <header>
        <HeaderLogo />
        <Ul>
            <Li>
                <SLink to="/">Home</SLink>
            </Li>
            <Li>
                <SLink to="/notices">Notice</SLink>
            </Li>
            <Li>
                <SLink to="/applies">Apply</SLink>
            </Li>
            <Li>
                <SLink to="/qnas">Qna</SLink>
            </Li>
        </Ul>
    </header>
);

