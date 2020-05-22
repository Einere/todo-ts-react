import * as React from 'react';
import {FunctionComponent} from 'react';
import FooterStyle from './Footer.style';

export const Footer: FunctionComponent = function () {
    const copyright = "Copyright 2020. Einere. All right reserved.";

    return (
        <FooterStyle>{copyright}</FooterStyle>
    );
};
