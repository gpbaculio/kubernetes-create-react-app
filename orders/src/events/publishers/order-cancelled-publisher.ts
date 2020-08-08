import { Subjects, Publisher, OrderCancelledEvent } from '@gpbaculiok8stickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
