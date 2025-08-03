import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as sessionFileStore from 'session-file-store';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  // Instalar para la sesion:
  // npm install express-session session-file-store @types/express-session
  // Setear la sesion
  const FileStore = sessionFileStore(session); // Initialize FileStore
  app.use(
    session({
      secret: 'secreto-seguro',
      resave: false, // Don't save session if unmodified
      saveUninitialized: false, // Don't save uninitialized sessions
      store: new FileStore({
        path: './sessions', // Directorio para guardar los archivos de sesion
        ttl: 3600, // tiempo de vida de las sesiones
      }),
      cookie: {
        maxAge: 3600000, // Cookie max age in milliseconds (e.g., 1 hour)
        secure: process.env.NODE_ENV === 'production', // Usar cookies seguras en prod
        httpOnly: true, // Prevent client-side JavaScript access
      },
    }),
  );

  // Setear el motor de renderizado del servidor
  // npm install ejs

  app.set('view engine', 'ejs');
  // Donde van a estar los archivos de vista
  app.setBaseViewsDir(path.join(__dirname, '..', 'views'));
  // Donde van a estar los archivos publicos
  app.useStaticAssets(path.join(__dirname, '..', 'public'));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

