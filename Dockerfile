# ==============================
# Stage 1: Build Frontend
# ==============================
FROM node:20 AS frontend-build

WORKDIR /app/frontend

# Copy frontend package files first
COPY frontend/package*.json ./
RUN npm install

# Copy all frontend source
COPY frontend/ ./
RUN npm run build

# ==============================
# Stage 2: Build Backend
# ==============================
FROM python:3.12-slim AS backend-build

WORKDIR /app

# Copy backend requirements and install
COPY backend/requirements.txt ./backend/requirements.txt
RUN pip install --no-cache-dir -r backend/requirements.txt

# Copy backend and ai-service code
COPY backend/ ./backend/
COPY ai-service/ ./ai-service/

# ==============================
# Stage 3: Production Image
# ==============================
FROM tiangolo/uvicorn-gunicorn-fastapi:python3.12

WORKDIR /app

# Copy backend and ai-service from build stage
COPY --from=backend-build /app/backend /app/backend
COPY --from=backend-build /app/ai-service /app/ai-service

# Copy frontend build (Next.js static build)
COPY --from=frontend-build /app/frontend/.next /app/frontend/.next
COPY --from=frontend-build /app/frontend/public /app/frontend/public

# Expose port
EXPOSE 80

# Start FastAPI
CMD ["uvicorn", "backend.main:app", "--host", "0.0.0.0", "--port", "80"]
