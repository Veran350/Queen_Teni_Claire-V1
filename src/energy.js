  const fs = require('fs')
  let _energyOrg = JSON.parse(fs.readFileSync('./src/energy.json'))

  const addInventorienergy = (sender, energy) => {
        const obj = {id: sender, healtt: energy}
         _energyOrg.push(obj)
        fs.writeFileSync('./src/energy.json', JSON.stringify(_energyOrg))
   }
  const cekDuluJoinAdaApaKagaDiJsonenergy = (sender) => {
            let status = false
            Object.keys(_energyOrg).forEach((i) => {
                if (_energyOrg[i].id === sender) {
                    status = true
                }
            })
            return status
        }
  const addenergy = (sender, amount) => {
            let position = false
            Object.keys(_energyOrg).forEach((i) => {
                if (_energyOrg[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _energyOrg[position].healtt += amount
                fs.writeFileSync('./src/energy.json', JSON.stringify(_energyOrg))
            }
        }
   const kurangenergy = (sender, amount) => {
            let position = false
            Object.keys(_energyOrg).forEach((i) => {
                if (_energyOrg[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _energyOrg[position].healtt -= amount
                fs.writeFileSync('./src/energy.json', JSON.stringify(_energyOrg))
            }
        }
   const getenergy = (sender) => {
            let position = false
            Object.keys(_energyOrg).forEach((i) => {
                if (_energyOrg[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _energyOrg[position].healtt
            }
        }     
        
   module.exports = { addInventorienergy, cekDuluJoinAdaApaKagaDiJsonenergy, addenergy, kurangenergy, getenergy }   