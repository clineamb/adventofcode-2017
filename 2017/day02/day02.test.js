const t = require('./checkrows.js');

describe('***** DAY 2 *****', () => {
  describe('Part 1 (sum of min/max)', () => {
    it('should return the expected checksum', () => {
      const sheet = [
        [5, 1, 9, 5],
        [7, 5, 3],
        [2, 4, 6, 8]
      ];
      expect(t.checksum(sheet)).toBe(18);
    });
  });

  describe('Part 2 (some of even dividers)', () => {
    describe('#getEvenDividers', () => {
      const sheet = [
        { row: [5, 9, 2, 8], result: 4 },
        { row: [9, 4, 7, 3], result: 3 },
        { row: [3, 8, 6, 5], result: 2 }
      ];

      sheet.forEach(({row, result}, idx) => {
        it(`${JSON.stringify(row)} should return ${result} - case #${idx+1}`, () => {
          expect(t.getEvenDividers(row)).toBe(result);
        });
      })
    });
  });

  it('should sum the evenly divded division', () => {
    const sheet = [
      [5, 9, 2, 8],
      [9, 4, 7, 3],
      [3, 8, 6, 5]
    ];

    expect(t.checkmod(sheet)).toBe(9);
  });
});