import { CLASSPREFIX } from './constants';

export const defaultConfig = {
    classPrefix: CLASSPREFIX,
    defClassName: 'tooltip-box',
    connectorClassName: 'tooltip-connectors',
    className: '',
    row: {
        margin: 0
    },
    content: {
        spacing: 5,
        iconContainerSize: 10,
        iconScale: 1,
        iconShape: 'circle',
        iconColor: '#ff0000',
        rowMargin: '0px',
        margin: 10,
        separator: ':',
        className: 'tooltip-content-container',
        parentClassName: 'tooltip-content-parent-container'
    },
    arrow: {
        size: 10,
        disabled: false,
        defClassName: 'tooltip-arrow',
        className: '',
        color: 'rgba(195,195,195,0.85)'
    }
};
