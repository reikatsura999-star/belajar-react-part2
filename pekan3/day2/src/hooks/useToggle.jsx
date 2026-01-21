// hooks/useToggle.js
import { useState } from "react";

export function useToggle(initial = false) {
    const [value, setValue] = useState(initial);

    const toggle = () => setValue(!value);

    return [value, toggle];
}
