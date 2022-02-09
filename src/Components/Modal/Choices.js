import React from "react";
import { InputChoice } from "../Style/InputChoice";

const [ChoiceWrap, ChoiceLabel, ChoiceRadio] = InputChoice();

export function Choices({ openItem, choice, changeChoices }) {
    return (
        <>
            <h3>Выбирайте:</h3>
            <ChoiceWrap>
                {openItem.choices.map((item, i) => (
                    <ChoiceLabel key={i}>
                        <ChoiceRadio
                            type="radio"
                            name="choices"
                            checked={choice === item}
                            value={item}
                            onChange={changeChoices}
                        />
                        {item}
                    </ChoiceLabel>
                ))}
            </ChoiceWrap>
        </>
    )
}