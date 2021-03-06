# Trelix: A marketplace for tradable relics
http://trelix.co.in

## Available Scripts

``` 
# install dependencies
yarn

# local development
npm run start

# production build
npm run build
serve -s build
```

## Contracts
### BSC testnet
```
# Collectable Contract (ERC721):
0xef2a21965b83Fb6d9d3D174789d8504B88359608
# Trelix
0x9d1898E224Cb068DAc499199674990A960D8CaD0
```
### Matic Mumbai testnet
```
# Collectable Contract (ERC721)
0xB73764A8D20ceed6E372662F889BA7bE5D9c264c
# Trelix
0x676766FA21022d27992677CaF8Cde63036fBFe78
```

## Overview

Trelix is a marketplace for in-game digital goods like items, skins and collectibles, that facilitates de-centralized exchange of these assets as NFTs.

## Market requirement
A large number of online multiplayer games provide in-game items with randomly generated modifiers, that determine the quality and rarity of the items. These games usually also support extensive customization of play styles that depend on the availability of specific gear. Contemporarily popular strategic trends or ‘Meta’, as gamers call it, are always in development influencing the demand and price of items. Such games widely benefit from an active marketplace that facilitates a frictionless exchange of goods.

## Features
* De-centralized marketplace for in-game assets as NFTs
* Contract that supports any game with tokenized assets following the ERC721 standard
* Visualization of in-game inventory, directly on the platform

## How it works
* Games shall on-board to Trelix and deploy a separate ERC721 contract, where each token represents an in-game item.
* New tokens are minted by the game servers to any user who gets an item in the game. In essence, each in-game item shall be converted to a tradable entity and trade is then facilitated by Trelix.
* The games shall ensure that the ownership of the items as seen in the game is in direct sync with that on the chain. To ensure this, the game servers will fetch the latest assets owned by a user from the contract and populate the user’s inventory in the game. A player can also purchase listed items on Trelix. Once purchased, you will possess on-chain ownership of that asset. The game servers will fetch this information and subsequently, update your in-game inventory. 
* Any item obtained by a player can be put up for sale from within the game. The game shall re-direct to Trelix, where he can put the item up for sale, specifying his proposed price. 

## Existing solutions
Existing solutions like G2G and PlayerAuctions are platforms that facilitate the listing and viewing of items and getting the details to connect in-game. The actual trade itself happens in the game with the platforms acting as escrows, which has several shortcomings . In contrast, Trelix has the potential of converting each item into an actual tradable token, the exchange of which directly happens on Trelix. The possession of the token is equivalent to the possession of the item and trades are seamless.

## Future work
* Support for auctioning items
* Partnering up with games
* Support for ERC1155
* API support game engines like Unity and UnrealEngine
