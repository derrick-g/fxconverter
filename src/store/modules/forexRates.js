import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

const state = () => ({
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
    }
})
  
const getters = {

}

const actions = {
    async startPollingOfRates({commit, dispatch, state}) {
        commit('SET_POLLING_STATE', true);
        await dispatch('getForexRates');
        setInterval(() => {
            dispatch('getForexRates');
        }, state.pollingRate)
    },
    async getForexRates({commit, dispatch, state}) {
        /* Note: API is limited to only allow a base rate of EUR, 1,000 monthly requests */

        if (state.pollingState) {

            commit('SET_FOREX_RATES_LOADING', true)
            const forexLatestRatesURL = `http://api.exchangeratesapi.io/v1/latest?access_key=${process.env.VUE_APP_FOREX_KEY}&format=1&symbols=USD,GBP,CAD,AUD,ZAR`
            return await axios.get(forexLatestRatesURL)
                .then(response => {
                        if (response.data.success) {
                            commit('SET_FOREX_RATES', response.data)
                        } else {
                            commit('SET_ERROR_LOADING_RATES', response.data)
                        }
                        commit('SET_FOREX_RATES_LOADING', false)
                    })
                .catch(error => {
                    commit('SET_ERROR_LOADING_RATES', error.response.data)
                    commit('SET_FOREX_RATES_LOADING', false)
                })
            

        } else {
            await dispatch('startPollingOfRates');
        }
    }
}

const mutations = {
    SET_FOREX_RATES(state, rates) {
        state.forexRates = rates
    },

    SET_ERROR_LOADING_RATES(state, response) {
        state.errorLoadingForexRates = {
            error: true,
            code: response.error.code,
            message: response.error.info
        };
    },

    SET_POLLING_STATE(state, pollingStatus) {
        state.pollingState = pollingStatus;
    },

    SET_FOREX_RATES_LOADING(state, loadingStatus) {
        state.forexRatesLoading = loadingStatus;
    }
}

export default {
namespaced: true,
state,
getters,
actions,
mutations
}