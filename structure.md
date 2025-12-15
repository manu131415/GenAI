root/
│
├── frontend/ (Next.js App)
│   ├── app/
│   ├── components/
│   ├── pages/api/
│   │     ├── generateContent.ts   (calls Node backend worker)
│   │     └── seoAudit.ts          (fetch SEO tool API data)
│   └── utils/
│
├── backend/ (Node.js)
│   ├── langchain/
│   │     ├── pipelines/
│   │     │     ├── blogGenerator.js
│   │     │     ├── imageGenerator.js
│   │     │     └── seoEnhancer.js
│   │     ├── models/
│   │     │     ├── textModel.js (Llama, Mistral, Gemma, Qwen)
│   │     │     └── imageModel.js (Stable Diffusion, Flux)
│   │     └── index.js
│   ├── workers/
│   │     └── contentWorker.js     (queued job processor)
│   ├── routes/
│   │     └── generate.js          (POST endpoint)
│   ├── utils/
│   │     ├── promptTemplates.js
│   │     └── seoTools.js
│   └── server.js
│
└── database/
├── prisma/ or mongodb/
└── redis/ (job queue)