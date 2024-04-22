import authenticated from '@utils/authentication/authenticated';
import { POST as post } from './post';
import { GET } from './get';

const POST = authenticated(post);

export { POST, GET };
