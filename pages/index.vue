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
    <div class="page-content">
      <div class="row row-border-bottom">
        <div class="col-lg-5 col-border-right">
          <chart
            :tit="'General Results'"
            :amount="9041"
            :amount-tit="'Followers'"
            :bars="bars"
          />
        </div>
        <div class="col-lg-5 col-border-right">
          <chart
            :tit="'Ratings by Category'"
            :amount="3900"
            :amount-tit="'Followers'"
            :bars="bars"
            :color="'#f0166d'"
          />
        </div>
        <div v-if="terms.length" class="col-lg-2 flex-lg flex-col-lg justify-center-lg align-items-lg">
          <ul class="terms_list">
            <li v-for="(term,index) in terms" :key="index" class="terms_list_li flex-xs">
              <span>
                <span class="terms_item terms_item_tit">Term {{ index }}</span>
                <span class="terms_item terms_item_amount">{{ term.amount }}</span>
              </span>
            </li>
          </ul>
        </div>
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
      ],
      terms: [
        {
          amount: '85.00'
        },
        {
          amount: '1.76'
        },
        {
          amount: '33.42'
        },
        {
          amount: '75.11'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.terms_list_li {
  padding: 0.4rem 0;
}
.terms_item {
  text-transform: uppercase;
  font-weight: 700;
  display: inline-block;
  padding: 0.2rem 0;
  font-size: 0.8rem;
}
.terms_item_tit {
  color: $grey-700;
  padding-right: 1rem;
}
.terms_item_amount {
  color: $dark;
}
</style>
