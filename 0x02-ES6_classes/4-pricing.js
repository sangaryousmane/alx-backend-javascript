import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  set amount(amount) {
    if (typeof amount === 'number') {
      this._amount = amount;
    }
  }

  set currency(currency) {
    if (typeof currency === 'number') {
       this._currency = currency;
    }
  }

  get currency() {
    return this._currency;
  }

  get amount() {
    return this._amount;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
   if (typeof amount === 'number' && typeof conversionRate === 'number') {
      return amount * conversionRate;
   }
  }
}
