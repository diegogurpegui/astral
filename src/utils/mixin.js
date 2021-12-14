import {date} from 'quasar'

export default {
  methods: {
    toProfile(pubkey) {
      this.$router.push('/' + pubkey)
    },

    niceDate(value) {
      return date.formatDate(value * 1000, 'YYYY MMM D h:mm A')
    }
  }
}