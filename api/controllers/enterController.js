const Pool = require('pg').Pool;
const { conn } = require('../config')

const pool = new Pool(conn);
const queryStrings = {
    selectAll: 'SELECT * FROM "enter" ORDER BY "id"',
    select: 'SELECT * FROM "enter" WHERE "id" = $1',
    insert: 'INSERT INTO "enter"("ent_text") VALUES ($1) RETURNING *',
    update: 'UPDATE "enter" SET "ent_text" = $1 WHERE "id" = $2 RETURNING *',
    delete: 'DELETE FROM "enter" WHERE "id" = $1 RETURNING *'
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

async function post(text) {
    const query = await pool.query(
        queryStrings.insert,
        [text.ent_text]);
    if (query.rows.length < 1) {
        return null;
    }
    return query.rows[0];
}

async function put(id, text) {
    const query = await pool.query(
        queryStrings.update,
        [text.ent_text, id]);
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