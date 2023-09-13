import { initializeTimes, updateTimes } from './index';

describe('BookingPage', () => {
  // Mock the console.error to suppress expected errors for missing context providers
  const originalError = console.error;
  beforeAll(() => {
    console.error = (...args) => {
      if (/Warning/.test(args[0])) {
        return;
      }
      originalError.call(console, ...args);
    };
  });

  afterAll(() => {
    console.error = originalError;
  });

  describe('initializeTimes function', () => {
    it('should return an array of times', () => {
      const times = initializeTimes();
      // Define the expected times array
      const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
      // Assert that the times array matches the expectedTimes array
      expect(times).toEqual(expectedTimes);
    });
  });

  describe('updateTimes function', () => {
    it('should return an array of times based on the provided date', () => {
      // Define a sample date
      const sampleDate = '2023-09-13';
      const times = updateTimes(sampleDate);
      // For this test, the updateTimes function returns the same times regardless of the date
      // So, the expected result should be the same as initializeTimes()
      const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
      // Assert that the times array matches the expectedTimes array
      expect(times).toEqual(expectedTimes);
    });
  });

});
