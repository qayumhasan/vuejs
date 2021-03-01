new Vue({
  el: '#app',
  data: {
    invoice_number: '21001',
    date_issue: '03-Feb-2021',
    date_expire: '03-Mar-2021',
    desc: 'This invoice covers services provided by Niall Ainsworth for the design, development and deployment of the website site@site.com.',
    company: {
      name: 'Niall Ainsworth',
      address: '126 Address<br/>Co. Meath',
      phone: '087 3297222',
      mail: 'niallainsworth@gmail.com',
      tax_number: '83007342'
    },
    client: {
      name: 'Kevin Smith',
      company: 'Clever Company',
    },
    rate: '12.50',
    currency: '€',
    work: [
      {
        desc: 'Static site design and dev',
        time: 44
      },
      {
        desc: 'Keyboard applet design and dev',
        time: 32
      },
      {
        desc: 'e-commerce shop',
        time: 20
      },
      {
        desc: 'Mobile compatability',
        time: 16
      },
      {
        desc: 'Site hosting, domain, SEO',
        time: 12
      }
    ],
    bank: {
      IBAN: 'IE41AIBK9234234',
      BIC: 'AIBKI324'
    },
  },
  created: function() {
    this.total_time = this.work.reduce((t, i) => t + i.time, 0);
    this.total_cost = this.total_time * this.rate;
  }
});
