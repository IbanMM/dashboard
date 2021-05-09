<template>
  <div class="chart">
    <div class="row">
      <div class="col-xs-12 col-lg-8">
        <h2 class="chart_tit">
          {{ tit }}
        </h2>
        <div class="chart_amount_container">
          <strong class="chart_amount">{{ amount }}</strong>
          <span class="chart_amount_tit">{{ amountTit }}</span>
        </div>
        <div class="flex-xs justify-between-xs align-end-xs">
          <div v-for="(bar,index) in bars" :key="index">
            <div class="chart_bar" :style="barStyle(index,bar.size)" />
            <span class="chart_bar_letter">{{ bar.letter }}</span>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-lg-4 flex-xs justify-center-xs chart_circles">
        <svg
          class="chart_circle"
          :height="radius * 2"
          :width="radius * 2"
          :viewBox="`0 0 ${radius * 2} ${radius * 2}`"
        >
          <circle
            :stroke="color"
            :style="{ strokeDashoffset: strokeDashoffset }"
            :stroke-width="stroke"
            stroke-linecap="round"
            stroke-opacity="0.1"
            fill="transparent"
            :r="normalizedRadius"
            :cx="radius"
            :cy="radius"
          />
        </svg>
        <svg
          class="chart_circle chart_circle_dynamic"
          :height="radius * 2"
          :width="radius * 2"
          :viewBox="`0 0 ${radius * 2} ${radius * 2}`"
        >
          <circle
            :stroke="color"
            :stroke-dasharray="circumference + ' ' + circumference"
            :style="{ strokeDashoffset: strokeDashoffset }"
            :stroke-width="stroke"
            stroke-linecap="round"
            fill="transparent"
            :r="normalizedRadius"
            :cx="radius"
            :cy="radius"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tit: {
      type: String,
      default: ''
    },
    amount: {
      type: Number,
      default: 0
    },
    amountTit: {
      type: String,
      default: ''
    },
    bars: {
      type: Array,
      default: function () { return [] }
    },
    color: {
      type: String,
      default: '#0077ff'
    },
    radius: {
      type: Number,
      default: 80
    },
    progress: {
      type: Number,
      default: 65
    }
  },
  data () {
    return {
      normalizedRadius: 0,
      circumference: 0,
      stroke: 8 // Border size of the circle chart
    }
  },
  computed: {
    /**
     * Circle chart size
     */
    strokeDashoffset () {
      return this.circumference - this.progress / 100 * this.circumference
    }
  },
  created () {
    this.normalizedRadius = this.radius - this.stroke * 2
    this.circumference = this.normalizedRadius * 2 * Math.PI
  },
  methods: {
    /**
     * Styles for every bar
     */
    barStyle (index, size) {
      const styles = {
        height: size + 'rem',
        backgroundColor: this.color
      }
      if (index % 2 !== 0) {
        styles.opacity = 0.5
      }
      return styles
    }
  }
}
</script>

<style lang="scss" scoped>
  .chart_tit {
    font-weight: 700;
    font-size: 0.9rem;
    margin-bottom: 2rem;
  }
  .chart_amount_container {
    padding-bottom: 1.3rem;
    @include media-up('lg') {
      padding-bottom: 0;
    }
  }
  .chart_amount {
    font-size: 1.5rem;
    font-weight: 700;
  }
  .chart_amount_tit {
    font-size: 0.9rem;
    color: $grey-300;
    display: inline-block;
    margin-left: 0.5rem;
  }
  .chart {
    padding: 1.3rem;
  }
  .chart_bar {
    width: 0.7rem;
    border-radius: 0.25rem;
    background-color: #000;
    transition: height .2s linear;
  }
  .chart_bar_letter {
    color: $grey-600;
    display: block;
    font-size: 0.8rem;
    padding-top: 0.2rem;
    text-align: center;
  }
  .chart_circles {
    position: relative;
    min-height: 8.75rem;
  }
  .chart_circle {
    position: absolute;
    transform: rotate(270deg);
  }
</style>
