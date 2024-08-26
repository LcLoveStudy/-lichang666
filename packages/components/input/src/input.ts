import { PropType } from 'vue'

export const inputProps = {
  placeholder: {
    type: String,
    default: '请输入内容'
  },
  type: {
    type: String as PropType<'text' | 'textarea' | 'password'>,
    default: 'text'
  },
  resize: {
    type: String as PropType<'none' | 'both' | 'horizontal' | 'vertical'>,
    default: 'vertical'
  },
  rows: {
    type: Number,
    default: 2
  },
  cols: {
    type: Number,
    default: 20
  }
}
export type LcInputProps = Readonly<typeof inputProps>
