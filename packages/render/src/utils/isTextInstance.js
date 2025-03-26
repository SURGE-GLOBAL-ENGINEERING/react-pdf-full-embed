import * as R from 'ramda';
import * as P from '@surge-global-engineering/full-rpdf-primitives';

const isTextInstance = R.propEq('type', P.TextInstance);

export default isTextInstance;
