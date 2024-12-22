import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const defaultLocale = 'fr' as const;
export const defaultTimeZone = 'Europe/Paris' as const;
export const locales = [defaultLocale, 'en'] as const;

export const navigation = defineRouting({
    locales,
    defaultLocale,
    localePrefix: 'always',
});

export const { Link, redirect, usePathname, useRouter,getPathname } = createNavigation(navigation);

