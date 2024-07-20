<template>
  <div class="modal-crypto" v-bind:class="['crypto-' + modalsData.currency]">
    <div class="crypto-header">
      <button v-on:click="modalBackButton()" class="button-back">
        <div class="button-inner">
          <svg
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.47974 9.5176L5.47974 0.482354C5.47974 0.0547936 4.96343 -0.16302 4.65688 0.143533L0.139218 4.66115C-0.0463292 4.8467 -0.0463292 5.15325 0.139218 5.33888L4.65688 9.8565C4.96343 10.163 5.47974 9.94516 5.47974 9.5176Z"
            />
          </svg>
        </div>
      </button>
      <img src="@/assets/img/cashier/cashapp.png" />
      <div class="header-text">
        Cashapp
        <div class="text-amount">Deposit via Cashapp</div>
      </div>
    </div>

    <div class="info-text">
      <div class="text-header">
        <img src="@/assets/img/cashier/cashapp.png" />
        Cashapp
      </div>
      <p>
        Always double-check your cashapp tag, the note and the amount before sending. We cannot
        recover funds sent to the wrong tag.The final amount is calculated once your deposit
        confirms on the network.
      </p>
      <p>
        Scan the QR code or copy the cashapp tag on the next page and send your desired amount.
        <span>Minimum $1.42 Cashapp.</span>
        Your deposit will be confirmed after confirmation on the network.
      </p>
    </div>

    <div v-if="cashierCashappData.show === false" class="deposit-rate">
      <div class="rate-title">Currency Conversion</div>
      <div class="rate-content">
        <div class="content-element">
          <transition name="fade" mode="out-in">
            <div class="element-content" key="data">
              <span class="text-green-gradient">$</span>
              <input v-model="cashierFiatAmount" v-on:input="modalFiatInput" type="text" />
            </div>
          </transition>
        </div>
        <span>=</span>
        <div class="content-element">
          <transition name="fade" mode="out-in">
            <div class="element-content" key="data">
              <img src="@/assets/img/icons/coin.svg" alt="icon" />
              <input v-model="cashierCoinAmount" v-on:input="modalCoinInput" type="text" />
            </div>
          </transition>
        </div>
        <span>></span>
        <button
          v-on:click="modalDepositButton()"
          class="button-deposit"
          v-bind:disabled="cashierCashappData.loading"
        >
          <div class="button-inner">
            <transition name="fade" mode="out-in">
              <div class="inner-content" key="content">NEXT</div>
            </transition>
          </div>
        </button>
      </div>
    </div>

    <div v-else class="cashapp-container">
      <div class="cashapp-content">
        <div class="cashapp-column1">
          <div class="deposit-address">
            <div class="address-title">Your Cashapp Tag</div>
            <div class="address-input">
              <transition name="fade" mode="out-in">
                <div
                  v-if="cashierCashappData.loading === true"
                  class="input-loading"
                  key="loading"
                ></div>
                <div v-else class="input-content" key="data">
                  <input v-model="cashierCashappData.cashtag" type="text" />
                  <button v-on:click="modalCopyButton()">
                    <svg
                      width="19"
                      height="22"
                      viewBox="0 0 19 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 20H6V6H17M17 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H17C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20V6C19 5.46957 18.7893 4.96086 18.4142 4.58579C18.0391 4.21071 17.5304 4 17 4ZM14 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V16H2V2H14V0Z"
                        fill="#57819B"
                      />
                    </svg>
                  </button>
                </div>
              </transition>
            </div>
          </div>
          <div class="deposit-address">
            <div class="address-title">Your Cashapp Note</div>
            <div class="address-input">
              <transition name="fade" mode="out-in">
                <div
                  v-if="cashierCashappData.loading === true"
                  class="input-loading"
                  key="loading"
                ></div>
                <div v-else class="input-content" key="data">
                  <input v-model="cashierCashappData.note" type="text" />
                  <button v-on:click="modalCopyButton()">
                    <svg
                      width="19"
                      height="22"
                      viewBox="0 0 19 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 20H6V6H17M17 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H17C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20V6C19 5.46957 18.7893 4.96086 18.4142 4.58579C18.0391 4.21071 17.5304 4 17 4ZM14 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V16H2V2H14V0Z"
                        fill="#57819B"
                      />
                    </svg>
                  </button>
                </div>
              </transition>
            </div>
          </div>
        </div>
        <div class="cashapp-column2">
          <div class="cashapp-group">
            <transition name="fade" mode="out-in">
              <div
                v-if="cashierCashappData.loading === true"
                class="input-loading"
                key="loading"
              ></div>
              <div v-else class="cashapp-sub">
                <div class="cashapp-title">Order ID</div>
                <div class="cashapp-value">{{ cashierCashappData.id }}</div>
              </div>
            </transition>
          </div>
          <div class="cashapp-group">
            <transition name="fade" mode="out-in">
              <div
                v-if="cashierCashappData.loading === true"
                class="input-loading"
                key="loading"
              ></div>
              <div v-else class="cashapp-sub">
                <div class="cashapp-title">Time Remaining</div>
                <div class="cashapp-value">{{ formattedTime }}</div>
              </div>
            </transition>
          </div>
          <div class="cashapp-group">
            <transition name="fade" mode="out-in">
              <div
                v-if="cashierCashappData.loading === true"
                class="input-loading"
                key="loading"
              ></div>
              <div v-else class="cashapp-sub">
                <div class="cashapp-title">Date Created</div>
                <div class="cashapp-value">{{ cashierCashappData.createdAt }}</div>
              </div>
            </transition>
          </div>
        </div>

        <div class="info-qrcode">
          <transition name="fade" mode="out-in">
            <div
              v-if="cashierCashappData.loading === true"
              class="qrcode-loading"
              key="loading"
            ></div>
            <div v-else class="qrcode-content" key="data">
              <QRCode
                v-bind:value="cashierCashappData.cashtag"
                v-bind:options="{ width: 160, height: 160, margin: 0 }"
              />
            </div>
          </transition>
        </div>
      </div>

      <div class="deposit-address">
        <div class="address-title">Enter your payment receipt url</div>
        <div class="address-input">
          <transition name="fade" mode="out-in">
            <div class="input-content" key="data">
              <input v-model="payment_link" type="text" />

              <div class="credit-button">
                <button
                  v-on:click="modalClaimButton()"
                  class="button-deposit"
                  v-bind:disabled="socketSendLoading !== null"
                >
                  <div class="button-inner">
                    <transition name="fade" mode="out-in">
                      <ButtonLoading
                        v-if="socketSendLoading === 'CheckCreditDeposit'"
                        key="loading"
                      />
                      <div v-else class="inner-content" key="content">Claim</div>
                    </transition>
                  </div>
                </button>
              </div>
            </div>
          </transition>
        </div>
      </div>
      <div class="stepper">
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="step"
          :class="{ active: index === currentStep, completed: index < currentStep }"
        >
          <div class="label-group">
            <div class="circle"></div>
            <div class="label">{{ step }}</div>
          </div>
          <div
            class="line"
            v-if="index < steps.length - 1"
            :class="{ gradient: index === currentStep }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CashierCryptoDeposit from '@/components/cashier/CashierCryptoDeposit'
