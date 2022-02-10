import { useState } from 'react';

export function useChoices(openItem) {

    const readyChoice = openItem.choice ? openItem.choice : null;

    const [choice, setChoice] = useState(readyChoice);

    const changeChoices = e => {
        setChoice(e.target.value);
    }

    return {choice, changeChoices};
}