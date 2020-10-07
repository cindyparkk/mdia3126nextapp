import React from 'react';
import styled, { css } from 'styled-components';

const InputContain = styled.div`
    max-width: 384px;
    margin-bottom: 10px;
`

const InputLabel = styled.p`
    // font-size: 14px;
    font-weight: 500;
    color: #686868;
    text-transform: uppercase;
    margin-bottom: 7px;
`
const InputForm = styled.input`
    min-width: 384px;
    min-height: 45px;
    background-color: #F2F4FB;
    border-radius: 5px;
    padding-left: 22px;
    // font-size: 14px;
    border: none;
    font-weight: 500;
`

const Input = ({ label, value, type}) => {
    return <InputContain>
        <InputLabel>
            {label}
        </InputLabel>
        <InputForm value={value} type={type}>
            {/* <input type="text" value={value}></input> */}
        </InputForm>
    </InputContain>
}

Input.defaultProps = {
    label: "email",
    value: "joe@gmail.com",
    type: "text"
}

export default Input;