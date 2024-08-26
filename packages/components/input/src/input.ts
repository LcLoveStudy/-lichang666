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
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  maxlength: {
    type: [Number, String],
    default: undefined
  },
  showCount: {
    type: Boolean,
    default: false
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
  },
  autofocus: {
    type: Boolean,
    default: false
  },
  autocomplete: {
    type: String as PropType<'off' | 'on'>,
    default: false
  }
}
export type LcInputProps = Readonly<typeof inputProps>
