//First import she schema creator
import createSchema from 'part:@sanity/base/schema-creator'

//Import schema types from any pluging that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

//import our document product and banner
import product from './product'
import banner from './banner'

//give our schema to the builder and provide the result to sanity

export default createSchema({
  //name our schema
  name: 'default',
  //then proceed to concatenate our document type
  //to the ones provided by any pluging that are installed
  types: schemaTypes.concat([
    //add our document here
    product,
    banner,
  ]),
})

// export const schemaTypes = []
