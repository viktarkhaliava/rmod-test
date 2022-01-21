import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { CountryCodesModule } from '../src/country-codes/country-codes.module';
import { CountryCodesService } from '../src/country-codes/country-codes.service';
import { INestApplication } from '@nestjs/common';
import { CountryCodeDto } from 'src/country-codes/dto/country-code.dto';

describe('Country Codes', () => {
  let app: INestApplication;
  let service = { findAll: (): CountryCodeDto[] => [{ country: 'USA', code: '+48' }] };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [CountryCodesModule],
    })
      .overrideProvider(CountryCodesService)
      .useValue(service)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET country-codes`, () => {
    return request(app.getHttpServer())
      .get('/country-codes')
      .expect(200)
      .expect(
        service.findAll(),
      );
  });

  afterAll(async () => {
    await app.close();
  });
});