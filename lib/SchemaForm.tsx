import { defineComponent, PropType } from 'vue'

import { Schema, SchemaTypes } from './types'
import SchemaItem from './SchemaItem'

export default defineComponent({
  props: {
    schema: {
      type: Object as PropType<Schema>,
      required: true,
    },
    value: {
      required: true,
    },
    onChange: {
      type: Function as PropType<(v: any) => void>,
      required: true,
    },
  },
  name: 'SchemaForm',
  setup(props, { slots, emit, attrs }) {
    return () => {
      const { schema, value } = props
      const handleChange = (v: any) => {
        props.onChange(v)
      }
      return (
        <SchemaItem schema={schema} value={value} onChange={handleChange} />
      )
    }
  },
})
