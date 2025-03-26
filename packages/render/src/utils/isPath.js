import * as R from 'ramda';
import * as P from '@surge-global-engineering/full-rpdf-primitives';

const isPath = R.propEq('type', P.Path);

export default isPath;
