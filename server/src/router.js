import { Router } from "express";

import { sendMailController } from "./mail.controller.js";

const router = Router();

router.post("/mail", sendMailController);

export default router;
