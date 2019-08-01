const knex = require('knex');
const config = require('../knexfile').development;

const db = knex(config);

const getProjects = () => db('projects');

const getProject = async (id) => {
    const project = await db('projects').where({ id });
    const actions = await db('actions').where({project_id: id });
    actions.forEach(action => (action.completed = action.completed === 0 ? false : true));
    const newProject = Object.assign({}, project[0]);
    newProject.completed = newProject.completed === 0 ? false:true;
    newProject.actions = actions;

    if (newProject) return newProject;
    else return null;
}

const addProject = async project => {
    const projectId = await db('projects').insert(project);

    return projectId;
}

const addAction = async action => {
    const newActionId = await db('actions').insert(action);

    return newActionId;
}

module.exports = {
    getProjects,
    getProject,
    addAction,
    addProject
}