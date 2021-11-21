import { defineComponent } from 'vue'

import { FiledPropsDefine } from '../types'

export default defineComponent({
  name: 'NumberFeild',
  props: FiledPropsDefine,
  setup(props) {
    return () => {
      const { value, onChange } = props
      const handleChange = (e: any) => {
        const value = e.target.value
        const num = Number(value)
        if (Number.isNaN(num)) {
          onChange(undefined)
        } else {
          onChange(num)
        }
      }
      return <input type="number" value={value} onInput={handleChange} />
    }
  },
})