import CashierCryptoWithdraw from '@/components/cashier/CashierCryptoWithdraw'
import QRCode from '@/components/QRCode'
import ButtonLoading from '@/components/ButtonLoading'

export default {
  name: 'ModalCashapp',
  components: {
    CashierCryptoDeposit,
    CashierCryptoWithdraw,
    QRCode,
    ButtonLoading
  },
  data() {
    return {
      cashierCoinAmount: 0,
      cashierFiatAmount: 0,
      steps: ['Pending', 'Verifying', 'Processing', 'Completed'],
      currentStep: 0,
      payment_link: '',
      countdownTime: 1800,
      interval: null
    }
  },
  methods: {
    ...mapActions([
      'notificationShow',
      'modalsSetShow',
      'modalsSetData',
      'cashierSendCashappDepositSocket',
      'cashierCheckCashappDepositSocket'
    ]),
    modalBackButton() {
      this.modalsSetShow(null)

      setTimeout(() => {
        this.modalsSetShow('Cashier')
      }, 200)
    },
    modalCoinInput() {
      this.cashierFiatAmount = parseFloat((this.cashierCoinAmount / 1000) * 3).toFixed(2)
    },
    modalFiatInput() {
      this.cashierCoinAmount = parseFloat((this.cashierFiatAmount / 3) * 1000).toFixed(2)
    },
    startCountdown() {
      this.interval = setInterval(() => {
        if (this.countdownTime > 0) {
          this.countdownTime--
        } else {
          this.clearCountdown()
        }
      }, 1000)
    },
    clearCountdown() {
      if (this.interval) {
        clearInterval(this.interval)
        this.interval = null
      }
    },
    modalDepositButton() {
      const data = { amount: Math.floor(this.cashierFiatAmount) }
      this.cashierSendCashappDepositSocket(data)
    },

    modalClaimButton() {
      const data = { payment_link: this.payment_link }
      this.cashierCheckCashappDepositSocket(data)
    }
  },
  computed: {
    ...mapGetters(['modalsData', 'cashierCashappData', 'socketSendLoading']),
    formattedTime() {
      const minutes = Math.floor(this.countdownTime / 60)
      const seconds = this.countdownTime % 60
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    }
  },
  beforeDestroy() {
    this.clearCountdown()
  },
  watch: {
    'cashierCashappData.cashtag'(newVal) {
      if (newVal) {
        this.startCountdown()
      } else {
        this.clearCountdown()
      }
    }
  }
}
</script>

