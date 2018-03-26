const countries = require('./../../../app/javascript/utils/countries');

test('countries', () => {
    expect(countries).not.toBeNull();
    expect(countries.countries[15].value).toBe('Australia');
});