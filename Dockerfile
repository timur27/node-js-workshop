FROM node:8
EXPOSE 8080
WORKDIR /c/Users/TKA/WebstormProjects/nodejs-train
COPY . .
ENV NODE_ENV=production
RUN npm install
CMD ["npm", "prod"]
