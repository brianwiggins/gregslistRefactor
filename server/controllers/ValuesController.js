import express from "express";
import valueService from "../services/ValueService";

export default class ValueController {
  constructor() {
    this.router = express
      .Router()
      //NOTE  each route gets registered as a .get, .post, .put, or .delete, the first parameter of each method is a string to be concatinated onto the base url registered with the route in main. The second parameter is the method that will be run when this route is hit.
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete);
  }

  async getAll(req, res, next) {
    try {
      let data = await valueService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      let data = await valueService.create(req.body);
      res.status(201).send(data)
    } catch (e) {
      next(e);
    }
  }

  async edit(req, res, next) {
    try {
      let data = await valueService.update(req.params.id, req.body);
      res.send(data);
    } catch (e) {
      next(e);
    }
  }

  async delete(req, res, next) {
    try {
      await valueService.delete(req.params.id);
      res.send("Delete request Completed")
    } catch (e) {
      next(e);
    }
  }
}
