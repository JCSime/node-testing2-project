const request = require('supertest');
const db = require('../data/dbConfig');
const { testing } = require('../knexfile');
const server = require('./server');
const Printers = require('./3d_printers/3d_printers-model');

const printer1 = {make:'Creality', model:'Ender 3'}
const printer2 = {make:'Prusa', model:'MK3S+'}

beforeAll(async ()=>{
    await db.migrate.rollback()
    await db.migrate.latest()
});

beforeEach(async ()=>{
    await db('printers').truncate();
})

afterAll(async ()=>{
    await db.destroy()
})

it('correct env', ()=>{
    expect(process.env.NODE_ENV).toBe('testing')
})

describe('Printer model functions', ()=>{
    describe('create printer', ()=>{
        test('adds printer into db', async ()=>{
            let printers
            await printer1.createPrinter(printer1)
            printers = await db('3d_printers')
            expect(printers).toHaveLength(1)
        })
    })
})