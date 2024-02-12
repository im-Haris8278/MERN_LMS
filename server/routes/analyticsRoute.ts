import express from "express";
import {
  getAnalyticsCourses,
  getAnalyticsOrders,
  getAnalyticsUsers,
} from "../controllers/analyticsController";
import { authorizeRole, isAuthenticated } from "../middleware/auth";
import { updateAccessToken } from "../controllers/userController";

const analyticsRouter = express.Router();
analyticsRouter.get(
  "/get-users-analytics",
  updateAccessToken,
  isAuthenticated,
  authorizeRole("admin"),
  getAnalyticsUsers
);
analyticsRouter.get(
  "/get-courses-analytics",
  updateAccessToken,
  isAuthenticated,
  authorizeRole("admin"),
  getAnalyticsCourses
);
analyticsRouter.get(
  "/get-orders-analytics",
  updateAccessToken,
  isAuthenticated,
  authorizeRole("admin"),
  getAnalyticsOrders
);

export default analyticsRouter;
