import { defineComponent } from 'vue'

import { FiledPropsDefine } from '../types'

export default defineComponent({
  name: 'StringFeild',
  props: FiledPropsDefine,
  setup(props) {
    return () => {
      const { value, onChange } = props
      const handleChange = (e: any) => {
        onChange(e.target.value)
      }
      return <input type="text" value={value} onInput={handleChange} />
    }
  },
})
