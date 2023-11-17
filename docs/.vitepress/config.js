const path = require('path')

module.exports = {
    title: 'VancedVue',
    description: 'Fully styled and customizable components for Vue 3',
    base: '/vancedvue/',
    head: [['link', { rel: 'icon', href: '/vancedvue/favicon.ico' }]],
    themeConfig: {
        repo: 'https://github.com/suralabs/vancedvue',
        logo: { light: '/logo-light.png', dark: '/logo-dark.png', alt: 'VancedVue Logo' },
        siteTitle: '',
        socialLinks: [
            {icon: 'github', link: 'https://github.com/suralabs/vancedvue'}
        ],
        search: {
            provider: 'local'
        },
        sidebar: [
            {
                text: 'Getting Started',
                collapsed: false,
                items: [
                    {text: 'Introduction', link: '/'},
                    {text: 'Installation', link: '/getting-started/installation'},
                    {text: 'Theming', link: '/getting-started/theming'},
                ],
            },
            {
                text: 'Elements',
                collapsed: false,
                items: [
                    {text: 'Accordion', link: '/elements/accordion'},
                    {text: 'Alert', link: '/elements/alert'},
                    {text: 'Avatar', link: '/elements/avatar'},
                    {text: 'Badge', link: '/elements/badge'},
                    {text: 'Button', link: '/elements/button'},
                    {text: 'Dropdown', link: '/elements/dropdown'},
                    {text: 'Icon', link: '/elements/icon'},
                    {text: 'Kbd', link: '/elements/kbd'},
                ],
            },
            {
                text: 'Forms',
                collapsed: false,
                items: [
                    {text: 'Input', link: '/forms/input'},
                    {text: 'Textarea', link: '/forms/textarea'},
                    {text: 'Select', link: '/forms/select'},
                    {text: 'Select Menu', link: '/forms/select-menu'},
                    {text: 'Checkbox', link: '/forms/checkbox'},
                    {text: 'Radio', link: '/forms/radio'},
                    {text: 'Toggle', link: '/forms/toggle'},
                    {text: 'Range', link: '/forms/range'},
                    {text: 'Form Group', link: '/forms/form-group'},
                    {text: 'Form', link: '/forms/form'},
                ],
            },
            {
                text: 'Data',
                collapsed: false,
                items: [
                    {text: 'Table', link: '/data/table'},
                ],
            },
            {
                text: 'Overlays',
                collapsed: false,
                items: [
                    {text: 'Modal', link: '/overlays/modal'},
                    {text: 'Popover', link: '/overlays/popover'},
                    {text: 'Notification', link: '/overlays/notification'},
                ],
            },
            {
                text: 'Layout',
                collapsed: false,
                items: [
                    {text: 'Card', link: '/layout/card'}
                ],
            }
        ],
    },
    vite: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, '../../src'),
                '#constants': path.resolve(__dirname, '../../src/constants'),
                'vancedvue': path.resolve(__dirname, '../../src'),
            },
            dedupe: ['vue'], // avoid error when using dependencies that also use Vue
        }
    }
}
