import { useEffect } from "react";

export function useTitle(title) {
    const newTitle = title ? title : 'mrDonalds';
    useEffect(() => document.title = newTitle, [newTitle]);
}
    
