import { Subjects, Publisher, PaymentCreatedEvent } from '@gpbaculiok8stickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
