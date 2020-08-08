import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@gpbaculiok8stickets/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
  > {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
