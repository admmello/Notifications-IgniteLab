import { PrismaService } from './../prisma.service';
import { Notification } from '../../../../application/entities/notifications';
import { NotificationsRepository } from '../../../../application/repositories/notifications-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaNotificationRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data: {
        id: notification.id,
        content: notification.content.value,
        category: notification.category,
        recipientId: notification.recipientId,
        readAt: notification.readAt,
        createdAt: notification.createdAt,
      },
    });
  }
}
