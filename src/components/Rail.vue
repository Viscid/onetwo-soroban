<template>
  <div :id="id" class="rail">
  <svg viewBox="0 0 150 710" :height="height" style="position: relative;">
    <svg class="bead" y="0" :id="fiveBeadId" @click="toggleBead(fiveBeadId)">
        <polygon stroke="white" style="stroke-width: 2px;" points="0 49 50 0 100 0 150 49" fill="khaki" />
        <polygon stroke="white" style="stroke-width: 2px;" points="0 51 50 100 100 100 150 51" fill="#A38A00" />
    </svg>
    <svg y="205" :id="beadSeparatorId">
        <line stroke="#BBB" stroke-width="10" x1="0" y1="0" x2="150" y2="0" />
    </svg>
    <svg class="bead" y="310" :id="oneBeadId" @click="toggleBead(oneBeadId)">
      <polygon stroke="white" style="stroke-width: 2px;" points="0 49 50 0 100 0 150 49" fill="khaki" />
      <polygon stroke="white" style="stroke-width: 2px;" points="0 51 50 100 100 100 150 51" fill="#A38A00" />
    </svg> <br />
    <svg class="bead" y="410" :id="twoBeadId" @click="toggleBead(twoBeadId)">
      <polygon stroke="white" style="stroke-width: 2px;" points="0 49 50 0 100 0 150 49" fill="khaki" />
      <polygon stroke="white" style="stroke-width: 2px;" points="0 51 50 100 100 100 150 51" fill="#A38A00" />
    </svg> <br />
    <svg class="bead" y="510" :id="threeBeadId" @click="toggleBead(threeBeadId)">
      <polygon stroke="white" style="stroke-width: 2px;" points="0 49 50 0 100 0 150 49" fill="khaki" />
      <polygon stroke="white" style="stroke-width: 2px;" points="0 51 50 100 100 100 150 51" fill="#A38A00" />
    </svg> <br />
    <svg class="bead" y="610" :id="fourBeadId" @click="toggleBead(fourBeadId)">
      <polygon stroke="white" style="stroke-width: 2px;" points="0 49 50 0 100 0 150 49" fill="khaki" />
      <polygon stroke="white" style="stroke-width: 2px;" points="0 51 50 100 100 100 150 51" fill="#A38A00" />
    </svg>
  </svg>
  </div>
</template>

<script>
import Velocity from 'velocity-animate'
import { Howl } from 'howler'

export default {
  name: 'Rail',
  data () {
    return {
      beadState: [false, false, false, false, false],
      beadValue: 0,
      id: 'rail-' + this._uid,
      oneBeadId: 'one-bead-' + this._uid,
      twoBeadId: 'two-bead-' + this._uid,
      threeBeadId: 'three-bead-' + this._uid,
      fourBeadId: 'four-bead-' + this._uid,
      fiveBeadId: 'five-bead-' + this._uid,
      beadSeparatorId: 'bead-separator-' + this._uid,
      sound: new Howl({
        src: ['/static/soroban-move.mp3']
      })
    }
  },
  props: ['railNumber', 'reset', 'setValue', 'disabled', 'height', 'disabled'],
  watch: {
    reset () {
      this.beadState = [false, false, false, false, false]
    },
    setValue (newValue) {
      this.setBeads(newValue[Number(this.railNumber - 1)])
    }
  },
  mounted () {
    if (this.setValue) {
      this.setBeads(this.setValue[Number(this.railNumber - 1)])
    }
  },
  methods: {
    setBeads (railValue) {
      switch (railValue) {
        case 0:
          this.beadState = [false, false, false, false, false]
          break
        case 1:
          this.beadState = [true, false, false, false, false]
          break
        case 2:
          this.beadState = [true, true, false, false, false]
          break
        case 3:
          this.beadState = [true, true, true, false, false]
          break
        case 4:
          this.beadState = [true, true, true, true, false]
          break
        case 5:
          this.beadState = [false, false, false, false, true]
          break
        case 6:
          this.beadState = [true, false, false, false, true]
          break
        case 7:
          this.beadState = [true, true, false, false, true]
          break
        case 8:
          this.beadState = [true, true, true, false, true]
          break
        case 9:
          this.beadState = [true, true, true, true, true]
          break
        default:
          this.beadState = [false, false, false, false, false]
          break
      }
      this.updateBeads()
    },
    updateBeads () {
      const oneBead = document.getElementById(this.oneBeadId)
      const twoBead = document.getElementById(this.twoBeadId)
      const threeBead = document.getElementById(this.threeBeadId)
      const fourBead = document.getElementById(this.fourBeadId)
      const fiveBead = document.getElementById(this.fiveBeadId)

      this.beadState[0] ? Velocity(oneBead, { y: 210 }, 50) : Velocity(oneBead, { y: 310 }, 50)
      this.beadState[1] ? Velocity(twoBead, { y: 310 }, 50) : Velocity(twoBead, { y: 410 }, 50)
      this.beadState[2] ? Velocity(threeBead, { y: 410 }, 50) : Velocity(threeBead, { y: 510 }, 50)
      this.beadState[3] ? Velocity(fourBead, { y: 510 }, 50) : Velocity(fourBead, { y: 610 }, 50)
      this.beadState[4] ? Velocity(fiveBead, { y: 100 }, 50) : Velocity(fiveBead, { y: 0 }, 50)

      this.beadValue = 0

      if (this.beadState[0]) {
        this.beadValue = this.beadValue + 1
      }
      if (this.beadState[1]) {
        this.beadValue = this.beadValue + 1
      }
      if (this.beadState[2]) {
        this.beadValue = this.beadValue + 1
      }
      if (this.beadState[3]) {
        this.beadValue = this.beadValue + 1
      }
      if (this.beadState[4]) {
        this.beadValue = this.beadValue + 5
      }

      this.$emit('value-change', this.beadValue, this.railNumber)
    },
    toggleBead (beadId) {
      if (!this.disabled) {
        switch (beadId) {
          case this.oneBeadId:
            this.beadState[0] = !this.beadState[0]
            if (!this.beadState[0]) {
              this.beadState[1] = false
              this.beadState[2] = false
              this.beadState[3] = false
            }
            break
          case this.twoBeadId:
            this.beadState[1] = !this.beadState[1]
            if (!this.beadState[1]) {
              this.beadState[2] = false
              this.beadState[3] = false
            } else {
              this.beadState[0] = true
            }
            break
          case this.threeBeadId:
            this.beadState[2] = !this.beadState[2]
            if (!this.beadState[2]) {
              this.beadState[3] = false
            } else {
              this.beadState[0] = true
              this.beadState[1] = true
            }
            break
          case this.fourBeadId:
            this.beadState[3] = !this.beadState[3]
            if (this.beadState[3]) {
              this.beadState[0] = true
              this.beadState[1] = true
              this.beadState[2] = true
            }
            break
          case this.fiveBeadId:
            this.beadState[4] = !this.beadState[4]
            break
        }
        this.sound.play()
        this.updateBeads()
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rail {
  position: relative;
  user-select: none;
  padding: 5px 0;
}

.bead {
  opacity: 0.63;
  cursor: pointer;
}

.bead:hover {
  opacity: 1;
}

</style>
