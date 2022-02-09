import React from 'react';
import { InputChoice } from "../Style/InputChoice";

const [ToppingWrap, ToppingLabel, ToppingCheckbox] = InputChoice();

export function Toppings({ toppings, checkToppings }) {
    return (
        <>
            <h3>Добавки</h3>
            <ToppingWrap>
                {toppings.map((item, i) => (
                    <ToppingLabel key={i}>
                        <ToppingCheckbox
                            type="checkbox"
                            checked={item.checked}
                            onChange={() => checkToppings(i)}
                        />
                        {item.name}
                    </ToppingLabel>
                ))}
            </ToppingWrap>
        </>
    )
}