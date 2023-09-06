import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { config } from 'dotenv';
import express from 'express';
import { AppModule } from './app.module';

config();

async function bootstrap() {
  const server = express();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

  console.debug(
    'process.env.FRONTEND_ORIGIN_URL: ',
    process.env.FRONTEND_ORIGIN_URL,
  );

  app.enableCors({
    origin: process.env.FRONTEND_ORIGIN_URL,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  });
  app.useGlobalPipes(new ValidationPipe());
  await app.init();
  return server;
}

module.exports = bootstrap();
