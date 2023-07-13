import { Injectable } from '@nestjs/common';
import { User, Bookmark } from '@prisma/client';

@Injectable() //Decorator that marks a class as a provider.
export class AuthService {
  signup() {
    return { msg: 'I have signed up' };
  }
  signin() {
    return { msg: 'I have signed in' };
  }
}
