// ActionCreators
import { setCatUrl } from '02-actions/cat/ActionCreators'
// Service
import * as service from '03-service/cat'


export const getRandomCatUrl = () => dispatch => {
	service.getRandomCatUrl(response => dispatch(setCatUrl(response.file)));
}
