import { layout as alphabeticalLayout, layout } from './alphabetical';
import { layout as qwertyLayout } from './qwerty';

export const layouts = {
    alphabetical: {
        layout: alphabeticalLayout,
        type: 'predefined',
        id: 'alphabetical',
    },
    qwerty: {
        layout: qwertyLayout,
        type: 'predefined',
        id: 'qwerty',
    },
};

export const predefinedLayouts = Object.keys(layouts);

export type LayoutName = keyof typeof layouts;