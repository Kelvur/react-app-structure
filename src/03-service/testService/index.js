// Service Middleware
import {get, post} from '03-service/00-middleware/fetch';
// Paths
import * as paths from './paths';
// Utils
import noop from 'utils'


export function getUrlRandomCat(callback = noop){
	return get(paths.RANDOM_CAT).then(callback);
}

export function getUrlRandomDog(callback = noop){
	return get(paths.RANDOM_DOG).then(callback);
}
