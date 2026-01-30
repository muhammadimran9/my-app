'use client';

import { useEffect } from 'react';

/**
 * ThemeEnforcer component
 * This component ensures that the website adheres to the requested theme rules:
 * - On light theme: Background must be white, text must be black.
 * - It "compels" these styles by applying them to the document body and root.
 */
export default function ThemeEnforcer() {
  useEffect(() => {
    const enforceTheme = () => {
      const isDark = document.documentElement.classList.contains('dark');
      
      if (!isDark) {
        // Compel light theme styles
        document.body.style.backgroundColor = '#ffffff';
        document.body.style.color = '#000000';
        
        // Find all sections and ensure they have white background if they are supposed to
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
          // Only override if it doesn't have a specific dark background class that we want to keep
          // or if it's one of the main content sections.
          if (!section.classList.contains('dark:bg-slate-800') && !section.classList.contains('dark:bg-neutral-900')) {
             // section.style.backgroundColor = '#ffffff';
          }
        });
      } else {
        // Reset inline styles to allow CSS classes to take over in dark mode
        document.body.style.backgroundColor = '';
        document.body.style.color = '';
      }
    };

    // Run initially
    enforceTheme();

    // Set up a MutationObserver to watch for class changes on documentElement (theme toggles)
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          enforceTheme();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return null; // This component doesn't render anything
}
