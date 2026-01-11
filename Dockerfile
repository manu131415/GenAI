FROM node:18

WORKDIR /app

# Backend
COPY backend ./backend
RUN cd backend && npm install

# Frontend
COPY frontend ./frontend
RUN cd frontend && npm install && npm run build

# Install nginx
RUN apt-get update && apt-get install -y nginx

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 7860

CMD ["sh", "-c", "node backend/index.js & nginx -g 'daemon off;'"]
