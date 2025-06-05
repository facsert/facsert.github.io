// @ts-check
import { defineConfig } from 'astro/config';

import starlight from '@astrojs/starlight';
import catppuccin from "@catppuccin/starlight";
import starlightThemeNova from 'starlight-theme-nova'

// https://astro.build/config
export default defineConfig({
    site: 'https://facsert.github.io',
    base: '/main',
	integrations: [
		starlight({
			title: 'facsert',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/facsert' }],
			plugins: [
                catppuccin({
					dark: { flavor: "macchiato", accent: "sky" },
                    light: { flavor: "latte", accent: "sky" }
				}),
				starlightThemeNova(),
            ],
			sidebar: [
				{
					label: 'Guides',
					collapsed: true,
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Reference',
					collapsed: true,
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});

