<template>
    <div class="portlet portlet-blue box">
        <div class="portlet-header">
            <div class="caption" contenteditable @input="handChange($event.target.value)">{{ getProps('portletTitle','') }}<h1>sdfsdf</h1><div>sdfs</div></div>
            <div class="tools" v-if="getProps('portletTools',false)"><i class="fa" :class="classtool" @click="handClick"></i><i data-toggle="modal" data-target="#modal-config" class="fa fa-cog"></i><i class="fa fa-refresh"></i>
            </div>
        </div>
        <div class="portlet-body pan" v-if="isActive">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import langConfig from '~/lang'

export default {
    name: 'BtPortlet',
    props: ['portletTitle', 'portletTools', 'portletActive', 'componentData'],
    data() {
        return {
            langConfig,
            isActive: this.getProps(this.portletActive, false),
            classtool: this.GetToolUpDown()
        }
    },
    computed: {

    },
    methods: {
        GetToolUpDown() {
            let classtool = 'fa-chevron-down'
            if (this.isActive) {
                classtool = 'fa-chevron-up'
            }
            return classtool
        },
        handClick() {
            this.isActive = !this.isActive
            this.classtool = this.GetToolUpDown()

        },
        handChange(value){
            console.log(value)
        }
    }
}
</script>
