const knex = require('knex');
const config = require('../knexfile').development;

const db = knex(config);

const getProjects = () => db('projects');
const getProject = async (id) => {
    const project = await db('projects').where({ id });
    const actions = await db('actions').where({project_id: id });
    const newProject = Object.assign({}, project[0]);
    newProject.completed = newProject.completed === 0 ? false:true;
    newProject.actions = actions;

    if (newProject) return newProject;
    else return null;
}

module.exports = {
    getProjects,
    getProject
}