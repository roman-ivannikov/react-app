import React, { useContext } from 'react';
import { InputChoice } from "../Style/InputChoice";
import { ContextItem } from '../Functions/context';

const [ToppingWrap, ToppingLabel, ToppingCheckbox] = InputChoice();

export function Toppings() {

    const { toppings: { toppings, checkToppings } } = useContext(ContextItem);

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