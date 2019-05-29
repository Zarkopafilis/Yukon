<!--
 * Copyright (C) 2019 UAVCAN Development Team  <uavcan.org>
 * This software is distributed under the terms of the MIT License.
 *
 * Author: Theodoros Ntakouris <zarkopafilis@gmail.com>
 -->

<template>
  <td>
    <p v-if="dataSpecifier.subjectId">
      {{ dataSpecifier.subjectId }}
    </p>
    <div v-if="dataSpecifier.serviceId" class="inline">
      <p>{{ dataSpecifier.serviceId }}</p>
      <p>{{ dataSpecifier.selector }}</p>
    </div>

    <div v-if="dataSpecifier.metadata" class="inline" style="float: right;">
      <p v-if="dataSpecifier.metadata.name">
        {{ dataSpecifier.metadata.name }}
      </p>

      <p v-if="dataSpecifier.metadata.version">
        {{ dataSpecifier.metadata.version }}
      </p>
    </div>
  </td>
</template>

<script>
export default {
  name: 'DataSpecifierData',
  props: ['dataSpecifier']
}
</script>

<style>
</style>
