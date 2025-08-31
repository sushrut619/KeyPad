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
export type LayoutName = keyof typeof layouts;

export const getLayout = (name: LayoutName) => layouts[name].layout;