import styles from './Materialbasic.module.css';
import {css} from '@emotion/react'
import { Button } from '@mui/material';
/** @jsxImportSource @emotion/react  */

export default function MaterialBasic() {

    const font = css`
        text-transform: none;
        `;

    return (
        <>
            <Button variant='text' color='secondary' css={font}>text</Button>
            <Button variant='contained'>contained</Button>
            <Button variant='outlined'>outlined</Button>
        </>
    );
}