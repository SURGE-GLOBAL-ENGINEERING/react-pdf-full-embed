import * as R from 'ramda';
import * as P from '@surge-global-engineering/full-rpdf-primitives';

const isSvg = R.propEq('type', P.Svg);

export default isSvg;
