import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import styled from 'styled-components';

const ErrMsg = styled.span`
color: red;
font-style: italic;
`

const Error = ({err}) => {

    return (
       <>
            <Toast>
            <ToastHeader>
                Ошибка: <ErrMsg>{err}</ErrMsg>
            </ToastHeader>
            <ToastBody>
                Что-то пошло не так на сервере
            </ToastBody>
            </Toast>
       </>
    )
}
export default Error;
