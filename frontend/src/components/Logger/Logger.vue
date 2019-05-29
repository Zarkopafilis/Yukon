<!--
 * Copyright (C) 2019 UAVCAN Development Team  <uavcan.org>
 * This software is distributed under the terms of the MIT License.
 *
 * Author: Theodoros Ntakouris <zarkopafilis@gmail.com>
 -->

<template>
  <div>
  <!-- Table Contents -->
  <table class="table table-sm table-bordered">
  <thead>
    <tr>
      <th>monotonic</th>
      <th>transport header</th>
      <th>priority</th>
      <th>route</th>
      <th>data specifier</th>
      <th>transfer id</th>
      <th>hex</th>
      <th>ascii</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(frame, index) in frames" :key="`frame-${index}`">
      <MonotonicData :time="frame.monotonic" :index="index"/>
      <TransportHeaderData :header="frame.transportHeader" />
      <PriorityData :priority="frame.priority"/>
      <RouteSpecifierData :routeSpecifier="frame.routeSpecifier" />
      <DataSpecifierData :dataSpecifier="frame.dataSpecifier" />
      <TransferIdData :id="frame.transferId" />
      <FramePayloadData :data="frame.dataHex" />
      <FramePayloadData :data="frame.dataAscii" />
    </tr>
  </tbody>
  </table>

  <p v-if="error !== ''"> {{ error }} </p>
  </div>
</template>

<script>
import axios from 'axios'
import ApiRoutes from '@/api/ApiRoutes'

import PriorityData from './PriorityData'
import MonotonicData from './MonotonicData'
import TransportHeaderData from './TransportHeader/TransportHeaderData'
import TransferIdData from './TransferIdData'
import FramePayloadData from './FramePayloadData'
import DataSpecifierData from './DataSpecifier/DataSpecifierData'
import RouteSpecifierData from './RouteSpecifierData'

export default {
  name: 'Logger',
  components: {
    PriorityData,
    MonotonicData,
    TransportHeaderData,
    TransferIdData,
    FramePayloadData,
    DataSpecifierData,
    RouteSpecifierData
  },
  async mounted () {
    await this.loadInitial()
  },
  data () {
    return {
      loading: false,
      frames: [],
      error: ''
    }
  },
  methods: {
    async loadInitial () {
      this.loading = true
      this.error = ''

      try {
        const response = await axios.get(ApiRoutes.Logger.Get)
        this.frames = this.frames.concat(response.data)
      } catch (e) {
        this.error = e
      }

      this.loading = false
    }
  }
}
</script>

<style>
p, .inline {
  display: inline-block;
  padding-bottom: 0;
  margin-bottom: 0;
}

td, tr {
  margin-bottom: 0;
  padding-bottom: 0;
}
</style>
