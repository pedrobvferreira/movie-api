import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  private readonly logger = new Logger(LoggingMiddleware.name);

  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl } = req;
    const startDate = Date.now();

    res.on('finish', () => {
        const duration = Date.now() - startDate;
        const {statusCode } = res;
        // Log the request information
        this.logger.log(`${method} ${originalUrl} - ${statusCode} - ${duration}ms`);
    });

    next();
  }
}