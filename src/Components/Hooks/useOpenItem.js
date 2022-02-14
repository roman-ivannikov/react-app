import { useState } from 'react';
import { useTitle } from './useTitle';

export function useOpenItem() {
    const [openItem, setOpenItem] = useState(null);

    useTitle(openItem ? openItem.name : undefined);

    return { openItem, setOpenItem };
}