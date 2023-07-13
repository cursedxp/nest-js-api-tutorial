import { Injectable } from '@nestjs/common';

@Injectable() //Decorator that marks a class as a provider.
export class AuthService {
  signup() {
    return { msg: 'Ihave signed up' };
  }
  signin() {
    return { msg: 'Ihave signed in' };
  }
}