<style scoped>
.modal-crypto {
  width: 820px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 35px 40px 35px;
  border-radius: 15px;
  background: radial-gradient(
      100% 100% at 50% -30%,
      rgba(0, 255, 194, 0.2) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    linear-gradient(255deg, #07263d 0%, #07243a 100%);
}

.modal-crypto .crypto-header {
  width: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 25px;
  border-bottom: 1px solid #335361;
}

.modal-crypto button.button-back {
  width: 46px;
  height: 34px;
  margin-right: 15px;
}

.modal-crypto button.button-back .button-inner {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0d4557;
  clip-path: polygon(
    7px 0,
    calc(100% - 7px) 0,
    100% 25%,
    100% 75%,
    calc(100% - 7px) 100%,
    7px 100%,
    0 75%,
    0 25%
  );
}

.modal-crypto button.button-back .button-inner svg {
  fill: #75adc2;
  transition: fill 0.3s ease;
}

.modal-crypto button.button-back:hover .button-inner svg {
  fill: #ffffff;
}

.modal-crypto .crypto-header img {
  width: 44px;
  height: 44px;
  margin-right: 15px;
}

.modal-crypto .element-content img,
.modal-crypto .element-content span {
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translate(0, -50%);
  z-index: 1;
}

.modal-crypto .header-text {
  font-size: 14px;
  font-weight: 800;
  color: #1ede53;
}

.modal-crypto .text-amount {
  font-size: 12px;
  font-weight: 600;
  color: #ffffff;
}

.modal-crypto .info-text {
  width: 100%;
  padding: 18px;
  border-radius: 8px;
  background: #082435;
  margin-top: 30px;
}

.modal-crypto .info-text p {
  margin-top: 13px;
  font-size: 12px;
  font-family: 600;
  color: #396682;
}

.modal-crypto .info-text p:first-of-type {
  margin-top: 9px;
  color: #4d87aa;
}

.modal-crypto .info-text p span {
  color: #4d87aa;
}

.modal-crypto .text-header {
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 800;
  color: #1ede53;
}

.modal-crypto .text-header img {
  width: 30px;
  height: 30px;
  margin-right: 12px;
}

.modal-crypto .deposit-rate {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 35px;
}

.modal-crypto .deposit-rate {
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.modal-crypto .rate-content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 11px;
}

.modal-crypto .rate-content span {
  margin: 0 10px;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  color: #bbbfd0;
}

.modal-crypto .content-element {
  width: 200px;
  height: 50px;
  position: relative;
  padding: 1px;
  z-index: 1;
}

.modal-crypto .content-element::before {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(180deg, #04131f 0%, #223a4e 100%);
  clip-path: polygon(
    9px 0,
    calc(100% - 9px) 0,
    100% 25%,
    100% 75%,
    calc(100% - 9px) 100%,
    9px 100%,
    0 75%,
    0 25%
  );
  z-index: -1;
}

.modal-crypto .content-element::after {
  content: '';
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  position: absolute;
  top: 1px;
  left: 1px;
  background: #072435;
  clip-path: polygon(
    9px 0,
    calc(100% - 9px) 0,
    100% 25%,
    100% 75%,
    calc(100% - 9px) 100%,
    9px 100%,
    0 75%,
    0 25%
  );
  z-index: -1;
}

.modal-crypto .rate-title {
  font-size: 14px;
  font-weight: 700;
  color: #57819b;
}

.modal-crypto .element-content input {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 0 0 40px;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  background-color: transparent;
}

.modal-crypto button.button-deposit {
  min-width: 165px;
  height: 48px;
}

.modal-crypto button.button-deposit .button-inner {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(255deg, #00ffc2 0%, #00aa6d 100%);
  clip-path: polygon(
    6px 0,
    calc(100% - 6px) 0,
    100% 25%,
    100% 75%,
    calc(100% - 6px) 100%,
    6px 100%,
    0 75%,
    0 25%
  );
}

.modal-crypto button.button-deposit .button-loading.fade-leave-active {
  transition: opacity 0.5s;
}

.modal-crypto button.button-deposit .button-loading.fade-leave-to {
  opacity: 0;
}

.modal-crypto button.button-deposit .inner-content {
  padding: 0 24px;
  font-size: 16px;
  font-weight: 800;
  color: #ffffff;
}

.modal-crypto button.button-deposit .inner-content.fade-enter-active {
  transition: opacity 0.5s;
}

.modal-crypto button.button-deposit .inner-content.fade-enter-from {
  opacity: 0;
}

.modal-crypto .info-qrcode {
  width: 170px;
  margin-top: 40px;
  height: 170px;
  background-color: #ffffff;
  border-radius: 8px;
}

.modal-crypto .qrcode-loading {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.modal-crypto .qrcode-loading::after {
  width: 100%;
  height: 100%;
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  animation-name: loading_animation;
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  background: linear-gradient(to right, #dddddd 0%, #aaaaaa 50%, #dddddd 100%);
}

.modal-crypto .qrcode-loading.fade-leave-active {
  transition: opacity 0.5s;
}

.modal-crypto .qrcode-loading.fade-leave-to {
  opacity: 0;
}

.modal-crypto .qrcode-content {
  width: 100%;
  height: 100%;
  padding: 5px;
}

.modal-crypto .cashapp-container {
  width: 100%;
}

.modal-crypto .cashapp-content {
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 20px;
  gap: 20px;
}

.modal-crypto .cashapp-column1 {
  width: 100%;
  flex: 2;
}

.modal-crypto .deposit-address {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.modal-crypto .credit-button button.button-deposit {
  height: 48px;
}

.modal-crypto .address-title {
  font-size: 14px;
  font-weight: 700;
  color: #57819b;
}

.modal-crypto .cashapp-column2 {
  width: 100%;
  margin-top: 40px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.modal-crypto .cashapp-group {
  width: 100%;
  height: 50px;
  border-radius: 8px;
  background: #071f2e;
}

.modal-crypto .cashapp-sub {
  padding: 10px;
}

.modal-crypto .cashapp-group .cashapp-title {
  font-size: 12px;
  font-weight: 700;
  color: #57819b;
}

.modal-crypto .cashapp-group .cashapp-value {
  font-size: 12px;
  font-weight: 700;
  color: #ffffff;
}

.modal-crypto .address-input {
  width: 100%;
  height: 60px;
  margin-top: 11px;
  border-radius: 8px;
  background: #071f2e;
}

.modal-crypto .input-loading {
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
}

.modal-crypto .input-loading::after {
  width: 100%;
  height: 100%;
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  animation-name: loading_animation;
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  background: linear-gradient(to right, #ffffff00 0%, rgba(255, 255, 255, 0.1) 50%, #ffffff00 100%);
}

.modal-crypto .input-loading.fade-leave-active {
  transition: opacity 0.5s;
}

.modal-crypto .input-loading.fade-leave-to {
  opacity: 0;
}

.modal-crypto .input-content {
  width: 100%;
  height: 100%;
  position: relative;
}

.modal-crypto .input-content input {
  width: 100%;
  height: 63px;
  padding: 0 45px 0 25px;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  background: transparent;
}

.modal-crypto .input-content button {
  height: 23px;
  position: absolute;
  top: 50%;
  right: 22px;
  transform: translate(0, -50%);
}

.modal-crypto .input-content button svg {
  fill: #57819b;
  transition: fill 0.3s ease;
}

.modal-crypto .input-content button:hover svg {
  fill: #ffffff;
}

.modal-crypto .stepper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 80px;
  width: 100%;
}

.modal-crypto .step {
  display: flex;
  align-items: center;
  flex: 1;
}

.modal-crypto .step:nth-of-type(4) {
  flex: 0;
}

.modal-crypto .step:nth-of-type(4) .label {
  left: auto;
  right: 0;
  transform: translateX(0);
}

.modal-crypto .step:nth-of-type(1) .label {
  left: 0;
  transform: translateX(0);
}

.modal-crypto .step .label-group {
  position: relative;
}

.modal-crypto .circle {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #396682;
  border: 2px solid #396682;
}

.modal-crypto .label {
  margin-left: 8px;
  color: #396682;
  position: absolute;
  font-size: 10px;
  font-weight: 600;
  left: 50%;
  transform: translateX(-60%);
  top: -20px;
}

.modal-crypto .line {
  width: 100%;
  height: 2px;
  background-color: #396682;
  transition:
    background-color 0.5s,
    background-image 0.5s;
}

.modal-crypto .active .circle {
  background-color: #1ede53;
  border-color: #1ede53;
}

.active .label {
  color: #ffffff;
}

.completed .circle {
  background-color: #1ede53;
  border-color: #1ede53;
}

.completed .line {
  background-color: #1ede53;
}

.completed .label {
  color: #ffffff;
}

.gradient {
  background-image: linear-gradient(to right, #1ede53, #396682);
}

@keyframes loading_animation {
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@media only screen and (max-width: 840px) {
  .modal-crypto {
    width: calc(100vw - 20px);
    padding: 25px 15px 40px 15px;
  }

  .modal-crypto .deposit-rate {
    width: 100%;
  }

  .modal-crypto .rate-content span:nth-of-type(2) {
    display: none;
  }

  .modal-crypto .content-element {
    width: calc(50% - 15.3px);
  }

  .modal-crypto .cashapp-content {
    flex-direction: column;
  }

  .modal-crypto button.button-deposit {
    margin-top: 20px;
    width: 100%;
  }
  .modal-crypto .cashapp-column2 {
    margin-top: 10px;
  }

  .modal-crypto .info-qrcode {
    margin-top: 10px;
  }
}
</style>
