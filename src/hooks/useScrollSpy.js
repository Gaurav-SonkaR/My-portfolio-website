import React, { useState, useEffect } from 'react';

export const useScrollSpy = (ids, offset = 100) => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const listener = () => {
      const scroll = window.scrollY;
      for (const id of ids) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop - offset;
          const bottom = top + element.offsetHeight;
          if (scroll >= top && scroll < bottom) {
            setActiveId(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', listener);
    return () => window.removeEventListener('scroll', listener);
  }, [ids, offset]);

  return activeId;
};