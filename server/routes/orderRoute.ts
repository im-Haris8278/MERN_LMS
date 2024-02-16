import express from "express";
import { authorizeRole, isAuthenticated } from "../middleware/auth";
import {
  createOrder,
  getAllOrders,
  newPayment,
  sendStripePublishableKey,
} from "../controllers/orderController";
const orderRouter = express.Router();
<<<<<<< HEAD

orderRouter.post("/create-order", isAuthenticated, createOrder);
=======
orderRouter.post(
  "/create-order",
  updateAccessToken,
  isAuthenticated,
  createOrder
);
>>>>>>> 9687502dee394ee47103ce233e53c8a91b8ec204

orderRouter.get(
  "/get-orders",
  isAuthenticated,
  authorizeRole("admin"),
  getAllOrders
);

orderRouter.get("/payment/stripepublishablekey", sendStripePublishableKey);

orderRouter.post("/payment", isAuthenticated, newPayment);

export default orderRouter;
