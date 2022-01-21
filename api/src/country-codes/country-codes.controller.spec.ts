import { Test, TestingModule } from '@nestjs/testing';
import { CountryCodesController } from './country-codes.controller';
import { CountryCodesService } from './country-codes.service';
import { CountryCodeDto } from './dto/country-code.dto';

describe('CountryCodesController', () => {
  let controller: CountryCodesController;
  let service: CountryCodesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CountryCodesController],
      providers: [CountryCodesService],
    }).compile();

    controller = module.get<CountryCodesController>(CountryCodesController);
    service = module.get<CountryCodesService>(CountryCodesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return array of country codes', async () => {
      const result: CountryCodeDto[] = [{ 'country': 'USA', 'code': '+48' }];
      jest.spyOn(service, 'findAll').mockImplementation(async () => result);

      expect(await controller.findAll()).toBe(result);
    })
  })
});
