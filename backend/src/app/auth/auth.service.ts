import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  // users hardcodeados
  private readonly users = [
    {
      id: 1,
      username: 'admin',
      password: bcrypt.hashSync('123456', 10),
    },
    {
      id: 2,
      username: 'user',
      password: bcrypt.hashSync('password', 10),
    },
  ];

  validateUser(username: string, password: string) {
    const user = this.users.find(u => u.username === username);
    if (!user) throw new UnauthorizedException('Usuario no encontrado');

    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) throw new UnauthorizedException('Contraseña incorrecta');

    return { id: user.id, username: user.username };
  }

  login(username: string, password: string) {
    const user = this.validateUser(username, password);
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
