// Same data as notes/, plus draft: true. Pages here are built only with BUILD_DRAFTS=1 (see eleventy.config.js).
import notes from "../notes/notes.11tydata.js";
export default { ...notes, draft: true };
