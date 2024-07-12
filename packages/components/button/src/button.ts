import { PropType } from 'vue'

export const buttonProps = {
  type: {
    type: String as PropType<'primary' | 'warning' | 'error' | 'default'>,
    default: 'default'
  },
  plain: {
    type: Boolean,
    default: false
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
