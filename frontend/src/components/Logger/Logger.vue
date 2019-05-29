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
      <th>time</th>
      <th>transport header</th>
      <th>priority</th>
      <th>route</th>
      <th>data specifier</th>
      <th>hex</th>
      <th>ascii</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(frame, index) in frames" :key="`frame-${index}`">
      <td>{{ frame.time }}</td>
      <td>{{ frame.transportHeader }}</td>
      <td :class="frame.priority">{{ frame.priority }}</td>
      <td>
        <p>{{ frame.routeSpecifier.source }}</p>
        <p>{{ frame.routeSpecifier.destination }}</p>
      </td>

      <td>
        <p v-if="frame.dataSpecifier.subjectId">
          {{ frame.dataSpecifier.subjectId }}
        </p>
        <div v-if="frame.dataSpecifier.serviceId" class="inline">
          <p>{{ frame.dataSpecifier.serviceId }}</p>
          <p>{{ frame.dataSpecifier.selector }}</p>
        </div>

        <div v-if="frame.dataSpecifier.metadata" class="inline" style="float: right;">
          <p v-if="frame.dataSpecifier.metadata.name">
            {{ frame.dataSpecifier.metadata.name }}
          </p>

          <p v-if="frame.dataSpecifier.metadata.version">
            {{ frame.dataSpecifier.metadata.version }}
          </p>
        </div>
      </td>

      <td>{{ frame.dataHex }}</td>
      <td>{{ frame.dataAscii }}</td>
    </tr>
  </tbody>
  </table>

  <p v-if="error !== ''"> {{ error }} </p>
  </div>
</template>

<script>
import axios from 'axios'
import ApiRoutes from '@/api/ApiRoutes'

export default {
  name: 'Logger',
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

<style scoped>
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
