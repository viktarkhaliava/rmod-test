import { Test, TestingModule } from '@nestjs/testing';
import { CountryCodesService } from './country-codes.service';
import { CountryCodeDto } from './dto/country-code.dto';

describe('CountryCodesService', () => {
  let service: CountryCodesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CountryCodesService],
    }).compile();

    service = module.get<CountryCodesService>(CountryCodesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return array of country codes', async () => {
      const result: CountryCodeDto[] = [{ 'country': 'USA', 'code': '+48' }];
      jest.spyOn(service, 'findAll').mockImplementation(async () => result);

      expect(await service.findAll()).toBe(result);
    })
  })
});
