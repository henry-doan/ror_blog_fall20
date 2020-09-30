            index
              | 
              app (nav routes)
  home     about     posts (HOC)     404page        context globals
                      /  \                           provider
             add   form   list                         consumer
                           \
                            post delete
                            /  \ 
                  Comments (Hoc) form update
                      /\
                  form  list

prop drilling  

import { Fragment } from 'react'

<Fragment>
</Fragment>


<>
</>