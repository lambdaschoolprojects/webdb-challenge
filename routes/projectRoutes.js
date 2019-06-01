const express = require('express');

const router = express.Router();
const db = require('../data/db');

router.get('/', async (req, res) => {
    try {
        const projects = await db.getProjects();
        res.json(projects);
    } catch(err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
   const { id } = req.params;
   try {
       const project = await db.getProject(id);
       if (project) return res.status(200).json(project);
       res.status(400).json({ message: "Unable to retrieve project. Have a nice day."});
   } catch(err) {
       console.log(err);
       res.status(500).json(err);
   }
});

module.exports = router;
