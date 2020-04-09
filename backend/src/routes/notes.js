const {Router } = require('express');
const router = Router();

const {getNotes,postNotes,updateNote,getNote,deleteNote} = require('../controllers/notes.controller');


router.route('/')
    .get(getNotes)
    .post(postNotes)

router.route('/:id')
    .get(getNote)
    .put(updateNote)
    .delete(deleteNote)

module.exports = router;