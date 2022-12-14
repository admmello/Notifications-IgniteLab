import { PrismaNotificationRepository } from './Prisma/repositories/prisma-notifications-repository';
import { NotificationsRepository } from '../../application/repositories/notifications-repository';
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationRepository,
    },
  ],
  exports: [NotificationsRepository],
})
export class DatabaseModule {}
