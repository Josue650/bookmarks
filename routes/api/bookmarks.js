const router = require('express').Router()
const checkToken = require('../../config/checkToken')
const bookmarkCtrl = require('../../controllers/api/bookmarks')
const ensureLoggedIn = require('../../config/ensureLoggedIn')


/* api/bookmarks/:id
DELETE
destroy bookmark
*/
router.delete('/:id', checkToken, ensureLoggedIn, bookmarkCtrl.destroyBookmark, bookmarkCtrl.respondWithBookmark)
/*api/bokkmarks/:id
PUT
update bookmark
*/
router.put('/:id', checkToken, ensureLoggedIn, bookmarkCtrl.updateBookmark, bookmarkCtrl.respondWithBookmark)

/*api/bookmarks
POST
create bookmark
*/
router.post('/', checkToken, ensureLoggedIn, bookmarkCtrl.createBookmark, bookmarkCtrl.respondWithBookmark)

module.exports = router
