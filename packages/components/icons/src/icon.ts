export const iconProps = {
  size: {
    type: [Number, String],
    default: 16
  },
  color: {
    type: String
  }
}
export type LcIconProps = Readonly<typeof iconProps>
