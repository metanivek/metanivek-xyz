This is an experimental gallery for all of my NFTs on hic et nunc. You are free
to use this code however you like!

While I am making this for my own purposes and experimentation, it should be
straightforward to fork and use for your own gallery with some tweaks. Look in
`lib/objkt.js` for the main hicdex query and variables. You would want to change
`addressNames`, `include_tags`, `aspectOverrides`, and `gateway`. You would want
to also change the name for the `DAppClient` in `lib/tezos.js` too. My current
host for the site is Netlify, so I know it runs well there. :)

The site currently only supports the OBJKT types that I have minted but it
wouldn't be too difficult to add support for other types.

Feel free to DM me on Twitter if you have any questions. If you build anything
I'd love to see it too!
