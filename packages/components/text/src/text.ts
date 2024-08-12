import { PropType } from 'vue'

export const textProps = {
  type: {
    type: String as PropType<'primary' | 'warning' | 'error' | 'default'>,
    default: 'default'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  color: {
    type: String
  },
  loading: {
    type: Boolean,
    default: false
  },
  textSpace: {
    type: Number,
    default: 0
  }
}
export type LcTextProps = Readonly<typeof textProps>
