import * as R from 'ramda';
import * as P from '@surge-global-engineering/full-rpdf-primitives';

const isPolyline = R.propEq('type', P.Polyline);

export default isPolyline;
