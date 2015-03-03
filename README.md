#sunday-shows

USA TODAY's Sunday morning talk show interactive.


Copyright 2015 USA TODAY. All rights reserved. No part of these materials may be reproduced, modified, stored in a retrieval system, or retransmitted, in any form or by any means, electronic, mechanical or otherwise, without prior written permission from USA TODAY.

##Development

The requirements for this project are Node.js, Bower and Grunt. 

To install node with Hombrew:
`brew install node`

Or head over to the [Node website](http://nodejs.org/) and install from there.
Once Node is installed, install Grunt with
`npm install -g grunt-cli`

and install Bower with 
`npm install -g bower`

Once those dependencies are set up, from this repository run `npm install`, then run `grunt`


##Data tools

This project's data tools assume that you have a Python virtual envirement set up, with USA TODAY's Google credentials stored as `$GOOGLE_USER` and `$GOOGLE_PASS` environment variables.

In order for data upload to work, `$FTP_USER`, `$FTP_PASS`, and `$FTP_SERVER` must also be stored as environment variables.

To work with this project's data tools, first install dependencies with `pip install -r requirements.txt`

Once your environment is set up, and dependencies are installed, run `fab updater` to download updated data, run it through the conversion script and upload it to the server.

###Live version:
