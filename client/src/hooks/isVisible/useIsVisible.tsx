import React, { useEffect, useState } from 'react';

const useIsVisible = (el: HTMLElement) => {

    const [isVisible, setIsVisible] = useState<boolean>(false);

    const rect = el.getBoundingClientRect();
    const vWidth = window.innerWidth || document.documentElement.clientWidth;
    const vHeight = window.innerHeight || document.documentElement.clientHeight;
    const efp = function (x: number, y: number) { return document.elementFromPoint(x, y); };

    useEffect(() => {
        // Return false if it's not in the viewport
        if (rect.right < 0 || rect.bottom < 0 || rect.left > vWidth || rect.top > vHeight) {
            return setIsVisible(false);
        }

        // Return true if any of its four corners are visible
        if (el.contains(efp(rect.left, rect.top)) || el.contains(efp(rect.right, rect.top)) || el.contains(efp(rect.right, rect.bottom)) || el.contains(efp(rect.left, rect.bottom))) {
            return setIsVisible(true);
        }
    });

    return isVisible;
};

export default useIsVisible;