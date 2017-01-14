<template>
  <div :id="id" :style="{ width: width + 'px' }" class="rail">
    <svg class="bead" style="left: 0px; top: 0px;" :id="fiveBeadId" @click="toggleBead(fiveBeadId)" viewBox="0 0 150 100">
        <polygon stroke="white" style="stroke-width: 2px;" points="0 49 50 0 100 0 150 49" fill="khaki" />
        <polygon stroke="white" style="stroke-width: 2px;" points="0 51 50 100 100 100 150 51" fill="#A38A00" />
    </svg>
    <svg viewBox="0 0 150 10"  :style="{left: '0px', top: 200 * (width / 150) + 'px', position: 'absolute'}" :id="beadSeparatorId">
        <line stroke="#BBB" stroke-width="20" x1="0" y1="0" x2="150" y2="0" />
    </svg>
    <svg class="bead" :id="oneBeadId" :style="{left: '0px', top: 310 * (width / 150) + 'px'}"  @click="toggleBead(oneBeadId)" viewBox="0 0 150 100">
      <polygon stroke="white" style="stroke-width: 2px;" points="0 49 50 0 100 0 150 49" fill="khaki" />
      <polygon stroke="white" style="stroke-width: 2px;" points="0 51 50 100 100 100 150 51" fill="#A38A00" />
    </svg> <br />
    <svg class="bead" :id="twoBeadId"  :style="{left: '0px', top: 410 * (width / 150) + 'px'}"  @click="toggleBead(twoBeadId)" viewBox="0 0 150 100">
      <polygon stroke="white" style="stroke-width: 2px;" points="0 49 50 0 100 0 150 49" fill="khaki" />
      <polygon stroke="white" style="stroke-width: 2px;" points="0 51 50 100 100 100 150 51" fill="#A38A00" />
    </svg> <br />
    <svg class="bead" :id="threeBeadId" :style="{left: '0px', top: 510 * (width / 150) + 'px'}"  @click="toggleBead(threeBeadId)" viewBox="0 0 150 100">
      <polygon stroke="white" style="stroke-width: 2px;" points="0 49 50 0 100 0 150 49" fill="khaki" />
      <polygon stroke="white" style="stroke-width: 2px;" points="0 51 50 100 100 100 150 51" fill="#A38A00" />
    </svg> <br />
    <svg class="bead" :id="fourBeadId" :style="{left: '0px', top: 610 * (width / 150) + 'px'}"  @click="toggleBead(fourBeadId)"  viewBox="0 0 150 100">
      <polygon stroke="white" style="stroke-width: 2px;" points="0 49 50 0 100 0 150 49" fill="khaki" />
      <polygon stroke="white" style="stroke-width: 2px;" points="0 51 50 100 100 100 150 51" fill="#A38A00" />
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
  props: ['width', 'railNumber', 'reset', 'value'],
  watch: {
    reset () {
      this.beadState = [false, false, false, false, false]
      this.updateBeads()
    }
  },
  mounted () {
    if (this.value) {
      this.setBeads(this.value[Number(this.railNumber - 1)])
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
          this.beadState = [true, true, false, false, true]
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

      const widthRatio = this.width / 150

      this.beadState[0] ? Velocity(oneBead, { top: 210 * widthRatio }, 50) : Velocity(oneBead, { top: 310 * widthRatio }, 50)
      this.beadState[1] ? Velocity(twoBead, { top: 310 * widthRatio }, 50) : Velocity(twoBead, { top: 410 * widthRatio }, 50)
      this.beadState[2] ? Velocity(threeBead, { top: 410 * widthRatio }, 50) : Velocity(threeBead, { top: 510 * widthRatio }, 50)
      this.beadState[3] ? Velocity(fourBead, { top: 510 * widthRatio }, 50) : Velocity(fourBead, { top: 610 * widthRatio }, 50)
      this.beadState[4] ? Velocity(fiveBead, { top: 100 * widthRatio }, 50) : Velocity(fiveBead, { top: 0 }, 50)

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

      this.sound.play()
      this.$emit('value-change', this.beadValue, this.railNumber)
    },
    toggleBead (beadId) {
      if (!this.value) {
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
}

.bead {
  position: absolute;
  opacity: 0.63;
  cursor: pointer;
}

.bead:hover {
  opacity: 1;
}

</style>
