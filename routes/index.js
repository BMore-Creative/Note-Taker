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
  const newSaved = (note) => {
      if (note.id == req.params.id) {
          console.log(note.id, req.params.id);
        return note = {}
      }
  }
  db.forEach((note) => {
      newSaved(note)
  });
  console.log(newSaved);
  res.json(newSaved);
});

router.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/index.html"))
);

module.exports = router;
