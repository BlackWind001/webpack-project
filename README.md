# node-vqsfvb

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/node-vqsfvb)


Added a dev dependency called `webpack-deadcode-plugin` that will help identify unused files.
Also added a script to utilize the plugin.
The implementation is similar to the plugin used in this (video)[https://egghead.io/lessons/webpack-delete-unused-code-with-webpack-and-unused-files-webpack-plugin] which is not supported on Webpack 5.
Hence, the `webpack-deadcode-plugin` is being used as an alternative.
The inspiration to find out about unused code in project comes from this stackoverflow question that I can relate to: https://stackoverflow.com/questions/69594518/how-to-find-unused-images-in-public-folder-in-react-app