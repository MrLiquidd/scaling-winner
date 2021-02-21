const Pool = require('pg').Pool;
const { conn } = require('../config')

const pool = new Pool(conn);
const queryStrings = {
    selectAll: 'SELECT * FROM "ruslets" ORDER BY "id"',
    select: 'SELECT * FROM "ruslets" WHERE "id" = $1',
    insert: 'INSERT INTO "ruslets"("ent_text"VALUES ($1) RETURNING *',
    update: 'UPDATE "ruslets" SET "ent_text" = $1, WHERE "id" = $1 ',
    delete: 'DELETE FROM "ruslets" WHERE "id" = $1'
}

async function getAll() {
    const query = await pool.query(queryStrings.selectAll);
    return query.rows;
}

async function get(id) {
    const query = await pool.query(
        queryStrings.select,
        [id]);
    if (query.rows.length < 1) {
        return null;
    }
    return query.rows[0];
}

async function post(rssItem) {
    const query = await pool.query(
        queryStrings.insert,
        [rssItem.source, rssItem.title, rssItem.link, rssItem.date]);
    if (query.rows.length < 1) {
        return null;
    }
    return query.rows[0];
}

async function put(id, rssItem) {
    const query = await pool.query(
        queryStrings.update,
        [rssItem.source, rssItem.title, rssItem.link, rssItem.date, id]);
    if (query.rows.length < 1) {
        return null;
    }
    return query.rows[0];
}

async function remove(id) {
    const query = await pool.query(
        queryStrings.delete,
        [id]);
    if (query.rows.length < 1) {
        return null;
    }
    return query.rows[0];
}

module.exports = { getAll, get, post, put, remove }