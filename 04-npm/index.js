/*
    - npm install package-name
        1. download to node_modules folder

        2. add dependencies:
            ^ => find the newest 4.x.x
            ~ => find the newest 4.17.x
            * => find the newest version

        3. create package-lock.json

        4. Examples
            npm install loadsh@3.2.0
            npm install loadsh@">3.2.0"

    - Install a global package: npm install package-name -g

    - Remove package: npm uninstall package-name

    - package-lock.json
        https://docs.npmjs.com/cli/v6/configuring-npm/package-lock-json
    
    - package.json
        scripts: The "scripts" property of your package.json file supports 
        a number of built-in scripts and their preset life cycle events as 
        well as arbitrary scripts. These all can be executed by running npm
        run-script <stage> or npm run <stage> for short.
*/
