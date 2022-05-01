import 'dotenv/config';
import 'module-alias/register';
import PostController from '@/resources/post/post.controller';
import validateEnv from '@/utils/validateEnv';
import App from './app';

validateEnv();

const app = new App([new PostController()], Number(process.env.PORT));

app.listen();
