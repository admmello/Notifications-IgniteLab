import { Content } from './content';
import { Notification } from './notifications';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Você recebeu uma notificação de amizade.'),
      category: 'social',
      recipientId: '123',
    });

    expect(notification).toBeTruthy();
  });
});
