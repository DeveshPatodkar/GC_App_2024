import { Request, Response } from "express";
import { sampleService } from "../service/sampleService";

/***
 * @route POST /api/v1/sample/sum
 */
export function sampleController(req: Request, res: Response) {
  const a = req.body.a;
  const b = req.body.b;

  const sum = sampleService(a, b);

  console.log("sampleController");
  res.status(200).json({ sum });
}
