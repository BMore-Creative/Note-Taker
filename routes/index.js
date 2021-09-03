const router = require("express").Router();
const path = require("path");
const db = require("../db/db.json");

router.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/index.html"))
);

router.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/notes.html"))
);

router.get("/api/notes", (req, res) => res.json(db));

router.post("/api/notes", (req, res) => {
  db.push(req.body);
  res.json(db);
});

router.delete("/api/notes/:id", (req, res) => {
  for (let i = 0; i < db.length; i++) {
    const newSaved = (note) => {
        if (note.id === Number(req.params.id)) {
            db.splice(i, 1)
        }
        return note
    }
    newSaved(db[i])
  }
  res.json(db);
});

router.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/index.html"))
);

module.exports = router;
