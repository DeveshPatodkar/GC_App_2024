import { NextFunction, Request, Response } from "express";

export function sampleMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log("sampleMiddleware");
  next();
}
