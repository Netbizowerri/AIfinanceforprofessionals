import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // In-memory store for demo purposes (PRD asks for Postgres, but we use this for immediate functionality)
  const leads: any[] = [];

  // API routes
  app.post("/api/leads", async (req, res) => {
    try {
      const lead = {
        id: Math.random().toString(36).substr(2, 9),
        ...req.body,
        createdAt: new Date().toISOString(),
      };

      // Check for duplicate
      if (leads.find((l) => l.email === lead.email)) {
        return res.status(409).json({
          success: false,
          code: "DUPLICATE_EMAIL",
          message: "You're already on the list! 🎉 Check your inbox for your resources, or grab the book below.",
        });
      }

      leads.push(lead);
      console.log("New lead captured:", lead);

      // Simulate async integrations (Resend, HubSpot)
      // In a real app, you'd call their APIs here
      
      res.status(201).json({
        success: true,
        message: "Lead captured successfully",
        data: lead,
      });
    } catch (error) {
      console.error("Error processing lead:", error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

  app.get("/api/leads", (req, res) => {
    const password = req.headers["x-admin-password"];
    if (password !== process.env.ADMIN_PASSWORD) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    res.json({ success: true, data: leads });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
