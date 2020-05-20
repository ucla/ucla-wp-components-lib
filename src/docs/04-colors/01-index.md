---
title: Colors
---

## Colors

UCLA official colors communicate identity and are the building blocks of accessibility. Use of the colors are a required brand element. Learn more about UCLA Brand colors on the [UCLA Brand Guidelines page](http://brand.ucla.edu/identity/colors).

We define the following variables in a [Sass](https://sass-lang.com/) stylesheet located at `./src/scss/utilities/_colors.scss`. Use Sass to compile it back to CSS.

> **NOTE**: ADA requirements, a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text, and a contrast ratio of at least 3:1 for graphics and user interface components (such as form input borders). Large text is defined as 14 point (typically 18.66px) and bold or larger, or 18 point (typically 24px) or larger.

### Layout Colors

These are colors used for backgrounds and graphic elements.

Variable | Hex | Sample
------------ | ------------- | -------------
`$ucla-blue` | #2774AE | ![#2774AE](https://via.placeholder.com/15/2774AE/000000?text=+)
`$ucla-gold` | #FFD100 | ![#FFD100](https://via.placeholder.com/15/FFD100/000000?text=+)
`$darkest-blue` | #003B5C | ![#003B5C](https://via.placeholder.com/15/003B5C/000000?text=+)
`$darker-blue` | #005587 | ![#005587](https://via.placeholder.com/15/005587/000000?text=+)
`$white` | #FFFFFF | ![#FFFFFF](https://via.placeholder.com/15/FFFFFF/000000?text=+)
`$grey-5` | #F2F2F2 | ![#F2F2F2](https://via.placeholder.com/15/F2F2F2/000000?text=+)
`$lightest-grey-2` | #EBEBEB | ![#EBEBEB](https://via.placeholder.com/15/EBEBEB/000000?text=+)
`$grey-10` | #E5E5E5 | ![#E5E5E5](https://via.placeholder.com/15/E5E5E5/000000?text=+)
`$medium-grey3` | #CCCCCC | ![#CCCCCC](https://via.placeholder.com/15/CCCCCC/000000?text=+)

### Text Colors

These colors are used for text.

Variable | Hex | Sample
------------ | ------------- | -------------
`$white` | #FFFFFF | ![#FFFFFF](https://via.placeholder.com/15/FFFFFF/000000?text=+)
`$grey-10` | #E5E5E5 | ![#E5E5E5](https://via.placeholder.com/15/E5E5E5/000000?text=+)
`$grey-40` | #999 | ![#999](https://via.placeholder.com/15/999/000000?text=+)
`$grey-60` | #666 | ![#666](https://via.placeholder.com/15/666/000000?text=+)
`$grey-80` | #333 | ![#333](https://via.placeholder.com/15/333/000000?text=+)
`$black` | #000000 | ![#000000](https://via.placeholder.com/15/000000/000000?text=+)

### Interactive Colors - Light Background

These colors are used for interactive states of buttons, links and other interactive elements.

Variable | Hex | Sample
------------ | ------------- | -------------
`$default-state` | #00598C | ![#00598C](https://via.placeholder.com/15/00598C/000000?text=+)
`$hover-state` | #0079BF | ![#0079BF](https://via.placeholder.com/15/0079BF/000000?text=+)
`$active-state` | #003B5C | ![#003B5C](https://via.placeholder.com/15/003B5C/000000?text=+)
`$focus-state` | #0079BF | ![#0079BF](https://via.placeholder.com/15/0079BF/000000?text=+)
`$disabled-state` | #757575 | ![#757575](https://via.placeholder.com/15/757575/000000?text=+)
`$visited-state` | #5223B0 | ![#5223B0](https://via.placeholder.com/15/5223B0/000000?text=+)

### Interactive Colors - Dark Background

Variable | Hex | Sample
------------ | ------------- | -------------
`$default-state-dark` | #FFD100 | ![#FFD100](https://via.placeholder.com/15/FFD100/000000?text=+)
`$hover-state-dark` | #FFE500 | ![#FFE500](https://via.placeholder.com/15/FFE500/000000?text=+)
`$active-state-dark` | #FFBF0F | ![#FFBF0F](https://via.placeholder.com/15/FFBF0F/000000?text=+)
`$focus-state-dark` | #FFE500 | ![#FFE500](https://via.placeholder.com/15/FFE500/000000?text=+)
`$disabled-state-dark` | #E5E5E5 | ![#E5E5E5](https://via.placeholder.com/15/E5E5E5/000000?text=+)
`$visited-state-dark` | #CFC3F3 | ![#CFC3F3](https://via.placeholder.com/15/CFC3F3/000000?text=+)

### Denotive Colors
These colors have specific meanings like error and success messaging.

Variable | Hex | Sample
------------ | ------------- | -------------
`$error-red` | #D60000 | ![#D60000](https://via.placeholder.com/15/D60000/000000?text=+)
`$success-green` | #007339 | ![#007339](https://via.placeholder.com/15/007339/000000?text=+)
`$warning-orange` | #F57F17 | ![#F57F17](https://via.placeholder.com/15/F57F17/000000?text=+)
`$primary-alert-blue` | #8BB8E8 | ![#8BB8E8](https://via.placeholder.com/15/8BB8E8/000000?text=+)
`$secondary-alert-grey` | #999 | ![#999](https://via.placeholder.com/15/999/000000?text=+)

### TODO:
- convert variables to design tokens
  - more about design tokens: https://medium.com/eightshapes-llc/tokens-in-design-systems-25dd82d58421
- convert color tables to swatches
  - example: https://bits.24ways.org/docs/tokens
  - source code here: https://github.com/24ways/frontend
