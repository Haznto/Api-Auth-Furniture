'use strict';

const express = require('express');
const dataModules = require('../models/index');
const basicAuth = require('../middleware/basic')
const bearerAuth = require('../middleware/bearer')
const capabilities = require('../middleware/acl')
const router = express.Router();
const modelParam = require('../middleware/modelParam')

router.param('model', modelParam);

router.get('/:model',bearerAuth,handleGetAll);
router.get('/:model/:id',bearerAuth, handleGetOne);
router.post('/:model',bearerAuth,capabilities('create'), handleCreate);
router.put('/:model/:id',bearerAuth,capabilities('update'), handleUpdate);
router.delete('/:model/:id',bearerAuth,capabilities('delete'), handleDelete);

async function handleGetAll(req, res) {
  let allRecords = await req.model.get();
  res.status(200).json(allRecords);
}

async function handleGetOne(req, res) {
  const id = req.params.id;
  let theRecord = await req.model.get(id)
  res.status(200).json(theRecord);
}

async function handleCreate(req, res) {
  let obj = req.body;
  let newRecord = await req.model.create(obj);
  res.status(201).json(newRecord);
}

async function handleUpdate(req, res) {
  const id = req.params.id;
  const obj = req.body;
  let updatedRecord = await req.model.update(id, obj)
  res.status(202).json(updatedRecord);
}

async function handleDelete(req, res) {
  let id = req.params.id;
  let deletedRecord = await req.model.delete(id);
  res.status(200).json(deletedRecord);
}


module.exports = router;