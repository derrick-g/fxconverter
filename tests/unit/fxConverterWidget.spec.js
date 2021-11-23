import { mount, createLocalVue, shallowMount   } from "@vue/test-utils";

import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

import fxConverter from "@/components/fxConverter_widget.vue";

describe("fxConverter_widget.vue", () => {
  let store;
  let actions

  const state = {
    errorLoadingForexRates: {
      error: false,
      code: '',
      message: ''
    },
    pollingRate: 60000 * 10, //10 minutes
    pollingState: false,
    forexRatesLoading: false,
    forexRates: {
      "success":true,
      "timestamp":1637510043,
      "base":"EUR",
      "date":"2021-11-21",
      "rates":{
        "AED":4.143174,
        "AFN":105.357692,
        "ALL":121.258902,
        "AMD":537.922958,
        "ANG":2.031776,
        "AOA":670.284998,
        "ARS":113.356104,
        "AUD":1.558503,
        "AWG":2.030729,
        "AZN":1.922123,
        "BAM":1.953226,
        "BBD":2.276224,
        "BDT":96.634375,
        "BGN":1.95431,
        "BHD":0.425421,
        "BIF":2244.509337,
        "BMD":1.128026,
        "BND":1.534627,
        "BOB":7.784395,
        "BRL":6.332293,
        "BSD":1.127377,
        "BTC":1.9034488e-5,
        "BTN":83.71113,
        "BWP":13.148473,
        "BYN":2.782191,
        "BYR":22109.316676,
        "BZD":2.272429,
        "CAD":1.426288,
        "CDF":2262.821288,
        "CHF":1.047374,
        "CLF":0.03387,
        "CLP":934.574253,
        "CNY":7.204935,
        "COP":4415.095177,
        "CRC":721.591368,
        "CUC":1.128026,
        "CUP":29.892699,
        "CVE":110.106517,
        "CZK":25.422222,
        "DJF":200.473289,
        "DKK":7.434939,
        "DOP":63.72927,
        "DZD":157.070049,
        "EGP":17.716561,
        "ERN":16.920746,
        "ETB":53.740648,
        "EUR":1,
        "FJD":2.369363,
        "FKP":0.840869,
        "GBP":0.838993,
        "GEL":3.525128,
        "GGP":0.840869,
        "GHS":6.907857,
        "GIP":0.840869,
        "GMD":59.112928,
        "GNF":10769.598642,
        "GTQ":8.720149,
        "GYD":235.880482,
        "HKD":8.788465,
        "HNL":27.184871,
        "HRK":7.508035,
        "HTG":110.546883,
        "HUF":367.601668,
        "IDR":16096.202955,
        "ILS":3.492731,
        "IMP":0.840869,
        "INR":83.824598,
        "IQD":1644.958135,
        "IRR":47659.114151,
        "ISK":147.794449,
        "JEP":0.840869,
        "JMD":175.447132,
        "JOD":0.799815,
        "JPY":128.620994,
        "KES":126.373227,
        "KGS":95.634531,
        "KHR":4586.504952,
        "KMF":488.43581,
        "KPW":1015.22412,
        "KRW":1344.314568,
        "KWD":0.34133,
        "KYD":0.939548,
        "KZT":488.70856,
        "LAK":12080.682475,
        "LBP":1704.897175,
        "LKR":227.74638,
        "LRD":161.308163,
        "LSL":17.642763,
        "LTL":3.330769,
        "LVL":0.682332,
        "LYD":5.178746,
        "MAD":10.385751,
        "MDL":19.956299,
        "MGA":4498.155523,
        "MKD":61.532978,
        "MMK":1997.572355,
        "MNT":3224.14594,
        "MOP":9.048878,
        "MRO":402.705217,
        "MUR":48.859485,
        "MVR":17.428434,
        "MWK":919.399651,
        "MXN":23.514165,
        "MYR":4.719103,
        "MZN":72.002348,
        "NAD":17.642758,
        "NGN":463.438775,
        "NIO":39.716833,
        "NOK":9.937834,
        "NPR":133.938088,
        "NZD":1.608249,
        "OMR":0.434268,
        "PAB":1.127377,
        "PEN":4.537669,
        "PGK":3.959552,
        "PHP":56.974078,
        "PKR":197.475918,
        "PLN":4.697219,
        "PYG":7716.99245,
        "QAR":4.107187,
        "RON":4.949897,
        "RSD":117.668534,
        "RUB":82.93081,
        "RWF":1166.87045,
        "SAR":4.231436,
        "SBD":9.078755,
        "SCR":16.834708,
        "SDG":494.075929,
        "SEK":10.135712,
        "SGD":1.535667,
        "SHP":1.553748,
        "SLL":12436.491012,
        "SOS":658.767777,
        "SRD":24.249226,
        "STD":23347.868197,
        "SVC":9.864801,
        "SYP":1417.684984,
        "SZL":17.754744,
        "THB":37.038788,
        "TJS":12.734825,
        "TMT":3.948092,
        "TND":3.229258,
        "TOP":2.550134,
        "TRY":12.671012,
        "TTD":7.652086,
        "TWD":31.358573,
        "TZS":2596.717062,
        "UAH":29.977973,
        "UGX":4030.298938,
        "USD":1.128026,
        "UYU":49.7444,
        "UZS":12110.606778,
        "VEF":241206127582.57767,
        "VND":25563.333394,
        "VUV":125.571453,
        "WST":2.891855,
        "XAF":655.072186,
        "XAG":0.04583,
        "XAU":0.000611,
        "XCD":3.048548,
        "XDR":0.804813,
        "XOF":655.014197,
        "XPF":118.86582,
        "YER":282.289007,
        "ZAR":17.716212,
        "ZMK":10153.594934,
        "ZMW":19.8697,
        "ZWL":363.224028
      }
    },
  };
  actions = {
    getForexRates: jest.fn()
  }

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        forexRates: {
          state,
          actions,
          namespaced: true
        }
      }
    });
  });

  it("Visual Elements are shown for FX Converter", async () => {
    
    const wrapper = shallowMount (fxConverter, {
      store,
      localVue
    });
    
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('dummyElement').exists()).toBe(false)
    expect(wrapper.findAll('div').exists()).toBe(true)
    expect(wrapper.find('#amountInput').exists()).toBe(true)
    expect(wrapper.find('#convertInput').exists()).toBe(true)
    expect(wrapper.find('#amountRateSelector').exists()).toBe(true)
    expect(wrapper.find('#convertedRateSelector').exists()).toBe(true)

  });

  
  it("Simulate Keyboard event to input test", async () => {
    
    const wrapper = shallowMount (fxConverter, {
      store,
      localVue
    });

    await wrapper.setData({
      selectedRate: {
        currency: 'GBP',
        rate: wrapper.vm.forexRates.rates.GBP
      } 
    })


  const input = wrapper.find('#amountInput');
  input.element.value = '5';
  await input.trigger('keyup');
  await input.trigger('input');

    var conversionToBe = parseFloat(wrapper.vm.fxAmount * wrapper.vm.forexRates.rates.GBP).toFixed(2)
    expect(wrapper.find('#convertInput').element.value).toBe(conversionToBe);
  });

  it("Convert EUR to GBP: Test 1 - Small No Decimals", async () => {
    
    const wrapper = shallowMount (fxConverter, {
      store,
      localVue
    });
  
    await wrapper.setData({
      selectedRate: {
        currency: 'GBP',
        rate: wrapper.vm.forexRates.rates.GBP
      } 
    })

    const input = wrapper.find('#amountInput');
    input.element.value = '25';
    await input.trigger('keyup');
    await input.trigger('input');

    var conversionToBe = parseFloat(wrapper.vm.fxAmount * wrapper.vm.forexRates.rates.GBP).toFixed(2)
    expect(wrapper.find('#convertInput').element.value).toBe(conversionToBe);
  });


  it("Convert EUR to GBP: Test 2 - Small With Decimals", async () => {
    
    const wrapper = shallowMount (fxConverter, {
      store,
      localVue
    });
    
    await wrapper.setData({
      selectedRate: {
        currency: 'GBP',
        rate: wrapper.vm.forexRates.rates.GBP
      } 
    })

    const input = wrapper.find('#amountInput');
    input.element.value = '133.6581';
    await input.trigger('keyup');
    await input.trigger('input');

    var conversionToBe = parseFloat(wrapper.vm.fxAmount * wrapper.vm.forexRates.rates.GBP).toFixed(2)
    expect(wrapper.find('#convertInput').element.value).toBe(conversionToBe);
  });

  it("Convert EUR to GBP: Test 3 - Large No Decimals", async () => {
    
    const wrapper = shallowMount (fxConverter, {
      store,
      localVue
    });
    
    await wrapper.setData({
      selectedRate: {
        currency: 'GBP',
        rate: wrapper.vm.forexRates.rates.GBP
      } 
    })

    const input = wrapper.find('#amountInput');
    input.element.value = '998984456';
    await input.trigger('keyup');
    await input.trigger('input');

    var conversionToBe = parseFloat(wrapper.vm.fxAmount * wrapper.vm.forexRates.rates.GBP).toFixed(2)
    expect(wrapper.find('#convertInput').element.value).toBe(conversionToBe);
  });

  it("Convert EUR to GBP: Test 4 - Large With Decimals", async () => {
    
    const wrapper = shallowMount (fxConverter, {
      store,
      localVue
    });
    
    await wrapper.setData({
      selectedRate: {
        currency: 'GBP',
        rate: wrapper.vm.forexRates.rates.GBP
      } 
    })

    const input = wrapper.find('#amountInput');
    input.element.value = '16516511321651.213219877';
    await input.trigger('keyup');
    await input.trigger('input');

    var conversionToBe = parseFloat(wrapper.vm.fxAmount * wrapper.vm.forexRates.rates.GBP).toFixed(2)
    expect(wrapper.find('#convertInput').element.value).toBe(conversionToBe);
  });


  it("Convert EUR to GBP: Test 5 - Test Alphanumeric Validation", async () => {
    
    const wrapper = shallowMount (fxConverter, {
      store,
      localVue
    });
    
    await wrapper.setData({
      selectedRate: {
        currency: 'GBP',
        rate: wrapper.vm.forexRates.rates.GBP
      } 
    })

    const input = wrapper.find('#amountInput');
    input.element.value = '123aa.212';
    await input.trigger('keyup');
    await input.trigger('input');

    var conversionToBe = parseFloat(wrapper.vm.fxAmount * wrapper.vm.forexRates.rates.GBP).toFixed(2)
    expect(wrapper.find('#convertInput').element.value).toBe(conversionToBe);
  });

  it("Convert GBP to EUR: Test 6 - Number Small No Decimal", async () => {
    
    const wrapper = shallowMount (fxConverter, {
      store,
      localVue
    });
    
    await wrapper.setData({
      selectedRate: {
        currency: 'GBP',
        rate: wrapper.vm.forexRates.rates.GBP
      } 
    })

    const input = wrapper.find('#convertInput');
    input.element.value = '800';
    await input.trigger('keyup');
    await input.trigger('input');

    var conversionToBe = parseFloat(wrapper.vm.fxConvertedAmount / wrapper.vm.forexRates.rates.GBP).toFixed(2)
    expect(wrapper.find('#amountInput').element.value).toBe(conversionToBe);
  });


  it("Convert GBP to EUR: Test 7 - Number WithDecimal", async () => {
    
    const wrapper = shallowMount (fxConverter, {
      store,
      localVue
    });
    
    await wrapper.setData({
      selectedRate: {
        currency: 'GBP',
        rate: wrapper.vm.forexRates.rates.GBP
      } 
    })

    const input = wrapper.find('#convertInput');
    input.element.value = '9987.299';
    await input.trigger('keyup');
    await input.trigger('input');

    var conversionToBe = parseFloat(wrapper.vm.fxConvertedAmount / wrapper.vm.forexRates.rates.GBP).toFixed(2)
    expect(wrapper.find('#amountInput').element.value).toBe(conversionToBe);
  });

  it("Convert EUR to ZAR: Test 8 - Number Small No Decimal", async () => {
    
    const wrapper = shallowMount (fxConverter, {
      store,
      localVue
    });
    
    await wrapper.setData({
      selectedRate: {
        currency: 'ZAR',
        rate: wrapper.vm.forexRates.rates.ZAR
      } 
    })

    const input = wrapper.find('#amountInput');
    input.element.value = '800';
    await input.trigger('keyup');
    await input.trigger('input');

    var conversionToBe = parseFloat(wrapper.vm.fxAmount * wrapper.vm.forexRates.rates.ZAR).toFixed(2)
    expect(wrapper.find('#convertInput').element.value).toBe(conversionToBe);
  });

  it("Convert EUR to ZAR: Test 9 - Number With Decimal", async () => {
    
    const wrapper = shallowMount (fxConverter, {
      store,
      localVue
    });
    
    await wrapper.setData({
      selectedRate: {
        currency: 'ZAR',
        rate: wrapper.vm.forexRates.rates.ZAR
      } 
    })

    const input = wrapper.find('#amountInput');
    input.element.value = '16569.12';
    await input.trigger('keyup');
    await input.trigger('input');

    var conversionToBe = parseFloat(wrapper.vm.fxAmount * wrapper.vm.forexRates.rates.ZAR).toFixed(2)
    expect(wrapper.find('#convertInput').element.value).toBe(conversionToBe);
  });

  it("Convert ZAR to EUR: Test 10 - Number Small No Decimal", async () => {
    
    const wrapper = shallowMount (fxConverter, {
      store,
      localVue
    });
    
    await wrapper.setData({
      selectedRate: {
        currency: 'ZAR',
        rate: wrapper.vm.forexRates.rates.ZAR
      } 
    })

    const input = wrapper.find('#convertInput');
    input.element.value = '2';
    await input.trigger('keyup');
    await input.trigger('input');

    var conversionToBe = parseFloat(wrapper.vm.fxConvertedAmount / wrapper.vm.forexRates.rates.ZAR).toFixed(2)
    expect(wrapper.vm.fxAmount).toBe(conversionToBe);
  });

  
  it("Convert ZAR to EUR: Test 11 - Number With Decimal", async () => {
    
    const wrapper = shallowMount (fxConverter, {
      store,
      localVue
    });
    
    await wrapper.setData({
      selectedRate: {
        currency: 'ZAR',
        rate: wrapper.vm.forexRates.rates.ZAR
      } 
    })

    const input = wrapper.find('#convertInput');
    input.element.value = '6511123199.9999999';
    await input.trigger('keyup');
    await input.trigger('input');

    var conversionToBe = parseFloat(wrapper.vm.fxConvertedAmount / wrapper.vm.forexRates.rates.ZAR).toFixed(2)
    expect(wrapper.find('#amountInput').element.value).toBe(conversionToBe);
  });

});
