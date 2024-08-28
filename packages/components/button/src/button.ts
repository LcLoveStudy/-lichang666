import { PropType } from 'vue'
import { LcIconInstance } from '@lichang666/design-vue'

export const buttonProps = {
  type: {
    type: String as PropType<'primary' | 'warning' | 'error' | 'default'>,
    default: 'default'
  },
  text: {
    type: Boolean,
    default: false
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
  round: {
    type: Boolean,
    default: false
  },
  circle: {
    type: Boolean,
    default: false
  },
  textSpace: {
    type: Number,
    default: 0
  },
  icon: {
    type: Object as PropType<LcIconInstance>
  }
}
export type LcButtonProps = Readonly<typeof buttonProps>
