import soundSuccess from '@/assets/sounds/success.mp3'
import soundError from '@/assets/sounds/error.mp3'
import soundExplosion from '@/assets/sounds/explosion.mp3'
import soundTick from '@/assets/sounds/tick.mp3'
import soundUnbox from '@/assets/sounds/unbox.mp3'
import soundCash from '@/assets/sounds/cash.mp3'

const state = {
  soundVolume:
    localStorage.getItem('soundVolume') === null
      ? 0.6
      : Number(localStorage.getItem('soundVolume')),
  soundDuels:
    localStorage.getItem('soundDuels') === null ? 1 : Number(localStorage.getItem('soundDuels')),
  soundMines:
    localStorage.getItem('soundMines') === null ? 1 : Number(localStorage.getItem('soundMines')),
  soundTowers:
    localStorage.getItem('soundTowers') === null ? 1 : Number(localStorage.getItem('soundTowers')),
  soundBattles:
    localStorage.getItem('soundBattles') === null
      ? 1
      : Number(localStorage.getItem('soundBattles')),
  soundSuccess: new Audio(soundSuccess),
  soundError: new Audio(soundError),
  soundExplosion: new Audio(soundExplosion),
  soundTick: new Audio(soundTick),
  soundUnbox: new Audio(soundUnbox),
  soundCash: new Audio(soundCash)
}

const getters = {
  soundVolume: (state) => state.soundVolume,
  soundDuels: (state) => state.soundDuels,
  soundMines: (state) => state.soundMines,
  soundTowers: (state) => state.soundTowers,
  soundBattles: (state) => state.soundBattles,
  soundSuccess: (state) => state.soundSuccess,
  soundError: (state) => state.soundError,
  soundExplosion: (state) => state.soundExplosion,
  soundTick: (state) => state.soundTick,
  soundUnbox: (state) => state.soundUnbox,
  soundCash: (state) => state.soundCash
}

const mutations = {
  sound_set_volume(state, value) {
    state.soundVolume = value
  },
  sound_set_duels(state, value) {
    state.soundDuels = value
  },
  sound_set_mines(state, value) {
    state.soundMines = value
  },
  sound_set_towers(state, value) {
    state.soundTowers = value
  },
  sound_set_battles(state, value) {
    state.soundBattles = value
  }
}

const actions = {
  soundSetVolume({ commit }, value) {
    localStorage.setItem('soundVolume', value)
    commit('sound_set_volume', value)
  },
  soundSetDuels({ commit }, value) {
    commit('sound_set_duels', value)
    localStorage.setItem('soundDuels', value)
  },
  soundSetMines({ commit }, value) {
    commit('sound_set_mines', value)
    localStorage.setItem('soundMines', value)
  },
  soundSetTowers({ commit }, value) {
    commit('sound_set_towers', value)
    localStorage.setItem('soundTowers', value)
  },
  soundSetBattles({ commit }, value) {
    commit('sound_set_battles', value)
    localStorage.setItem('soundBattles', value)
  }
}

const sound = {
  state,
  mutations,
  actions,
  getters
}

export default sound
