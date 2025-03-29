import { getNotes } from './api.js';
import { displayNotes } from './ui.js';

document.addEventListener('DOMContentLoaded', async () => {
    const notes = await getNotes();
    displayNotes(notes);
});
