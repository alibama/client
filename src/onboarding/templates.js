// import imgBlank from './assets/template-blank.svg'
// import imgStartup from './assets/template-startup.svg'
import imgMultisig from './assets/template-multisig.svg'
import imgDemocracy from './assets/template-democracy.svg'

const Templates = new Map()

// export const Blank = Symbol('Blank')
// export const Startup = Symbol('Startup')
export const Multisig = Symbol('Multisig')
export const Democracy = Symbol('Democracy')

// Map.set(Blank, { label: 'Blank', icon: imgBlank })
// Map.set(Startup, { label: 'Startup', icon: imgStartup })
Templates.set(Democracy, {
  name: 'democracy',
  label: 'Token project with Democracy',
  icon: imgDemocracy,
})
Templates.set(Multisig, {
  name: 'multisig',
  label: 'Token project with Multisig',
  icon: imgMultisig,
})

export default Templates
