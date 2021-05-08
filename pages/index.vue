<template>
  <main class="main">
    <div class="row">
      <div class="col-lg-6">
        <page-header text="Overview" />
      </div>
      <div class="col-lg-6 flex-lg justify-end-lg">
        <page-header-bar
          :bar-width="300"
          :bar-fill="100"
          :bar-number="643"
          :bar-text="'insertions needed to complete'"
        />
      </div>
    </div>
    <div class="row page-content">
      <div class="col-lg-5">
        <chart
          :tit="'General Results'"
          :amount="9041"
          :amount-tit="'Followers'"
          :bars="bars"
        />
      </div>
      <div class="col-lg-5">
        <chart
          :tit="'Ratings by Category'"
          :amount="3900"
          :amount-tit="'Followers'"
          :bars="bars"
          :color="'#f0166d'"
        />
      </div>
      <div class="col-lg-2">
        chart
      </div>
      <div class="col-lg-12">
        table
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data () {
    return {
      bars: [
        {
          size: 4,
          letter: 'a'
        },
        {
          size: 2.5,
          letter: 'b'
        },
        {
          size: 1.6,
          letter: 'c'
        },
        {
          size: 4,
          letter: 'd'
        },
        {
          size: 3.2,
          letter: 'e'
        },
        {
          size: 1,
          letter: 'f'
        },
        {
          size: 5,
          letter: 'g'
        },
        {
          size: 4.8,
          letter: 'h'
        },
        {
          size: 2,
          letter: 'i'
        },
        {
          size: 1.2,
          letter: 'j'
        },
        {
          size: 2,
          letter: 'k'
        },
        {
          size: 3,
          letter: 'l'
        },
        {
          size: 4,
          letter: 'm'
        },
        {
          size: 1,
          letter: 'n'
        }
      ]
    }
  }
}
</script>
