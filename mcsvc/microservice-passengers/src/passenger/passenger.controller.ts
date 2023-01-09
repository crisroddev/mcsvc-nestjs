import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PasssengerMSG } from './commons/constants';
import { PassengerDTO } from './dto/passenger.dto';
import { PassengerService } from './passenger.service';

@Controller()
export class PassengerController {
  constructor(private readonly passengerService: PassengerService) {}

  @MessagePattern(PasssengerMSG.CREATE)
  create(@Payload() passengerDTO: PassengerDTO) {
    return this.passengerService.create(passengerDTO);
  }

  @MessagePattern(PasssengerMSG.FIND_ALL)
  getAll() {
    return this.passengerService.getAll();
  }

  @MessagePattern(PasssengerMSG.FIND_ONE)
  get(@Payload() id: string) {
    return this.passengerService.get(id);
  }

  @MessagePattern(PasssengerMSG.UPDATE)
  update(@Payload() id: string, payload) {
    return this.passengerService.update(payload.id, payload.passengerDTO);
  }

  @MessagePattern(PasssengerMSG.DELETE)
  delete(@Payload() id: string) {
    return this.passengerService.delete(id);
  }
}
