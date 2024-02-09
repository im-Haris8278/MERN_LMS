import express from "express";
import {
  createLayout,
  getLayoutByType,
  updateLayout,
} from "../controllers/layoutController";
import { authorizeRole, isAuthenticated } from "../middleware/auth";
import { updateAccessToken } from "../controllers/userController";

const layoutRouter = express.Router();
layoutRouter.post(
  "/create-layout",
  updateAccessToken,
  isAuthenticated,
  authorizeRole("admin"),
  createLayout
);
layoutRouter.put(
  "/update-layout",
  updateAccessToken,
  isAuthenticated,
  authorizeRole("admin"),
  updateLayout
);
layoutRouter.get("/get-layout", getLayoutByType);

export default layoutRouter;
