<template>

  <div class="fxConverter_widget" :class="{'loading' : forexRatesLoading}">

    <h2><strong>FX</strong> Converter</h2>

    <h5 class="loadingText" v-if="forexRatesLoading">Loading</h5>

    <div class="flex_row">

      <div class="currencyBlock">
        <label>Amount</label>
        <input
          id="amountInput"
          type="text"
          v-model="fxAmount"
          @input="convertFromAmount()"
        />
        <select v-model="fromRate" id="amountRateSelector">
          <option>EUR</option>
        </select>
      </div>

      <div class="currencyBlock">
        <label>Converted to/from</label>
        <input
          id="convertInput"
          type="text"
          v-model="fxConvertedAmount"
          @input="convertFromConvertedAmount()"
        />
        <select v-model="selectedRate" @change="resetRate()" id="convertedRateSelector">
          <option
            v-for="(fxValue, fxName, index) in forexRates.rates"
            :key="index"
            v-bind:value="{ currency: fxName, rate: fxValue }"
          >
            {{ fxName }}
          </option>
        </select>
      </div>

    </div>

    <div class="exchangeRate">
      <p>1.00000 {{ fromRate }} = <span>{{ selectedRate.rate }} </span>{{ selectedRate.currency }}</p>
      <p>Mid-market exchange rates {{ forexRates.date }} at {{ rateTime }} UTC</p>
    </div>
     <p class="errorMessage" v-if="errorLoadingForexRates.error">There was an error getting the latest rates. Code: {{ errorLoadingForexRates.code}}</p>

  </div>
</template>

<script>
  import { mapState } from "vuex"
  export default {
    name: "fxConverter",
    props: {},
    data() {
      return {
        twoDecimalPattern: /^\d+\.?\d{0,2}/,

        selectedRate: {
          currency: "GBP",
          rate: 0,
        },
        fromRate: "EUR",

        fxAmount: 0,
        fxConvertedAmount: 0,
      };
    },
    methods: {
      convertFromAmount() {
        this.fxAmount = this.fxAmount.toString().match(this.twoDecimalPattern);
        this.fxConvertedAmount = parseFloat(this.fxAmount * this.selectedRate.rate).toFixed(2);
      },

      convertFromConvertedAmount() {
        this.fxConvertedAmount = this.fxConvertedAmount.toString().match(this.twoDecimalPattern);
        this.fxAmount = parseFloat(this.fxConvertedAmount / this.selectedRate.rate).toFixed(2);
      },

      resetRate() {
        this.fxConvertedAmount = 0;
        this.convertFromAmount();
      }
    },

    computed: {
      ...mapState({
        forexRates: state => state.forexRates.forexRates,
        errorLoadingForexRates: state => state.forexRates.errorLoadingForexRates,
        forexRatesLoading: state => state.forexRates.forexRatesLoading
      }),

      rateTime() {
        var dateTime = new Date(this.forexRates.timestamp * 1000);
        var hour = dateTime.getHours();
        var min = dateTime.getMinutes();
        return hour + ":" + min;
      }

    },
    async mounted() {
      await this.$store.dispatch('forexRates/getForexRates');

      this.selectedRate = {
        currency: "GBP",
        rate: this.forexRates.rates.GBP,
      };
      this.fromRate = this.forexRates.base;
    }
  };
</script>

<style scoped lang="scss">

.fxConverter_widget.loading {
  &:after {
    content: "";
    width:100%;
    height:100%;
    background-color: rgba(255,255,255,0.7);
    color: #000000;
    position: absolute;
    top:0;
    left:0;
  }

  .loadingText {
    position: absolute;
    font-size: 16px;
    text-transform: uppercase;
    left: 0;
    text-align: center;
    z-index: 2;
    width: 100%;
  }
}
.fxConverter_widget {
  box-shadow: 1px 7px 12px 0px rgba(0, 0, 0, 0.2);
  padding: 20px 45px 45px 45px;
  background-color: #ffffff;

  h2 {
    font-weight: 200;
    border-bottom: 1px solid #ccc;
    font-size: 34px;
  }

  .flex_row {
    display: flex;
    flex-wrap: wrap;
  }

  .currencyBlock {
    width: 45%;
    position: relative;

    &:first-of-type {
      &::after {
        content: "";
        position: absolute;
        margin-left: 15px;
        background-image: url("~@/assets/icons/exchange_icon.svg");
        width: 30px;
        height: 30px;
        top: 35px;
      }
    }
    &:last-of-type {
      margin-left: 10%;
    }

    label {
      display: block;
      text-transform: uppercase;
      font-size: 12px;
    }
  }

  input,
  select {
    width:40%;
    max-width: 100px;
    padding: 24px;
    border: 1px solid #ccc;
    outline: none;
    margin-right: 4px;
    font-size: 16px;
    transition: border 0.6s ease;

    &:hover {
      border: 1px solid #000000;
      transition: border 0.6s ease;
    }
  }

  select {
      width:50%;
    max-width: 135px;
    cursor: pointer;
  }

  .exchangeRate p {
    font-size: 24px;
    line-height: 1;

    span {
      color: #02d610;
    }

    &:last-of-type {
      margin-top: -15px;
      padding-top: 0;
      font-size: 14px;
    }
  }

  p.errorMessage {
    color: #d60202;
    font-size:13px;
  }
}
@media only screen and (max-width: 900px) {
  .fxConverter_widget {
    .currencyBlock {
      width: 100%;

    &:first-of-type {
      &::after {
        margin-left: 25px;
        top: 80px;
      }
    }
    &:last-of-type {
      margin-left: 0%;
    }
    }
  }
}

@media only screen and (max-width:400px) {
   .fxConverter_widget {
      .currencyBlock {
      &:first-of-type {
        &::after {
          margin-left: 15px;
          top: 70px;
        }
      }
      }


      input,
      select {
        width:50%;
        max-width: 70px;
        padding: 18px;
        margin-right: 4px;
        font-size: 15px;
      }
       select {
          max-width: 100px;
       }
   }
}
</style>
