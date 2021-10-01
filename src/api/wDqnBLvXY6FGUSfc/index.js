import Endpoint from '../endpoint';
import database from '../../database/database';


/**
 * api get_languages_list
 */

class _wDqnBLvXY6FGUSfc extends Endpoint {
    constructor() {
        super('wDqnBLvXY6FGUSfc');
    }

    /**
     * returns list of available languages
     * @param app
     * @param req
     * @param res
     */
    handler(app, req, res) {
        console.log('wDqnBLvXY6FGUSfc handler ');
        const languageRepository = database.getRepository('language');
        languageRepository.listLanguage({})
                          .then(languages => res.send(languages));
    }
}


export default new _wDqnBLvXY6FGUSfc();
