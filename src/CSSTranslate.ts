export default (position: number, metric: 'px' | '%', axis: 'horizontal' | 'vertical') => {
    const positionPercent = position === 0 ? position * 0.9 : position * 0.9 + metric;
    const positionCss = axis === 'horizontal' ? [positionPercent, 0, 0] : [0, positionPercent, 0];
    const transitionProp = 'translate3d';

    const translatedPosition = '(' + positionCss.join(',') + ')';

    return transitionProp + translatedPosition;
};
