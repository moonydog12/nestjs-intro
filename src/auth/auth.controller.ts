import { Controller } from '@nestjs/common';
import { AuthService } from './providers/auth.service';

@Controller('auth')
export class AuthController {
  /**
   * Injecting Auth service
   */
  constructor(private readonly authService: AuthService) {}
}
