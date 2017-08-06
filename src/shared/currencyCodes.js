export const CURRENCY_CODES = [
  {code: 'CAD', name: 'Canadian Dollar'},
  {code: 'EUR', name: 'EUR'},
  {code: 'GBP', name: 'British Pound Sterling'},
  {code: 'JPY', name: 'Japanese Yen'},
  {code: 'KRW', name: 'South Korean Won'},
  {code: 'RUB', name: 'Russian Ruble'},
  {code: 'NZD', name: 'New Zealand Dollar'},
  {code: 'USD', name: 'US Dollar'},
  {code: 'MXN', name: 'Mexican Peso'},
  {code: 'NOK', name: 'Norwegian Krone'},
  {code: 'HKD', name: 'Hong Kong Dollar'},
  {code: 'CNY', name: 'Chinese Yuan Renminbi'},
];

const CurrencyCodes = (

      CURRENCY_CODES.sort(function(a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      })

)

export default CurrencyCodes;
