<template>
  <div>
    <div v-if="tableData.length">
      <div class="display-none-xs flex-xl">
        <div v-for="(item,index) in tableHeader" :key="index" class="table_header" :class="item.class">
          <span>{{ item.label }}</span>
        </div>
        <div class="table_header col-xl-2 flex-lg justify-end-lg">
          <span class="table_header_status">Status</span>
        </div>
      </div>
      <div>
        <div v-for="(dataItem,index) in tableData" :key="index" class="table_row_container">
          <div class="flex-xl align-items-lg table_row">
            <div v-for="(headerItem,indexh) in tableHeader" :key="indexh" :class="[headerItem.class]" :style="dataItemClass(headerItem)">
              <span v-if="headerItem.key==='time'">{{ randomTime }}</span>
              <span v-else-if="headerItem.subkey">{{ dataItem[headerItem.key][headerItem.subkey] }}</span>
              <span v-else>{{ dataItem[headerItem.key] }}</span>
            </div>
            <div class="col-xl-2 flex-xs justify-end-xs">
              <button-ui
                :text="index > 5 ? 'Open' : 'Sent'"
                :state="index > 5 ? 'light' : 'primary'"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="flex-xs justify-center-xs">
      <loading
        :color="'#0077ff'"
        :color-background="'#b4bac6'"
        :size="4.6875"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tableHeader: {
      type: Array,
      default: function () { return [] }
    },
    tableData: {
      type: Array,
      default: function () { return [] }
    }
  },
  computed: {
    /**
     * Generate a random time as we dont get it from the API
     * https://stackoverflow.com/questions/45302779/javascript-random-generate-time-in-12-hour-format
     */
    randomTime () {
      const hrs = Math.round(Math.random() * 12)
      const mins = Math.round(Math.random() * 60)
      const hFormat = (hrs < 10 ? '0' : '')
      const mFormat = (mins < 10 ? '0' : '')
      const amPm = (hrs < 12 ? 'AM' : 'PM')
      return String(hFormat + hrs + ':' + mFormat + mins + ' ' + amPm)
    }
  },
  methods: {
    /**
     * Return styles for each data item
     */
    dataItemClass (headerItem) {
      const styles = {}
      if (headerItem.bold) {
        styles.fontWeight = '700'
        styles.color = '#000'
      } else {
        styles.color = '#8a96a0'
      }
      return styles
    }
  }
}
</script>

<style lang="scss" scoped>
  .table_header {
    text-transform: uppercase;
    color: $grey-100;
    font-size: 0.7rem;
  }
  .table_header_status {
    margin-right: 1.2rem;
  }
  .table_row_container {
    &:last-child {
      .table_row {
        border-bottom: 0;
      }
    }
  }
  .table_row {
    border-bottom: 1px solid rgba($grey-100, 0.2);
    padding: 1.3rem 0;
    @include media-up('xl') {
      border-bottom: none;
      padding-bottom: 0;
      padding-top: 0;
    }
    &:hover {
      background-color: rgba($grey-100, 0.1);
    }
  }
</style>
