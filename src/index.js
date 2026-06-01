import { add, subtract, multiply, divide } from "./math.js";

const PORT = process.env.PORT ?? 3000;

const server = Bun.serve({
  port: PORT,
  fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === "/") {
      return Response.json({ status: "ok", message: "Bun server is running" });
    }

    if (url.pathname === "/health") {
      return Response.json({ status: "healthy" });
    }

    const a = Number(url.searchParams.get("a"));
    const b = Number(url.searchParams.get("b"));

    if (Number.isNaN(a) || Number.isNaN(b)) {
      return Response.json(
        { error: "Query params 'a' and 'b' must be valid numbers" },
        { status: 400 },
      );
    }

    switch (url.pathname) {
      case "/add":
        return Response.json({ result: add(a, b) });
      case "/subtract":
        return Response.json({ result: subtract(a, b) });
      case "/multiply":
        return Response.json({ result: multiply(a, b) });
      case "/divide":
        if (b === 0) {
          return Response.json({ error: "Cannot divide by zero" }, { status: 400 });
        }
        return Response.json({ result: divide(a, b) });
      default:
        return Response.json({ error: "Not found" }, { status: 404 });
    }
  },
});

console.log(`Server running at http://localhost:${server.port}`);
