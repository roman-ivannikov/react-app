import React, { useContext } from "react";
import { InputChoice } from "../Style/InputChoice";
import { Context, ContextItem } from "../Functions/context";

const [ChoiceWrap, ChoiceLabel, ChoiceRadio] = InputChoice();

export function Choices() {

    const { choices: { choice, changeChoices } } = useContext(ContextItem);
    const { openItem: { openItem } } = useContext(Context);

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