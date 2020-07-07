const AdminBro = require('admin-bro')
const User = require('../../models/User')
const Admin = require('../../models/Admin')
const Product = require('../../models/Product')
const dbConnection = require('../../config/dbConnection')

AdminBro.registerAdapter(require('admin-bro-mongoose'))

const newParent = {
  name: 'Gerenciamento de Dados',
  icon: 'fa address-card',
}

const adminBro = new AdminBro({
    resources: [{resource:User, 
      options:{
        parent: newParent,
        properties:{
          encryptedPassword: {
            isVisible: false,
          },
          password:{
            type: 'string',
            isVisible: {
              list: false, edit: true, filter: false, show: false
            }
          }
        }      
      }    
    }, Admin, Product],
    branding: {
      companyName: 'My System',
    },
    rootPath: '/admin',
})




module.exports = adminBro