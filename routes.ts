import { Router, Request, Response } from "express";

export function setupRoutes(router: Router): void {
	router.get("/", (req: Request, resp: Response) => {
		resp.send
	})
}