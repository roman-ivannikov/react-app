import styled from "styled-components";

const ChoiceWrap = styled.div`
    max-width: 500px;
    margin: 0 auto;
    column-count: 2;
    column-gap: 15px;
`;

const ChoiceLabel = styled.label`
    cursor: pointer;
    display: block;
`;

const ChoiceInput = styled.input`
    cursor: pointer;
    margin-right: 5px;
`;

export function InputChoice() {
    return [ChoiceWrap, ChoiceLabel, ChoiceInput];
}