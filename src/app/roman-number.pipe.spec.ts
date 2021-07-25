import { RomanNumberPipe } from './roman-number.pipe';
import { RomanNumberService } from './roman-number.service';
import { instance, mock, verify, when } from 'ts-mockito';

describe('RomanNumberPipe', () => {
  let sut: RomanNumberPipe;

  let romanNumberServiceMock: RomanNumberService;

  beforeEach(() => {
    romanNumberServiceMock = mock();

    sut = new RomanNumberPipe(instance(romanNumberServiceMock));
  });

  describe('transform', () => {
    test('should redirect to roman number service', () => {
      const value = 3;
      const expected = 'III';

      when(romanNumberServiceMock.transform(value)).thenReturn(expected);

      const result = sut.transform(value);

      expect(result).toBe(expected);

      verify(romanNumberServiceMock.transform(value)).called();
    });
  });
});
